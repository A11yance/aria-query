/**
 * @flow
 */
const buttonRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-pressed': null,
  },
  relatedConcepts: [
    {
      concept: {
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

export default buttonRole;