/**
 * @flow
 */
const textboxRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-activedescendant': null,
    'aria-autocomplete': null,
    'aria-errormessage': null,
    'aria-haspopup': null,
    'aria-invalid': null,
    'aria-multiline': null,
    'aria-placeholder': null,
    'aria-readonly': null,
    'aria-required': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'textarea',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'text',
          },
        ],
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
      'widget',
      'input',
    ],
  ],
};

export default textboxRole;