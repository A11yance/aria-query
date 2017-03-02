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
      value: RoleDefinition,
      key: string
    ) => rolesMap.set(key, value)
  );
});

export default rolesMap;
