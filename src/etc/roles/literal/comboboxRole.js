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
      module: 'HTML',
      concept: {
        name: 'select',
        attributes: [
          {
            name: 'multiple',
            constraints: [
              'unset',
            ],
          },
          {
            name: 'size',
            constraints: [
              'unset',
            ],
          },
        ],
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'select',
        attributes: [
          {
            name: 'multiple',
            constraints: [
              'unset',
            ],
          },
          {
            name: 'size',
            value: 1,
          },
        ],
      },
    },
    {
      module: 'XForms',
      concept: {
        name: 'select',
      },
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