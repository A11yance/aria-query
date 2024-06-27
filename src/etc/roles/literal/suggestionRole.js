/**
 * @flow
 */
const suggestionRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'prohibited',
  ],
  prohibitedProps: [
    'aria-braillelabel',
    'aria-label',
    'aria-labelledby',
  ],
  props: {
    'aria-brailleroledescription': null,
    'aria-description': null,
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    [
      'insertion',
    ],
    [
      'deletion',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
    ],
  ],
};

export default suggestionRole;