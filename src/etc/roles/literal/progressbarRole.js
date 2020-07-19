/**
 * @flow
 */
const progressbarRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-valuemax': '100',
    'aria-valuemin': '0',
  },
  relatedConcepts: [
    {
      concept: {
        name: 'progress',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'status',
      },
      module: 'ARIA',
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
      'range',
    ],
    [
      'roletype',
      'widget',
    ],
  ],
};

export default progressbarRole;