#!/usr/bin/env node --harmony

const fs = require('fs');
const path = require('path');

const baseDir = 'src/etc/roles';

const literalRequires = [];
const abstractRequires = [];
const dpubRequires = [];

function createCamelName (name) {
  const nameArr = name.split('-');
  if (nameArr.length > 1) {
    nameArr[1] = nameArr[1].slice(0, 1).toUpperCase()
      + nameArr[1].slice(1);
  }
  return nameArr.join('') + 'Role';
}

function createKeyName (key) {
  if (key.includes('-')) {
    return `'${key}'`;
  } else {
    return key;
  }
}

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
    output.push('[]');
  } else {
    output.push('[');
    let tmp = [];
    (new Set(arr)).forEach(
      value => {
        if (value != null) {
          tmp.push(`${constructIndent(depth)}${triageValue(value, (depth))},`);
        }
      }
    );
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}]`);
  }
  return output.join('\n');
}

function stringifyObject(value, depth) {
  let output = [];
  const keys = Object.keys(value);
  if (keys.length === 0) {
    output.push('{}');
  } else {
    output.push(`{`);
    const tmp = [];
    keys.forEach(key => {
      tmp.push(`${constructIndent(depth)}${createKeyName(key)}: ${triageValue(value[key], (depth))},`);
    });
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}}`);
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
    case 'number':
      output = output.concat(`${value}`);
      break;
    default:
      output.push('null');
  }
  return output;
}

fs.readFile(path.join('scripts/roles.json'), {
  encoding: 'utf8'
}, (error, data) => {
  if (error) {
    console.error(error);
    process.exit();
  }
  let aria = JSON.parse(data);

  function superClassWalker (klasses, stack = []) {
    let output = [];
    for (let klass of klasses) {
      const newStack = stack.slice();
      newStack.unshift(klass);
      if (aria[klass] === undefined) {
        throw new TypeError(`Missing role '${klass}'`);
      }
      let superClasses = aria[klass]['superClass'];
      if (superClasses.length > 0) {
        output = output.concat(
          superClassWalker(superClasses, newStack)
        );
      } else {
        output.push(newStack);
      }
    }
    return output;
  }

  // Get a map of superClasses
  const accumulatedSuperClasses = new Map([]);
  Object.keys(aria)
    .forEach((name) => {
      // Create a set of all the props of the super classes.
      let superClasses = aria[name]['superClass'];
      const accumulation = superClassWalker(superClasses);
      const output = accumulatedSuperClasses.set(name, accumulation);
      // console.log(`${name} => ${accumulatedSuperClasses.get(name).map(group => `[${group}]`).join('\n')}`);
    });

  Object.keys(aria)
    .forEach((name) => {
      const camelName = createCamelName(name);
      // Deprecate requireContextRole prop. Replace with requiredContextRole.
      // requireContextRole will be removed in a future version.
      aria[name]['requireContextRole'] = aria[name]['requiredContextRole'];
      // Deprecate baseConcepts prop.
      // baseConcepts will be removed in a future version.
      aria[name]['baseConcepts'] = [];

      const file = [
        '/**',
        ' * @flow',
        ' */',
        `const ${camelName}: ARIARoleDefinition = {`,
        Object.keys(aria[name])
          .sort()
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
            // Always returns true. Using filter simply to chain.
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
            if (prop === 'superClass') {
              value = accumulatedSuperClasses.get(name);
            }
            let depth = 1;
            return `${constructIndent(depth)}${createKeyName(prop)}: ${triageValue(value, depth).join('\n')},`;
          }).join('\n'),
        '};',
        '',
        `export default ${camelName};`,
      ];
      let subDir = '';
      if (aria[name].abstract) {
        subDir = 'abstract';
        abstractRequires.push(camelName);
      } else if (name.indexOf('doc-') === 0) {
        subDir = 'dpub';
        dpubRequires.push(camelName);
      } else {
        subDir = 'literal';
        literalRequires.push(camelName);
      }

      fs.mkdir(path.join(baseDir, subDir), function () {
        fs.writeFile(
          path.join(baseDir, subDir, `${camelName}.js`),
          file.join('\n'),
          {
            encoding: 'utf8'
          },
          function (err) {
            if (err) throw err;
            console.log(`Created file ${baseDir}/${subDir}/${camelName}.js`);
          });
      });
  });
});

function requiresMapper (roles, path, depth) {
  return roles.map(role => {
    return `${constructIndent(depth)}import ${role[1]} from \'./${path}/${role[1]}\';`;
  }).join('\n');
}

function requiresCombiner(roles, depth) {
  return roles.map(role => {
    return `${constructIndent(depth)}[\'${role[0]}\', ${role[1]}]`;
  }).join(',\n');
}

const srcDir = 'src';

fs.readFile(path.join('scripts/roles.json'), {
  encoding: 'utf8'
}, (error, data) => {
  if (error) {
    console.error(error);
    process.exit();
  }

  const literalRequires = [];
  const abstractRequires = [];
  const dpubRequires = [];

  let aria = JSON.parse(data);
  Object.keys(aria)
    .forEach((name) => {
      const camelName = createCamelName(name);

      if (aria[name].abstract) {
        subDir = 'abstract';
        abstractRequires.push([name, camelName]);
      } else if (name.indexOf('doc-') === 0) {
        subDir = 'dpub';
        dpubRequires.push([name, camelName]);
      } else {
        literalRequires.push([name, camelName]);
      }
    });

    // Create a rollup maps.
    [
      [literalRequires, 'ariaLiteralRoles', 'literal'],
      [abstractRequires, 'ariaAbstractRoles', 'abstract'],
      [dpubRequires, 'ariaDpubRoles', 'dpub'],
    ].forEach(requires => {
      fs.writeFile(
        path.join(baseDir, `${requires[1]}.js`),
        '/**\n'
        + ' * @flow\n'
        + ' */\n'
        + `${requiresMapper(requires[0], path.join(requires[2]), 0)}\n`
        + `\n`
        + `const ${requires[1]}: MapOfRoleDefinitions = new Map([\n`
        + `${requiresCombiner(requires[0], 1)}\n`
        + `]);\n`
        + `\n`
        + `export default ${requires[1]};`,
        {
          encoding: 'ascii'
        },
        function (err) {
          if (err) throw err;
          console.log(`Created file ${baseDir}/${requires[1]}.js`);
        }
      );
    });
});
