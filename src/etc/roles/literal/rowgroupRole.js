/**
 * @flow
 */
const rowgroupRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'tbody',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'tfoot',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'thead',
      },
    },
  ],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-activedescendant': null,
    'aria-expanded': null,
  },
  relatedConcepts: [],
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