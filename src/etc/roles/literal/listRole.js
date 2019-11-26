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
      module: 'HTML',
      concept: {
        name: 'ol',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'ul',
      },
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