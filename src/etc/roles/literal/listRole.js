/**
 * @flow
 */
const listRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [
    {
      concept: {
        name: 'menu',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'ol',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'ul',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    [
      'group',
      'listitem',
    ],
    [
      'listitem',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
    ],
  ],
};

export default listRole;