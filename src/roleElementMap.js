/**
 * @flow
 */

import rolesMap from './rolesMap';

type RelationConceptSet = Set<RelationConcept>;

type RoleElementRelationMap = Map<string, RelationConceptSet>;

const roleElementMap: RoleElementRelationMap = new Map([]);

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
            const relationConcepts = roleElementMap.get(key) || new Set([]);
            relationConcepts.add(concept);
            roleElementMap.set(key, relationConcepts);
          }
        }
      });
    }
  });

export default roleElementMap;
