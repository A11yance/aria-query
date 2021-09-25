/**
 * @flow
 */

import ariaAbstractRoles from './etc/roles/ariaAbstractRoles';
import ariaLiteralRoles from './etc/roles/ariaLiteralRoles';
import ariaDpubRoles from './etc/roles/ariaDpubRoles';

export type RolesMap = {|
  entries: () => RoleDefinitions,
  findIndex: (key: ARIARoleDefinitionKey) => number,
  get: (key: ARIARoleDefinitionKey) => ?ARIARoleDefinition,
  has: (key: ARIARoleDefinitionKey) => boolean,
  keys: () => Array<ARIARoleDefinitionKey>,
  set: (key: ARIARoleDefinitionKey, ARIARoleDefinition) => void,
  values: () => Array<ARIARoleDefinition>,
|};

const roles: RoleDefinitions = [].concat(
  ariaAbstractRoles,
  ariaLiteralRoles,
  ariaDpubRoles
);

roles.forEach(([
  ,
  roleDefinition: ARIARoleDefinition,
]) => {
  // Conglomerate the properties
  for (let superClassIter of roleDefinition.superClass) {
    for (let superClassName of superClassIter) {
      const superClassRoleTuple = roles.find(([
        name: string,
      ]) => name === superClassName);
      if (superClassRoleTuple) {
        const superClassDefinition = superClassRoleTuple[1];
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

const rolesMap: RolesMap = {
  entries: function () {
    return roles;
  },
  findIndex: function (key: ARIARoleDefinitionKey): number {
    return roles.findIndex(tuple => tuple[0] === key);
  },
  get: function (key: ARIARoleDefinitionKey): ?ARIARoleDefinition {
    const item = roles.find(tuple => (tuple[0] === key) ? true : false);
    return item && item[1];
  },
  has: function (key: ARIARoleDefinitionKey): boolean {
    return !!this.get(key);
  },
  keys: function (): Array<ARIARoleDefinitionKey> {
    return roles.map(([key]) => key);
  },
  set: function(key: ARIARoleDefinitionKey, definition: ARIARoleDefinition): void {
    const index = this.findIndex(key);
    if (index > -1) {
      roles.splice(index, 1, [key, definition]);
    } else {
      roles.push([key, definition]);
    }
  },
  values: function (): Array<ARIARoleDefinition> {
    return roles.map(([, values]) => values);
  }
};

export default rolesMap;
