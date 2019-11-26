/**
 * @flow
 */
const selectRole: ARIARoleDefinition = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-orientation': null,
  },
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'combobox',
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
      module: 'ARIA',
      concept: {
        name: 'combobox',
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
      module: 'ARIA',
      concept: {
        name: 'listbox',
        attributes: [
          {
            name: 'multiple',
          },
        ],
      },
    },
    {
      module: 'ARIA',
      concept: {
        name: 'listbox',
        attributes: [
          {
            name: 'multiple',
          },
          {
            name: 'size',
            constraints: [
              '>1',
            ],
          },
        ],
      },
    },
    {
      module: 'ARIA',
      concept: {
        name: 'listbox',
        attributes: [
          {
            name: 'size',
            constraints: [
              '>1',
            ],
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
      'composite',
    ],
    [
      'roletype',
      'structure',
      'section',
      'group',
    ],
  ],
};

export default selectRole;