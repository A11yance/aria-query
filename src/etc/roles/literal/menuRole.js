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
  prohibitedProps: [],
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
      'menuitem',
      'group',
    ],
    [
      'menuitemradio',
      'group',
    ],
    [
      'menuitemcheckbox',
      'group',
    ],
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
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