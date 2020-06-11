/**
 * @flow
 */
const menuitemcheckboxRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-checked': 'false',
  },
  relatedConcepts: [
    {
      concept: {
        name: 'menuitem',
      },
      module: 'ARIA',
    },
  ],
  requireContextRole: [
    'menu',
    'menubar',
  ],
  requiredContextRole: [
    'menu',
    'menubar',
  ],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': null,
  },
  superClass: [
    [
      'roletype',
      'widget',
      'command',
      'menuitem',
    ],
    [
      'roletype',
      'widget',
      'input',
      'checkbox',
    ],
  ],
};

export default menuitemcheckboxRole;