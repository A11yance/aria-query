/**
 * @flow
 */
const rowgroupRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [
    {
      concept: {
        name: 'tbody',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'tfoot',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'thead',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [
    'grid',
    'table',
    'treegrid',
  ],
  requiredContextRole: [
    'grid',
    'table',
    'treegrid',
  ],
  requiredOwnedElements: [
    [
      'row',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
    ],
  ],
};

export default rowgroupRole;