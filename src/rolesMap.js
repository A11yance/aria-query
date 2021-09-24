/**
 * @flow
 */

import ariaAbstractRoles from './etc/roles/ariaAbstractRoles';
import ariaLiteralRoles from './etc/roles/ariaLiteralRoles';
import ariaDpubRoles from './etc/roles/ariaDpubRoles';

const rolesMap: MapOfRoleDefinitions = new Map([]);
[
  ariaAbstractRoles,
  ariaLiteralRoles,
  ariaDpubRoles,
].forEach((roleSet): void => {
  roleSet.forEach(
    (
      roleDefinition: ARIARoleDefinition,
      name: ARIARoleDefintionKey,
    ): MapOfRoleDefinitions => rolesMap.set(name, roleDefinition)
  );
});

rolesMap.forEach((
  roleDefinition: ARIARoleDefinition,
  // eslint-disable-next-line no-unused-vars
  name: string,
) => {
  // Conglomerate the properties
  for (let superClassIter of roleDefinition.superClass) {
    for (let superClassName of superClassIter) {
      const superClassDefinition = rolesMap.get(superClassName);
      if (superClassDefinition) {
        for (let prop: string of Object.keys(superClassDefinition.props)) {
          if (
            // $FlowIssue Accessing the hasOwnProperty on the Object prototype is fine.
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
