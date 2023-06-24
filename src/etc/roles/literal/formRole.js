/**
 * @flow
 */
const formRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            constraints: [
              'set',
            ],
            name: 'aria-label',
          },
        ],
        name: 'form',
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
            name: 'aria-labelledby',
          },
        ],
        name: 'form',
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
            name: 'name',
          },
        ],
        name: 'form',
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
      'structure',
      'section',
      'landmark',
    ],
  ],
};

export default formRole;