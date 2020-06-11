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
  props: {
    'aria-expanded': null,
    'aria-pressed': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'button',
      },
      module: 'HTML',
    },
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
        attributes: [
          {
            name: 'type',
            value: 'checkbox',
          },
          {
            constraints: [
              'set',
            ],
            name: 'aria-pressed',
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
            name: 'aria-expanded',
            value: 'true',
          },
        ],
        constraints: [
          'direct descendant of details element with the open attribute defined',
        ],
        name: 'summary',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'aria-expanded',
            value: 'false',
          },
        ],
        name: 'summary',
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