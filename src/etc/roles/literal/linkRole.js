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
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-expanded': null,
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'href',
          },
        ],
        name: 'a',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'href',
          },
        ],
        name: 'area',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'href',
          },
        ],
        name: 'link',
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
      'widget',
      'command',
    ],
  ],
};

export default linkRole;