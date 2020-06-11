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
      concept: {
        name: 'guide',
      },
      module: 'DAISY',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
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