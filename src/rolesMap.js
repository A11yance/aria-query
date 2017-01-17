import rolesJSON from './etc/roles.json';

const roles = Object
  .keys(rolesJSON)
  .reduce(
    (map, key) => map.set(key, rolesJSON[key]),
    new Map(),
  );

export default roles;
