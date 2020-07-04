/**
 * @flow
 */
const comboboxRole: ARIARoleDefinition = {
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
    'aria-expanded': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-haspopup': 'listbox',
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            constraints: [
              'set',
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
              'set',
            ],
            name: 'list',
          },
          {
            name: 'type',
            value: 'search',
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
              'set',
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
              'set',
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
              'set',
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
        attributes: [
          {
            constraints: [
              'set',
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
        attributes: [
          {
            constraints: [
              'undefined',
            ],
            name: 'multiple',
          },
          {
            constraints: [
              'undefined',
            ],
            name: 'size',
          },
        ],
        name: 'select',
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
            name: 'multiple',
          },
          {
            name: 'size',
            value: 1,
          },
        ],
        name: 'select',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'select',
      },
      module: 'XForms',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-controls': null,
    'aria-expanded': null,
  },
  superClass: [
    [
      'roletype',
      'widget',
      'input',
    ],
  ],
};

export default comboboxRole;