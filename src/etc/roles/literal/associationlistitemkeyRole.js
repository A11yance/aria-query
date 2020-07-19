/**
 * @flow
 */
const associationlistitemkeyRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-level': null,
    'aria-posinset': null,
    'aria-setsize': null,
  },
  relatedConcepts: [],
  requireContextRole: [
    'associationlist',
  ],
  requiredContextRole: [
    'associationlist',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
    ],
  ],
};

export default associationlistitemkeyRole;