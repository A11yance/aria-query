/**
 * @flow
 */
const meterRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-valuetext': null,
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-valuemax': null,
    'aria-valuemin': null,
    'aria-valuenow': null,
  },
  superClass: [
    [
      'roletype',
      'structure',
      'range',
    ],
  ],
};

export default meterRole;