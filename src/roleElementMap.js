/**
 * @flow
 */

import rolesMap from './rolesMap';

type ARIARoleRelationConceptSet = Set<ARIARoleRelationConcept>;

type RoleElementRelationMap = Map<ARIARoleDefintionKey, ARIARoleRelationConceptSet>;

const roleElementMap: RoleElementRelationMap = new Map([]);

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
            const relationConcepts = roleElementMap.get(key) || new Set([]);
            relationConcepts.add(concept);
            roleElementMap.set(key, relationConcepts);
          }
        }
      });
    }
  });

export default roleElementMap;
