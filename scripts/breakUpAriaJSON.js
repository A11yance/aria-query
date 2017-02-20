#!/usr/bin/env node --harmony

const fs = require('fs');
const path = require('path');

function getTypeof(value) {
  return Array.isArray(value)
    ? 'array'
    : (value == null)
      ? 'null'
      : typeof value;
}

function stringifyBoolean(value) {
  return [(value) ? 'true' : 'false'];
}

function stringifyArray(arr, depth) {
  const output = [];
  if (arr.length === 0) {
    output.push('new Set([])');
  } else {
    output.push('(new Set([');
    let tmp = [];
    (new Set(arr)).forEach(
      value => {
        if (value != null) {
          tmp.push(`${constructIndent(depth)}${triageValue(value, (depth))},`);
        }
      }
    );
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}]))`);
  }
  return output.join('\n');
}

function stringifyObject(value, depth) {
  let output = [];
  const keys = Object.keys(value);
  if (keys.length === 0) {
    output.push('(new Map([]))');
  } else {
    output.push(`(new Map([`);
    const tmp = [];
    keys.forEach(key => {
      tmp.push(`${constructIndent(depth)}['${key}', ${triageValue(value[key], (depth))}],`);
    });
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}]))`);
  }
  return output.join('\n');
}

function constructIndent(depth) {
  return Array(depth).fill('  ').join('');
}

function triageValue(value, depth = 0) {
  let output = [];
  switch(getTypeof(value)) {
    case 'object':
      output = output.concat(stringifyObject(value, (depth + 1)));
      break;
    case 'array':
      output = output.concat(stringifyArray(value, (depth + 1)));
      break;
    case 'boolean':
      output = output.concat(stringifyBoolean(value, (depth + 1)));
      break;
    case 'string':
      output = output.concat(`\'${value}\'`);
      break;
    default:
      output.push('null');
  }
  return output;
}

fs.readFile(path.join('src/etc/roles.json'), {
  encoding: 'utf8'
}, (error, data) => {
  if (error) {
    console.error(error);
    process.exit();
  }
  let aria = JSON.parse(data);
  Object.keys(aria)
    .forEach((name) => {
      const nameArr = name.split('-');
      if (nameArr.length > 1) {
        nameArr[1] = nameArr[1].slice(0, 1).toUpperCase()
          + nameArr[1].slice(1);
      }
      const camelName = nameArr.join('') + 'Role';

      const file = [
        `const ${camelName} = new Map([]);`,
        '',
        Object.keys(aria[name])
          .sort()
          .filter((prop) => !['interactive'].includes(prop))
          .filter((prop) => {
            // Create a set of all the props of the super classes.
            if (prop === 'props') {
              const inheritedProps = new Set([]);
              let superClasses = aria[name]['superClass'];
              while (superClasses.length > 0) {
                const cloned = superClasses.slice();
                superClasses = [];
                cloned.forEach(superClass => {
                  aria[superClass]['props'].forEach(
                    superProp => {
                      const name = (Array.isArray(superProp))
                        ? superProp[0]
                        : superProp;
                      inheritedProps.add(name);
                    }
                  );
                  superClasses = superClasses.concat(aria[superClass]['superClass']);
                });
              }
              // Remove the props that exist in the super classes unless the
              // prop has a default value.
              aria[name]['props'] = aria[name]['props'].filter(
                prop => {
                  let keep = true;
                  if (
                    !Array.isArray(prop)
                    && inheritedProps.has(prop)
                  ) {
                    keep = false;
                  }
                  return keep;
                });
            }
            return true;
          })
          .map((prop) => {
            let value = aria[name][prop];
            if (['props', 'requiredProps'].includes(prop)) {
              value = value.reduce((acc, item) => {
                let name;
                let defaultVal;
                if (Array.isArray(item)) {
                  name = item[0];
                  defaultVal = item[1];
                } else {
                  name = item;
                  defaultVal = null;
                }
                acc[name] = defaultVal;
                return acc;
              }, {});
            }
            return `${camelName}.set(\'${prop}\', ${triageValue(value).join('\n')});`;
          }).join('\n'),
        '',
        `export default ${camelName};`,
      ];
      let baseDir = 'src/etc/aria';
      let subDir = '';
      if (aria[name].abstract) {
        subDir = 'abstract';
      } else if (name.indexOf('doc-') === 0) {
        subDir = 'dpub';
      }
      fs.mkdir(path.join(baseDir, subDir), function () {
        fs.writeFile(path.join(baseDir, subDir, `${camelName}.js`), file.join('\n'), function (err) {
          if (err) throw err;
          console.log(`Created file ${baseDir}/${subDir}/${camelName}.js`);
        });
      });
  });
});
