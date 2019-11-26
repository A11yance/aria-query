/**
 * @flow
 */
const listitemRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-level': null,
    'aria-posinset': null,
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'li',
        constraints: [
          'direct descendant of ol, ul or menu',
        ],
      },
    },
    {
      module: 'XForms',
      concept: {
        name: 'item',
      },
    },
  ],
  requireContextRole: [
    'group',
    'list',
  ],
  requiredContextRole: [
    'group',
    'list',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
    ],
  ],
};

export default listitemRole;