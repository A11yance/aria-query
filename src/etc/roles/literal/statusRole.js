/**
 * @flow
 */
const statusRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-atomic': 'true',
    'aria-live': 'polite',
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'output',
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
      'section',
    ],
  ],
};

export default statusRole;