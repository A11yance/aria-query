/**
 * @flow
 */

import ariaAbstractRoles from "./etc/roles/ariaAbstractRoles";
import ariaLiteralRoles from "./etc/roles/ariaLiteralRoles";
import ariaDpubRoles from "./etc/roles/ariaDpubRoles";

const roles: { [ARIARoleDefintionKey]: ARIARoleDefinition } = {};

[ariaAbstractRoles, ariaLiteralRoles, ariaDpubRoles].forEach((roleSet) => {
  Object.keys(roleSet).forEach((name) => {
    roles[name] = roleSet[name];
  });
});

Object.keys(roles).forEach((name) => {
  const roleDefinition = roles[name];
  // Conglomerate the properties
  roleDefinition.superClass.forEach((superClassIter) => {
    superClassIter.forEach((superClassName) => {
      const superClassDefinition = roles[superClassName];
      if (superClassDefinition) {
        Object.keys(superClassDefinition.props).forEach((prop: string) => {
          if (
            !Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)
          ) {
            Object.assign(roleDefinition.props, {
              [prop]: superClassDefinition.props[prop],
            });
          }
        });
      }
    });
  });
});

export default roles;
