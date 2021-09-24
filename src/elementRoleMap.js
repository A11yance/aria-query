/**
 * @flow
 */

import rolesMap from './rolesMap';

type RoleSet = Set<ARIARoleDefintionKey>;

type ElementARIARoleRelationMap = Map<ARIARoleRelationConcept, RoleSet>;

const elementRoleMap: ElementARIARoleRelationMap = new Map([]);

const keys = rolesMap.keys();

for (let key: ARIARoleDefintionKey of keys) {
  const role = rolesMap.get(key);
  if (role) {
    const concepts = [].concat(role.baseConcepts, role.relatedConcepts);
    for (let relation: ARIARoleRelation of concepts) {
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
