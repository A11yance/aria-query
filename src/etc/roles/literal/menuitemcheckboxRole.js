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
      module: 'ARIA',
      concept: {
        name: 'menuitem',
      },
    },
  ],
  requireContextRole: [
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