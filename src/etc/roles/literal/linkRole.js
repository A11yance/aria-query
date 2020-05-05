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
        name: 'a',
        attributes: [
          {
            name: 'href',
          },
        ],
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'link',
        attributes: [
          {
            name: 'href',
          },
        ],
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