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
  prohibitedProps: [],
  props: {
    'aria-valuemax': null,
    'aria-valuemin': null,
    'aria-valuenow': null,
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
    ],
  ],
};

export default rangeRole;