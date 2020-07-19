/**
 * @flow
 */
const associationlistitemvalueRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
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

export default associationlistitemvalueRole;