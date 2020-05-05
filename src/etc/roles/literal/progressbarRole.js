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
    'aria-valuetext': null,
  },
  relatedConcepts: [
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