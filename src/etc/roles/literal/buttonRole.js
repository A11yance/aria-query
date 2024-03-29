/**
 * @flow
 */
const buttonRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-pressed': null,
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'button',
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
            value: 'image',
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
            value: 'reset',
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
            value: 'submit',
          },
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'button',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'trigger',
      },
      module: 'XForms',
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
      'command',
    ],
  ],
};

export default buttonRole;