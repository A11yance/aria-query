/**
 * @flow
 */
const feedRole: RoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredOwnedElements: [
    [
      'article',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'list',
    ],
  ],
};

export default feedRole;