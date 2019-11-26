/**
 * @flow
 */
const menuRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-orientation': 'vertical',
  },
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'list',
      },
    },
    {
      module: 'DTB',
      concept: {
        name: 'sidebar',
      },
    },
    {
      module: 'XForms',
      concept: {
        name: 'select',
      },
    },
    {
      module: 'JAPI',
      concept: {
        name: 'MENU',
      },
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    [
      'group',
      'menuitemradio',
    ],
    [
      'menuitem',
    ],
    [
      'menuitemcheckbox',
    ],
    [
      'menuitemradio',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'composite',
      'select',
    ],
    [
      'roletype',
      'structure',
      'section',
      'group',
      'select',
    ],
  ],
};

export default menuRole;