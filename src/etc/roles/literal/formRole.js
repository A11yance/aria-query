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
  props: {},
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'form',
        attributes: [
          {
            name: 'name',
            constraints: [
              'set',
            ],
          },
        ],
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'form',
        attributes: [
          {
            name: 'aria-label',
            constraints: [
              'set',
            ],
          },
        ],
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'form',
        attributes: [
          {
            name: 'aria-labelledby',
            constraints: [
              'set',
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
      'structure',
      'section',
      'landmark',
    ],
  ],
};

export default formRole;