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
        constraints: [
          'the list attribute is not set',
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'email',
          },
        ],
        constraints: [
          'the list attribute is not set',
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'tel',
          },
        ],
        constraints: [
          'the list attribute is not set',
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'text',
          },
        ],
        constraints: [
          'the list attribute is not set',
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'url',
          },
        ],
        constraints: [
          'the list attribute is not set',
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'input',
      },
      module: 'XForms',
    },
    {
      concept: {
        name: 'textarea',
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
      'widget',
      'input',
    ],
  ],
};

export default textboxRole;