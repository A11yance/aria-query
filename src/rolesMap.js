/**
 * @flow
 */

import ariaAbstractRoles from './etc/roles/ariaAbstractRoles';
import ariaLiteralRoles from './etc/roles/ariaLiteralRoles';
import ariaDpubRoles from './etc/roles/ariaDpubRoles';
import ariaGraphicsRoles from './etc/roles/ariaGraphicsRoles';
import iterationDecorator from "./util/iterationDecorator";

const roles: RoleDefinitions = [].concat(
  ariaAbstractRoles,
  ariaLiteralRoles,
  ariaDpubRoles,
  ariaGraphicsRoles,
);

roles.forEach(([
  ,
  roleDefinition,
]: RoleDefinitionTuple) => {
  // Conglomerate the properties
  for (let superClassIter of roleDefinition.superClass) {
    for (let superClassName of superClassIter) {
      const superClassRoleTuple = roles.find(([
        name,
      ]: RoleDefinitionTuple) => name === superClassName);
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

const rolesMap: TAriaQueryMap<
  RoleDefinitions,
  ARIARoleDefinitionKey,
  ARIARoleDefinition,
> = {
  entries: function (): RoleDefinitions {
    return roles;
  },
  forEach: function (
    fn: (ARIARoleDefinition, ARIARoleDefinitionKey, RoleDefinitions) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of roles) {
      fn.call(thisArg, values, key, roles);
    }
  },
  get: function (key: ARIARoleDefinitionKey): ?ARIARoleDefinition {
    const item = roles.find(tuple => (tuple[0] === key) ? true : false);
    return item && item[1];
  },
  has: function (key: ARIARoleDefinitionKey): boolean {
    return !!rolesMap.get(key);
  },
  keys: function (): Array<ARIARoleDefinitionKey> {
    return roles.map(([key]) => key);
  },
  values: function (): Array<ARIARoleDefinition> {
    return roles.map(([, values]) => values);
  }
};

export default (
  iterationDecorator(
    rolesMap,
    rolesMap.entries(),
  ): TAriaQueryMap<RoleDefinitions, ARIARoleDefinitionKey, ARIARoleDefinition>
);
