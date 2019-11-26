/**
 * @flow
 */
const listboxRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-multiselectable': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-orientation': 'vertical',
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'datalist',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'select',
        attributes: [
          {
            name: 'multiple',
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
      module: 'HTML',
      concept: {
        name: 'select',
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
    {
      module: 'ARIA',
      concept: {
        name: 'list',
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
      'option',
    ],
  ],
  requiredProps: {},
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

export default listboxRole;