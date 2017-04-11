/**
 * @flow
 */

import rolesMap from './rolesMap';
import type { ARIARoleDefintionKey } from './index';

type RoleSet = Set<ARIARoleDefintionKey>;

type ElementARIARoleRelationMap = Map<ARIARoleRelationConcept, RoleSet>;

const elementRoleMap: ElementARIARoleRelationMap = new Map([]);

[...rolesMap.keys()]
  .forEach((
    key: ARIARoleDefintionKey,
  ): void => {
    const role = rolesMap.get(key);
    if (role) {
      [
        ...role.baseConcepts,
        ...role.relatedConcepts,
      ]
      .forEach((
        relation: ARIARoleRelation,
      ): void => {
        if (relation.module === 'HTML') {
          const concept = relation.concept;
          if (concept) {
            const conceptStr = JSON.stringify(concept);

            let roles: ?RoleSet = ([...elementRoleMap.entries()]
              .find(
                ([key, value]) => JSON.stringify(key) === conceptStr)|| []
              )[1];

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
