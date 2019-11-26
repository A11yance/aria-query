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
  props: {
    'aria-expanded': null,
    'aria-pressed': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'button',
      },
    },
    {
      module: 'XForms',
      concept: {
        name: 'trigger',
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

export default buttonRole;