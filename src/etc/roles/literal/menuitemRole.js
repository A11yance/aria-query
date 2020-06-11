/**
 * @flow
 */
const menuitemRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-posinset': null,
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'option',
      },
      module: 'ARIA',
    },
    {
      concept: {
        name: 'listitem',
      },
      module: 'ARIA',
    },
    {
      concept: {
        name: 'menuitem',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'MENU_ITEM',
      },
      module: 'JAPI',
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
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'command',
    ],
  ],
};

export default menuitemRole;