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
  props: {
    'aria-expanded': 'false',
    'aria-autocomplete': null,
    'aria-required': null,
    'aria-haspopup': 'listbox',
    'aria-readonly': null,
  },
  relatedConcepts: [
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
        attributes: [
          {
            name: 'type',
            value: 'text',
          },
          {
            constraints: [
              'set',
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
            name: 'type',
            value: 'search',
          },
          {
            constraints: [
              'set',
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
            name: 'type',
            value: 'url',
          },
          {
            constraints: [
              'set',
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
            name: 'type',
            value: 'tel',
          },
          {
            constraints: [
              'set',
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
            name: 'type',
            value: 'url',
          },
          {
            constraints: [
              'set',
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
            name: 'type',
            value: 'email',
          },
          {
            constraints: [
              'set',
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
        name: 'select',
      },
      module: 'XForms',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    [
      'textbox',
    ],
    [
      'listbox',
    ],
    [
      'tree',
    ],
    [
      'grid',
    ],
    [
      'dialog',
    ],
  ],
  requiredProps: {
    'aria-controls': null,
    'aria-expanded': 'false',
  },
  superClass: [
    [
      'roletype',
      'widget',
      'composite',
      'select',
    ],
    [
      'roletype',
      'structure',
      'section',
      'group',
      'select',
    ],
  ],
};

export default comboboxRole;