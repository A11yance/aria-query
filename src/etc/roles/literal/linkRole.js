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