/**
 * @flow
 */

import ariaAbstractRoles from './etc/aria/ariaAbstractRoles';
import ariaLiteralRoles from './etc/aria/ariaLiteralRoles';
import ariaDpubRoles from './etc/aria/ariaDpubRoles';

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
