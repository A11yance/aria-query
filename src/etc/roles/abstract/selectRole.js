/**
 * @flow
 */
const selectRole: ARIARoleDefinition = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-orientation': null,
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'composite',
    ],
    [
      'roletype',
      'structure',
      'section',
      'group',
    ],
  ],
};

export default selectRole;