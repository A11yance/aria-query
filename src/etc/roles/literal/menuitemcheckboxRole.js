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
  prohibitedProps: [],
  props: {
    'aria-checked': null,
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
    'group',
    'menu',
    'menubar',
  ],
  requiredContextRole: [
    'group',
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
  ],
};

export default menuitemcheckboxRole;