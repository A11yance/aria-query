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
  props: {
    'aria-orientation': 'vertical',
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