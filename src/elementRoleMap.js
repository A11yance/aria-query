/**
 * @flow
 */

import rolesMap from './rolesMap';

type RoleSet = Set<ARIARoleDefintionKey>;

type ElementARIARoleRelationMap = Map<ARIARoleRelationConcept, RoleSet>;

const elementRoleMap: ElementARIARoleRelationMap = new Map([]);

const keys = Array.from(rolesMap.keys());

for (let i = 0; i < keys.length; i++) {
  const key: ARIARoleDefintionKey = keys[i];
  const role = rolesMap.get(key);
  if (role) {
    const concepts = [].concat(role.baseConcepts, role.relatedConcepts);
    for (let k = 0; k < concepts.length; k++) {
      const relation: ARIARoleRelation = concepts[k];
      if (relation.module === 'HTML') {
        const concept = relation.concept;
        if (concept) {
          const conceptStr = JSON.stringify(concept);

          let roles: ?RoleSet = (Array.from(elementRoleMap.entries())
            .find(
              // eslint-disable-next-line no-unused-vars
              ([key, value]) => JSON.stringify(key) === conceptStr)|| []
            )[1];

          if (!roles) {
            roles = new Set([]);
          }
          roles.add(key);
          elementRoleMap.set(concept, roles);
        }
      }
    }
  }
}

export default elementRoleMap;
