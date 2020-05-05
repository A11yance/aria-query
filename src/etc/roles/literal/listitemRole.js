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
  prohibitedProps: [],
  props: {
    'aria-level': null,
    'aria-posinset': null,
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'li',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [
    'directory',
    'list',
  ],
  requiredContextRole: [
    'directory',
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