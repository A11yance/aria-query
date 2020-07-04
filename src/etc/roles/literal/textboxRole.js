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
    'encapsulation',
  ],
  prohibitedProps: [],
  props: {
    'aria-activedescendant': null,
    'aria-autocomplete': null,
    'aria-multiline': null,
    'aria-placeholder': null,
    'aria-readonly': null,
    'aria-required': null,
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            constraints: [
              'undefined',
            ],
            name: 'type',
          },
          {
            constraints: [
              'undefined',
            ],
            name: 'list',
          },
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            constraints: [
              'undefined',
            ],
            name: 'list',
          },
          {
            name: 'type',
            value: 'email',
          },
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            constraints: [
              'undefined',
            ],
            name: 'list',
          },
          {
            name: 'type',
            value: 'tel',
          },
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            constraints: [
              'undefined',
            ],
            name: 'list',
          },
          {
            name: 'type',
            value: 'text',
          },
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            constraints: [
              'undefined',
            ],
            name: 'list',
          },
          {
            name: 'type',
            value: 'url',
          },
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