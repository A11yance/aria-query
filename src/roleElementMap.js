/**
 * @flow
 */

import iterationDecorator from "./util/iterationDecorator";
import rolesMap from './rolesMap';

type ARIARoleRelationConcepts = Array<ARIARoleRelationConcept>;
type RoleElementRelation = [ARIARoleDefinitionKey, ARIARoleRelationConcepts];
type RoleElementRelations = Array<RoleElementRelation>;

const roleElement: RoleElementRelations = [];

const keys = rolesMap.keys();

for (let i = 0; i < keys.length; i++) {
  const key: ARIARoleDefinitionKey = keys[i];
  const role = rolesMap.get(key);
  const relationConcepts: ARIARoleRelationConcepts = [];
  if (role) {
    const concepts = [].concat(role.baseConcepts, role.relatedConcepts);
    for (let k = 0; k < concepts.length; k++) {
      const relation: ARIARoleRelation = concepts[k];
      if (relation.module === 'HTML') {
        const concept = relation.concept;
        if (concept != null) {
          relationConcepts.push(concept);
        }
      }
    }
    if (relationConcepts.length > 0) {
      roleElement.push([key, relationConcepts]);
    }
  }
}

const roleElementMap: TAriaQueryMap<
  RoleElementRelations,
  ARIARoleDefinitionKey,
  ARIARoleRelationConcepts,
> = {
  entries: function (): RoleElementRelations {
    return roleElement;
  },
  forEach: function (
    fn: (ARIARoleRelationConcepts, ARIARoleDefinitionKey, RoleElementRelations) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of roleElement) {
      fn.call(thisArg, values, key, roleElement);
    }
  },
  get: function (key: ARIARoleDefinitionKey): ?ARIARoleRelationConcepts {
    const item = roleElement.filter(tuple => (tuple[0] === key) ? true : false)[0];
    return item && item[1];
  },
  has: function (key: ARIARoleDefinitionKey): boolean {
    return !!roleElementMap.get(key);
  },
  keys: function (): Array<ARIARoleDefinitionKey> {
    return roleElement.map(([key]) => key);
  },
  values: function (): Array<ARIARoleRelationConcepts> {
    return roleElement.map(([, values]) => values);
  }
};

export default (
  iterationDecorator(
    roleElementMap,
    roleElementMap.entries(),
  ): TAriaQueryMap<RoleElementRelations, ARIARoleDefinitionKey, ARIARoleRelationConcepts>
);
