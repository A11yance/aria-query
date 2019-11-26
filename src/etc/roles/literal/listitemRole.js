/**
 * @flow
 */
const listitemRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'li',
      },
    },
  ],
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