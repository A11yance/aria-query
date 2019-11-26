/**
 * @flow
 */
const tabRole: ARIARoleDefinition = {
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
  requiredContextRole: [
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