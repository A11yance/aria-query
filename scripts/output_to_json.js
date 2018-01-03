#!/usr/bin/env node --harmony

var program = require('commander');

program
  .version('0.7.0')
  .option('--ariaprops', 'output ARIA property definitions')
  .option('--dom', 'output DOM')
  .option('--elementrole', 'output element to role relationships')
  .option('--roleelement', 'output role to element relationships')
  .option('--roles', 'output roles')
  .parse(process.argv);

const output = Object.create(null);

if (program.ariaprops) {
  output['ariaprops'] = [...require('../lib/ariaPropsMap.js').default];
}
if (program.dom) {
  output['dom'] = [...require('../lib/domMap.js').default];
}
if (program.elementrole) {
  const elementRole = [...require('../lib/elementRoleMap.js').default];
  const elementRoleConverted = [];
  for (let [key, value] of elementRole) {
    elementRoleConverted.push([key, [...value]]);
  }
  output['elementrole'] = elementRoleConverted;
}
if (program.roleelement) {
  const roleElement = [...require('../lib/roleElementMap.js').default];
  const roleElementConverted = Object.create(null);
  for (let [key, value] of roleElement) {
    roleElementConverted[key] = [...value];
  }
  output['roleelement'] = roleElementConverted;
}
if (program.roles) {
  output['roles'] = [...require('../lib/rolesMap.js').default];
}

if (Object.keys(output).length) {
  process.stdout.write(JSON.stringify(output, null, ' '));
}
