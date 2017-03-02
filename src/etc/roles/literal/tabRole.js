/**
 * @flow
 */
const tabRole: RoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-posinset': null,
    'aria-selected': 'false',
    'aria-setsize': null,
  },
  relatedConcepts: [],
  requireContextRole: [
    'tablist',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'sectionhead',
    ],
    [
      'roletype',
      'widget',
    ],
  ],
};

export default tabRole;