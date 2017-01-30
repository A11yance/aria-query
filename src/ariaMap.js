/**
 * @flow
 */

import ariaJSON from './etc/aria.json';

type MapOfRoleDefinitions = Map<string, RoleDefinition>;

const ariaMap: MapOfRoleDefinitions = new Map([]);

Object
  .keys(ariaJSON)
  .reduce(
    (map, key) => map.set(key, (ariaJSON[key]: RoleDefinition)),
    ariaMap,
  );

export default ariaMap;
