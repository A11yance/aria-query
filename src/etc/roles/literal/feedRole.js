/**
 * @flow
 */
const feedRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    'article',
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