/**
 * @flow
 */
const complementaryRole: ARIARoleDefinition = {
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
        constraints: [
          'scoped to the body element',
          'scoped to the main element',
        ],
        name: 'aside',
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
            name: 'aria-label',
          },
        ],
        constraints: [
          'scoped to a sectioning content element',
          'scoped to a sectioning root element other than body',
        ],
        name: 'aside',
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
        constraints: [
          'scoped to a sectioning content element',
          'scoped to a sectioning root element other than body',
        ],
        name: 'aside',
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

export default complementaryRole;