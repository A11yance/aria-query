/**
 * @flow
 */
const tablistRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-level': null,
    'aria-multiselectable': null,
    'aria-orientation': 'horizontal',
    'aria-expanded': null,
  },
  relatedConcepts: [
    {
      module: 'DAISY',
      concept: {
        name: 'guide',
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [
    [
      'tab',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'composite',
    ],
  ],
};

export default tablistRole;