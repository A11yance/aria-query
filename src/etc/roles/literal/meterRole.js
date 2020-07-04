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
    'encapsulation',
  ],
  prohibitedProps: [],
  props: {
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