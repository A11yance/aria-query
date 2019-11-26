/**
 * @flow
 */
const rowRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-colindex': null,
    'aria-level': null,
    'aria-rowindex': null,
    'aria-selected': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'tr',
      },
    },
  ],
  requireContextRole: [
    'grid',
    'rowgroup',
    'table',
    'treegrid',
  ],
  requiredContextRole: [
    'grid',
    'rowgroup',
    'table',
    'treegrid',
  ],
  requiredOwnedElements: [
    [
      'cell',
    ],
    [
      'columnheader',
    ],
    [
      'gridcell',
    ],
    [
      'rowheader',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'group',
    ],
    [
      'roletype',
      'widget',
    ],
  ],
};

export default rowRole;