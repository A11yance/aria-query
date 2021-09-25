/**
 * @flow
 */

import rolesMap from './rolesMap';

type ARIARoleRelationConcepts = Array<ARIARoleRelationConcept>;

type RoleElementRelation = [ARIARoleDefinitionKey, ARIARoleRelationConcepts];

type RoleElementRelations = Array<RoleElementRelation>;

const roleElementMap: RoleElementRelations = [];

const keys = rolesMap.keys();

for (let i = 0; i < keys.length; i++) {
  const key: ARIARoleDefinitionKey = keys[i];
  const role = rolesMap.get(key);
  if (role) {
    const concepts = [].concat(role.baseConcepts, role.relatedConcepts);
    for (let k = 0; k < concepts.length; k++) {
      const relation: ARIARoleRelation = concepts[k];
      if (relation.module === 'HTML') {
        const concept = relation.concept;
        if (concept) {
          const roleElementRelation: ?RoleElementRelation = roleElementMap.find((item) => item[0] === key);
          let relationConcepts: ARIARoleRelationConcepts;
          if (roleElementRelation) {
            relationConcepts = roleElementRelation[1];
          } else {
            relationConcepts = [];
          }
          relationConcepts.push(concept);
          roleElementMap.push([key, relationConcepts]);
        }
      }
    }
  }
}

export default roleElementMap;
