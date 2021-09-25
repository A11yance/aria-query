/**
 * @flow
 */

import rolesMap from './rolesMap';

type RoleSet = Array<ARIARoleDefinitionKey>;

type ElementARIARoleRelation = [ARIARoleRelationConcept, RoleSet]

type ElementARIARoleRelations = Array<ElementARIARoleRelation>;

const elementRoleMap: ElementARIARoleRelations = [];

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
          const conceptStr = JSON.stringify(concept);
          const elementRoleRelation: ?ElementARIARoleRelation = elementRoleMap.find(relation => JSON.stringify(relation[0]) === conceptStr);
          let roles: RoleSet;
          
          if (elementRoleRelation) {
            roles = elementRoleRelation[1];
          } else {
            roles = [];
          }
          let isUnique = true;
          for (let i = 0; i < roles.length; i++) {
            if (roles[i] === key) {
              isUnique = false;
              break;
            }
          }
          if (isUnique) {
            roles.push(key);
          }
          elementRoleMap.push([concept, roles]);
        }
      }
    }
  }
}

export default elementRoleMap;
