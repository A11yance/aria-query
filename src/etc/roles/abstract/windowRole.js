/**
 * @flow
 */
const windowRole: ARIARoleDefinition = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-expanded': null,
    'aria-modal': null,
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
    ],
  ],
};

export default windowRole;