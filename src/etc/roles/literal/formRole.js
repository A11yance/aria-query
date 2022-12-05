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