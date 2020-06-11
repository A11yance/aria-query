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
      concept: {
        name: 'list',
      },
      module: 'ARIA',
    },
    {
      concept: {
        name: 'sidebar',
      },
      module: 'DTB',
    },
    {
      concept: {
        name: 'select',
      },
      module: 'XForms',
    },
    {
      concept: {
        name: 'MENU',
      },
      module: 'JAPI',
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