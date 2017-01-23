/**
 * @flow
 */

import rolesMap from './rolesMap';

type RoleSet = Set<string>;

type ElementRoleRelationMap = Map<string, RoleSet>;

// $FlowFixMe: spread operand is valid on $Iterable
const elementRoleMap: ElementRoleRelationMap = [...rolesMap.keys()]
  .reduce((
      accumulator: ElementRoleRelationMap,
      key: string,
    ): ElementRoleRelationMap => {
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
            const concept = JSON.stringify(relation.concept);
            const roles: RoleSet = accumulator.get(concept) || new Set([]);
            roles.add(key);
            accumulator.set(concept, roles);
          }
        });
      }
      return accumulator;
    }, new Map([]));

export default elementRoleMap;
