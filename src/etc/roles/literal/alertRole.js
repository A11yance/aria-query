/**
 * @flow
 */
const alertRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-atomic': 'true',
    'aria-live': 'assertive',
  },
  relatedConcepts: [
    {
      module: 'XForms',
      concept: {
        name: 'alert',
      },
    },
  ],
  requireContextRole: [],
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

export default alertRole;