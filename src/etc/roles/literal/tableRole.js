/**
 * @flow
 */
const tableRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'table',
      },
    },
  ],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-colcount': null,
    'aria-rowcount': null,
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    [
      'row',
    ],
    [
      'rowgroup',
      'row',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
    ],
  ],
};

export default tableRole;