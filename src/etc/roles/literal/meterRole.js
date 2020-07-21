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
    'aria-valuemax': '100',
    'aria-valuemin': '0',
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
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