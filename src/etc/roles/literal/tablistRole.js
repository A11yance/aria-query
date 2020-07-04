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
  prohibitedProps: [],
  props: {
    'aria-multiselectable': null,
    'aria-orientation': 'horizontal',
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