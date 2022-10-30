/**
 * @flow
 */
const captionRole: ARIARoleDefinition = {
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
        name: 'caption',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [
    'figure',
    'grid',
    'table',
  ],
  requiredContextRole: [
    'figure',
    'grid',
    'table',
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

export default captionRole;