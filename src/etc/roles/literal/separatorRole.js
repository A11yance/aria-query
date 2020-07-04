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
    'aria-disabled': null,
    'aria-valuetext': null,
    'aria-orientation': 'horizontal',
    'aria-valuemax': '100',
    'aria-valuemin': '0',
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