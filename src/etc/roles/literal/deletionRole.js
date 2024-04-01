/**
 * @flow
 */
const deletionRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'prohibited',
  ],
  prohibitedProps: [
    'aria-label',
    'aria-labelledby',
  ],
  props: {},
  relatedConcepts: [
    {
      concept: {
        name: 'del',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 's',
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

export default deletionRole;