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
  props: {},
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'img',
        attributes: [
          {
            name: 'alt',
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
        name: 'img',
        attributes: [
          {
            name: 'alt',
            constraints: [
              'undefined',
            ],
          },
        ],
      },
    },
    {
      module: 'DTB',
      concept: {
        name: 'imggroup',
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
    ],
  ],
};

export default imgRole;