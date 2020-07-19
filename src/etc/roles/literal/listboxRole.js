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
    'encapsulation',
  ],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-invalid': null,
    'aria-multiselectable': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-orientation': 'vertical',
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            constraints: [
              '>1',
            ],
            name: 'size',
          },
          {
            name: 'multiple',
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
              '>1',
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
            name: 'multiple',
          },
        ],
        name: 'select',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'datalist',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'list',
      },
      module: 'ARIA',
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
      'option',
      'group',
    ],
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