/**
 * @flow
 */

import rolesMap from './rolesMap';

type RoleSet = Set<string>;

type ElementRoleRelationMap = Map<RelationConcept, RoleSet>;

const elementRoleMap: ElementRoleRelationMap = new Map([]);

[...rolesMap.keys()]
  .forEach((
    key: string,
  ): void => {
    const role = rolesMap.get(key);
    if (role) {
      [
        ...role.baseConcepts,
        ...role.relatedConcepts,
      ]
      .forEach((
        relation: RoleRelation,
      ): void => {
        if (relation.module === 'HTML') {
          const concept = relation.concept;
          if (concept) {
            const conceptStr = JSON.stringify(concept);

            let roles: ?RoleSet = ([...elementRoleMap.entries()]
              .find(([key, value]) => JSON.stringify(key) === conceptStr)
              || [])[1];

            if (!roles) {
              roles = new Set([]);
            }
            roles.add(key);
            elementRoleMap.set(concept, roles);
          }
        }
      });
    }
  });

export default elementRoleMap;
