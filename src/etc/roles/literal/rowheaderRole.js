/**
 * @flow
 */
const rowheaderRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {
    'aria-sort': null,
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'scope',
            value: 'row',
          },
        ],
        name: 'th',
      },
      module: 'HTML',
    },
    {
      concept: {
        attributes: [
          {
            name: 'scope',
            value: 'rowgroup',
          },
        ],
        name: 'th',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [
    'row',
    'rowgroup',
  ],
  requiredContextRole: [
    'row',
    'rowgroup',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'cell',
    ],
    [
      'roletype',
      'structure',
      'section',
      'cell',
      'gridcell',
    ],
    [
      'roletype',
      'widget',
      'gridcell',
    ],
    [
      'roletype',
      'structure',
      'sectionhead',
    ],
  ],
};

export default rowheaderRole;