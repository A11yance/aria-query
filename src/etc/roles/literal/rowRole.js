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
  prohibitedProps: [],
  props: {
    'aria-colindex': null,
    'aria-expanded': null,
    'aria-level': null,
    'aria-posinset': null,
    'aria-rowindex': null,
    'aria-selected': null,
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'tr',
      },
      module: 'HTML',
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
    'cell',
    'columnheader',
    'gridcell',
    'rowheader',
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