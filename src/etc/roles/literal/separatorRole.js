/**
 * @flow
 */
const separatorRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-orientation': 'horizontal',
  },
  relatedConcepts: [
    {
      concept: {
        name: 'hr',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
    ],
  ],
};

export default separatorRole;