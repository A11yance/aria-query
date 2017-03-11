/**
 * @flow
 */
const rangeRole: ARIARoleDefinition = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-valuemax': null,
    'aria-valuemin': null,
    'aria-valuenow': null,
    'aria-valuetext': null,
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
    ],
  ],
};

export default rangeRole;