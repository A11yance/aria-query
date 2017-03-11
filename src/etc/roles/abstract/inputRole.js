/**
 * @flow
 */
const inputRole: ARIARoleDefinition = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [
    {
      module: 'XForms',
      concept: {
        name: 'input',
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
    ],
  ],
};

export default inputRole;