/**
 * @flow
 */
const imgRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
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
            name: 'alt',
          },
        ],
        name: 'img',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            constraints: [
              'undefined',
            ],
            name: 'alt',
          },
        ],
        name: 'img',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'imggroup',
      },
      module: 'DTB',
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
    ],
  ],
};

export default imgRole;