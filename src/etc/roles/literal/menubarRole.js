/**
 * @flow
 */
const menubarRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-orientation': 'horizontal',
  },
  relatedConcepts: [
    {
      concept: {
        name: 'toolbar',
      },
      module: 'ARIA',
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
      'menu',
    ],
    [
      'roletype',
      'structure',
      'section',
      'group',
      'select',
      'menu',
    ],
  ],
};

export default menubarRole;