/**
 * @flow
 */
const linkRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-expanded': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'a',
        attributes: [
          {
            name: 'href',
          },
        ],
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'area',
        attributes: [
          {
            name: 'href',
          },
        ],
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'link',
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
      'widget',
      'command',
    ],
  ],
};

export default linkRole;