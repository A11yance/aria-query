/**
 * @flow
 */
const regionRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
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
        name: 'section',
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
        name: 'section',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'Device Independence Glossart perceivable unit',
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

export default regionRole;