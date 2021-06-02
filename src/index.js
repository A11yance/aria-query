/**
 * @flow
 */

import ariaPropsRecord from "./ariaProps";
import domRecord from "./dom";
import rolesRecord from "./roles";
import elementRoleEntries from "./elementRole";
import roleElementRecord from "./roleElement";

function recordToMap<K, V>(record: { [K]: V }): Map<K, V> {
  return new Map(
    Object.keys(record).map((key) => {
      return [key, record[key]];
    })
  );
}

export const aria: MapOfARIAPropertyDefinitions = recordToMap(ariaPropsRecord);
export const dom: MapOfDOMDefinitions = recordToMap(domRecord);
export const roles: MapOfRoleDefinitions = recordToMap(rolesRecord);
export const elementRoles: ElementARIARoleRelationMap = new Map(
  elementRoleEntries
);
export const roleElements: MapOfRoleRelationConceptSets =
  recordToMap(roleElementRecord);
