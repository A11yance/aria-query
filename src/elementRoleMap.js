/**
 * @flow
 */

import rolesMap from './rolesMap';

type RoleSet = Set<ARIARoleDefintionKey>;

type ElementARIARoleRelationMap = Map<ARIARoleRelationConcept, RoleSet>;

const elementRoleMap: ElementARIARoleRelationMap = new Map([]);

for (const key: ARIARoleDefintionKey of [...rolesMap.keys()]) {
  const role = rolesMap.get(key);
  if (role) {
    const relations: Array<ARIARoleRelation> = role.baseConcepts.concat(role.relatedConcepts);
    for (let i = 0; i < relations.length; i++) {
      const relation = relations[i];
      if (relation.module === 'HTML') {
        const concept = relation.concept;
        if (concept) {
          const conceptStr = JSON.stringify(concept);

          const elementRoles = Array.from(elementRoleMap.entries());
          let roles: ?RoleSet;

          for (let elementRoleIndex = 0; elementRoleIndex < elementRoles.length; elementRoleIndex++) {
            const elementRolesEntry = elementRoles[elementRoleIndex];
            if (JSON.stringify(elementRolesEntry[0]) === conceptStr) {
              roles = elementRolesEntry[1];
              break;
            }
          }

          if (!roles) {
            roles = new Set([]);
          }
          roles.add(key);
          elementRoleMap.set(concept, roles);
        }
      }
    }
  }
}

export default elementRoleMap;
