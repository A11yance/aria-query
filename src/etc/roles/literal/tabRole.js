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
    'aria-disabled': null,
    'aria-expanded': null,
    'aria-haspopup': null,
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