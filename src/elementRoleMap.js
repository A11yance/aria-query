/**
 * @flow
 */

import deepEqual from 'deep-equal';
import iterationDecorator from "./util/iterationDecorator";
import rolesMap from './rolesMap';
import { truncate } from "fs";

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
          const elementRoleRelation: ?ElementARIARoleRelationTuple = elementRoles.find(relation => deepEqual(relation, concept));
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
    let ret: { [ARIARoleDefinitionKey]: boolean } = {};
    for (var tuple of elementRoles) {
      if (key.name !== tuple[0].name) {
        continue;
      }
      if (
        !Array.isArray(key.attributes) && !Array.isArray(tuple[0].attributes)
        && !Array.isArray(key.constraints) && !Array.isArray(tuple[0].constraints)
        ) {
        tuple[1].forEach(role => ret[role] = true);
        continue;
      }
      let attrsMatch;
      let constraintsMatch = true;
      if (Array.isArray(key.attributes)) {
        attrsMatch = Array.isArray(tuple[0].attributes) && tuple[0].attributes.every(
          candidateAttr => Array.isArray(key.attributes) && key.attributes.some(
            attr => attr.name === candidateAttr.name && attr.value === candidateAttr.value
          )
        );
      } else if (Array.isArray(tuple[0].attributes)) {
        attrsMatch = false;
      }
      if (Array.isArray(key.constraints)) {
        constraintsMatch = key.constraints.some(
          constraint => Array.isArray(tuple[0].constraints) && tuple[0].constraints.some(
            candidateConstraint => constraint === candidateConstraint
          )
        );
      }
      if (
        (attrsMatch === true && constraintsMatch === true)
        || (attrsMatch && constraintsMatch === undefined)
        || (attrsMatch === undefined && constraintsMatch === true)
      ) {
        tuple[1].forEach(role => ret[role] = true);
        continue;
      }
    }
    const roleSet = Object.keys(ret);
    if (roleSet.length > 0) {
      return roleSet;
    }
    return;
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

export default (
  iterationDecorator(
    elementRoleMap,
    elementRoleMap.entries(),
  ): TAriaQueryMap<ElementARIARoleRelations, ARIARoleRelationConcept, RoleSet>
);
