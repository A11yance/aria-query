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
  prohibitedProps: [],
  props: {
    'aria-expanded': null,
    'aria-posinset': null,
    'aria-setsize': null,
    'aria-selected': 'false',
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