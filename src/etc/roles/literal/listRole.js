/**
 * @flow
 */
const listRole: RoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [
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
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
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