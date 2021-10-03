/**
 * @flow
 */

import rolesMap from './rolesMap';

type RoleSet = Array<ARIARoleDefinitionKey>;
type ElementARIARoleRelationTuple = [ARIARoleRelationConcept, RoleSet]
type ElementARIARoleRelations = Array<ElementARIARoleRelationTuple>;
type RolesMap = {|
  entries: () => ElementARIARoleRelations,
  get: (key: ARIARoleRelationConcept) => ?RoleSet,
  has: (key: ARIARoleRelationConcept) => boolean,
  keys: () => Array<ARIARoleRelationConcept>,
  values: () => Array<RoleSet>,
|};

const elementRoles: ElementARIARoleRelations = [];

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
          const elementRoleRelation: ?ElementARIARoleRelationTuple = elementRoles.find(relation => JSON.stringify(relation[0]) === conceptStr);
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
          elementRoles.push([concept, roles]);
        }
      }
    }
  }
}

const elementRoleMap: RolesMap = {
  entries: function (): ElementARIARoleRelations {
    return elementRoles;
  },
  get: function (key: ARIARoleRelationConcept): ?RoleSet {
    const item = elementRoles.find(
      tuple => JSON.stringify(tuple[0]) === JSON.stringify(key) ? true : false
    );
    return item && item[1];
  },
  has: function (key: ARIARoleRelationConcept): boolean {
    return !!this.get(key);
  },
  keys: function (): Array<ARIARoleRelationConcept> {
    return elementRoles.map(([key]) => key);
  },
  values: function (): Array<RoleSet> {
    return elementRoles.map(([, values]) => values);
  }
};

export default elementRoleMap;
