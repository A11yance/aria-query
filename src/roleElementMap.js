/**
 * @flow
 */

import rolesMap from './rolesMap';

type ARIARoleRelationConceptSet = Set<ARIARoleRelationConcept>;

type RoleElementRelationMap = Map<ARIARoleDefintionKey, ARIARoleRelationConceptSet>;

const roleElementMap: RoleElementRelationMap = new Map([]);

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
          const relationConcepts = roleElementMap.get(key) || new Set([]);
          relationConcepts.add(concept);
          roleElementMap.set(key, relationConcepts);
        }
      }
    }
  }
}

export default roleElementMap;
