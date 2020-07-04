/**
 * @flow
 */
const scrollbarRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-orientation': 'vertical',
    'aria-valuemax': '100',
    'aria-valuemin': '0',
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-controls': null,
    'aria-valuenow': null,
  },
  superClass: [
    [
      'roletype',
      'structure',
      'range',
    ],
    [
      'roletype',
      'widget',
    ],
  ],
};

export default scrollbarRole;