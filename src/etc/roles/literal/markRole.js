/**
 * @flow
 */
const markRole: ARIARoleDefinition = {
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
  },
  relatedConcepts: [
    {
      concept: {
        name: 'mark',
      },
      module: 'HTML',
    },
  ],
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

export default markRole;