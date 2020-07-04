/**
 * @flow
 */
const genericRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'prohibited',
  ],
  prohibitedProps: [
    'aria-brailleroledescription',
    'aria-label',
    'aria-labelledby',
    'aria-roledescription',
  ],
  props: {},
  relatedConcepts: [
    {
      concept: {
        name: 'span',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'div',
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
    ],
  ],
};

export default genericRole;