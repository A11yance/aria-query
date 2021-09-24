/**
 * @flow
 */

import rolesMap from './rolesMap';

type ARIARoleRelationConceptSet = Set<ARIARoleRelationConcept>;

type RoleElementRelationMap = Map<ARIARoleDefintionKey, ARIARoleRelationConceptSet>;

const roleElementMap: RoleElementRelationMap = new Map([]);

const keys = rolesMap.keys();

for (let key: ARIARoleDefintionKey of keys) {
  const role = rolesMap.get(key);
  if (role) {
    const concepts = [].concat(role.baseConcepts, role.relatedConcepts);
    for (let relation: ARIARoleRelation of concepts) {
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
