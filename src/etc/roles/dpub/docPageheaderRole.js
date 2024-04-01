/**
 * @flow
 */
const docPageheaderRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'prohibited',
  ],
  prohibitedProps: [],
  props: {
    'aria-braillelabel': null,
    'aria-brailleroledescription': null,
    'aria-description': null,
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-haspopup': null,
    'aria-invalid': null,
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
      'section',
    ],
  ],
};

export default docPageheaderRole;