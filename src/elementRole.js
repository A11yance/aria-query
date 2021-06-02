/**
 * @flow
 */

import roles from "./roles";

// TODO: Create actual keys for ARIARoleRelationConcept instead of JSON.stringify
const elementRoles: [ARIARoleRelationConcept, Set<ARIARoleDefintionKey>][] = [];

Object.keys(roles).forEach((key: ARIARoleDefintionKey): void => {
  const role = roles[key];
  if (role) {
    role.baseConcepts
      .concat(role.relatedConcepts)
      .forEach((relation: ARIARoleRelation): void => {
        if (relation.module === "HTML") {
          const concept = relation.concept;
          if (concept) {
            const conceptStr = JSON.stringify(concept);

            let elementRoleExists = false;
            elementRoles.forEach((elementRole) => {
              if (JSON.stringify(elementRole[0]) === conceptStr) {
                elementRole[1].add(key);
                elementRoleExists = true;
              }
            });

            if (!elementRoleExists) {
              elementRoles.push([concept, new Set([key])]);
            }
          }
        }
      });
  }
});

export default elementRoles;
