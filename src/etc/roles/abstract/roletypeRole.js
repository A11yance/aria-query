/**
 * @flow
 */
const roletypeRole: ARIARoleDefinition = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [],
  prohibitedProps: [],
  props: {
    'aria-atomic': null,
    'aria-braillelabel': null,
    'aria-brailleroledescription': null,
    'aria-busy': null,
    'aria-controls': null,
    'aria-current': null,
    'aria-describedby': null,
    'aria-description': null,
    'aria-details': null,
    'aria-dropeffect': null,
    'aria-flowto': null,
    'aria-grabbed': null,
    'aria-hidden': null,
    'aria-keyshortcuts': null,
    'aria-label': null,
    'aria-labelledby': null,
    'aria-live': null,
    'aria-owns': null,
    'aria-relevant': null,
    'aria-roledescription': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'rel',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'role',
      },
      module: 'XHTML',
    },
    {
      concept: {
        name: 'type',
      },
      module: 'Dublin Core',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [],
};

export default roletypeRole;