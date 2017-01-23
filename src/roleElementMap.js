/**
 * @flow
 */

import rolesMap from './rolesMap';

type RelationConceptSet = Set<string>;

type RoleElementRelationMap = Map<string, RelationConceptSet>;

// $FlowFixMe: spread operand is valid on $Iterable
const roleElementMap: RoleElementRelationMap = [...rolesMap.keys()]
  .reduce((
      accumulator: RoleElementRelationMap,
      key: string,
    ): RoleElementRelationMap => {
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
            const concept: RelationConcept = relation.concept;
            const relationConcepts: RelationConceptSet = accumulator.get(key) || new Set([]);
            relationConcepts.add(JSON.stringify(concept));
            accumulator.set(key, relationConcepts);
          }
        });
      }
      return accumulator;
    }, new Map([]));

export default roleElementMap;
