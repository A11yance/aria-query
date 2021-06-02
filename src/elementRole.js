/**
 * @flow
 */

import roles from "./roles";

const elementRole: { [ARIARoleRelationConcept]: Set<ARIARoleDefintionKey> } =
  {};

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

            let roles = new Set<ARIARoleDefintionKey>([]);
            Object.keys(elementRole).forEach((key) => {
              if (JSON.stringify(key) === conceptStr) {
                // `key` cannot be anything but ARIARoleRelationConcept
                roles = elementRole[((key: any): ARIARoleRelationConcept)];
              }
            });

            roles.add(key);
            elementRole[concept] = roles;
          }
        }
      });
  }
});

export default elementRole;
