/**
 * @flow
 */

import roles from "./roles";

const roleElement: {
  [ARIARoleDefintionKey]: Set<ARIARoleRelationConcept>,
} = {};

Object.keys(roles).forEach((key: ARIARoleDefintionKey): void => {
  const role = roles[key];
  if (role) {
    role.baseConcepts
      .concat(role.relatedConcepts)
      .forEach((relation: ARIARoleRelation): void => {
        if (relation.module === "HTML") {
          const concept = relation.concept;
          if (concept) {
            const relationConcepts = roleElement[key] || new Set([]);
            relationConcepts.add(concept);
            roleElement[key] = relationConcepts;
          }
        }
      });
  }
});

export default roleElement;
