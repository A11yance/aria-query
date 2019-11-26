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
  props: {
    'aria-expanded': null,
    'aria-orientation': 'horizontal',
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'hr',
      },
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