/**
 * @flow
 */

import iterationDecorator from "./util/iterationDecorator";
import rolesMap from './rolesMap';

type RoleSet = Array<ARIARoleDefinitionKey>;
type ElementARIARoleRelationTuple = [ARIARoleRelationConcept, RoleSet]
type ElementARIARoleRelations = Array<ElementARIARoleRelationTuple>;

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
          elementRoles.push([concept, [key]]);
        }
      }
    }
  }
}

const elementRoleMap: TAriaQueryMap<
  ElementARIARoleRelations,
  ARIARoleRelationConcept,
  RoleSet,
> = {
  entries: function (): ElementARIARoleRelations {
    return elementRoles;
  },
  forEach: function (
    fn: (RoleSet, ARIARoleRelationConcept, ElementARIARoleRelations) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of elementRoles) {
      fn.call(thisArg, values, key, elementRoles);
    }
  },
  get: function (key: ARIARoleRelationConcept): ?RoleSet {
    const item = elementRoles.find(tuple => (
      key.name === tuple[0].name && ariaRoleRelationConceptAttributeEquals(key.attributes, tuple[0].attributes)
    ));
    return item && item[1];
  },
  has: function (key: ARIARoleRelationConcept): boolean {
    return !!elementRoleMap.get(key);
  },
  keys: function (): Array<ARIARoleRelationConcept> {
    return elementRoles.map(([key]) => key);
  },
  values: function (): Array<RoleSet> {
    return elementRoles.map(([, values]) => values);
  },
};

function ariaRoleRelationConceptAttributeEquals(
  a?: Array<ARIARoleRelationConceptAttribute>,
  b?: Array<ARIARoleRelationConceptAttribute>,
): boolean {

  if (a === undefined && b !== undefined) {
    return false;
  }

  if (a !== undefined && b === undefined) {
    return false;
  }

  if (a !== undefined && b !== undefined) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i].name !== b[i].name || a[i].value !== b[i].value) {
        return false;
      }

      if (a[i].constraints === undefined && b[i].constraints !== undefined) {
        return false;
      }

      if (a[i].constraints !== undefined && b[i].constraints === undefined) {
        return false
      }

      if (a[i].constraints !== undefined && b[i].constraints !== undefined) {
        if (a[i].constraints.length !== b[i].constraints.length) {
          return false;
        }

        for (let j = 0; j < a[i].constraints.length; j++) {
          if (a[i].constraints[j] !== b[i].constraints[j]) {
            return false;
          }
        }
      }
    }
  }

  return true;
}

export default (
  iterationDecorator(
    elementRoleMap,
    elementRoleMap.entries(),
  ): TAriaQueryMap<ElementARIARoleRelations, ARIARoleRelationConcept, RoleSet>
);
