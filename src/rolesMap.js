/**
 * @flow
 */

import ariaAbstractRoles from './etc/roles/ariaAbstractRoles';
import ariaLiteralRoles from './etc/roles/ariaLiteralRoles';
import ariaDpubRoles from './etc/roles/ariaDpubRoles';

type MapOfRoleDefinitions = Map<string, RoleDefinition>;

const rolesMap: MapOfRoleDefinitions = new Map([]);
[
  ariaAbstractRoles,
  ariaLiteralRoles,
  ariaDpubRoles,
].forEach(roleSet  => {
  roleSet.forEach(
    (
      roleDefinition: RoleDefinition,
      name: string
    ) => rolesMap.set(name, roleDefinition)
  );
});

rolesMap.forEach((roleDefinition: RoleDefinition, name: string) => {
  // Conglomerate the properties
  for (let superClassIter of roleDefinition.superClass) {
    for (let superClassName of superClassIter) {
      const superClassDefinition = rolesMap.get(superClassName);
      if (superClassDefinition) {
        for (let prop of Object.keys(superClassDefinition.props)) {
          if (
            !Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)
          ) {
            Object.assign(
              roleDefinition.props,
              {[prop]: superClassDefinition.props[prop]},
            );
          }
        }
      }
    }
  }
});

export default rolesMap;
