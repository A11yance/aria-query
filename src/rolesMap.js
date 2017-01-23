/**
 * @flow
 */

import rolesJSON from './etc/roles.json';

type MapOfRoleDefinitions = Map<string, RoleDefinition>;

const roles: MapOfRoleDefinitions = new Map([]);

Object
  .keys(rolesJSON)
  .reduce(
    (map, key) => map.set(key, (rolesJSON[key]: RoleDefinition)),
    roles,
  );

export default roles;
