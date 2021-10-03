/**
 * @flow
 */

import rolesMap from './rolesMap';

type ARIARoleRelationConcepts = Array<ARIARoleRelationConcept>;
type RoleElementRelation = [ARIARoleDefinitionKey, ARIARoleRelationConcepts];
type RoleElementRelations = Array<RoleElementRelation>;
type RoleElementMap = {|
  entries: () => RoleElementRelations,
  get: (key: ARIARoleDefinitionKey) => ?ARIARoleRelationConcepts,
  has: (key: ARIARoleDefinitionKey) => boolean,
  keys: () => Array<ARIARoleDefinitionKey>,
  values: () => Array<ARIARoleRelationConcepts>,
|};

const roleElement: RoleElementRelations = [];

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
          const roleElementRelation: ?RoleElementRelation = roleElement.find((item) => item[0] === key);
          let relationConcepts: ARIARoleRelationConcepts;
          if (roleElementRelation) {
            relationConcepts = roleElementRelation[1];
          } else {
            relationConcepts = [];
          }
          relationConcepts.push(concept);
          roleElement.push([key, relationConcepts]);
        }
      }
    }
  }
}

const roleElementMap: RoleElementMap = {
  entries: function (): RoleElementRelations {
    return roleElement;
  },
  get: function (key: ARIARoleDefinitionKey): ?ARIARoleRelationConcepts {
    const item = roleElement.find(tuple => (tuple[0] === key) ? true : false);
    return item && item[1];
  },
  has: function (key: ARIARoleDefinitionKey): boolean {
    return !!this.get(key);
  },
  keys: function (): Array<ARIARoleDefinitionKey> {
    return roleElement.map(([key]) => key);
  },
  values: function (): Array<ARIARoleRelationConcepts> {
    return roleElement.map(([, values]) => values);
  }
};

export default roleElementMap;
