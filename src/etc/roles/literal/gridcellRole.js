/**
 * @flow
 */
const gridcellRole: ARIARoleDefinition = {
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
    'aria-expanded': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-selected': null,
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'role',
            value: 'gridcell',
          },
        ],
        name: 'td',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [
    'row',
  ],
  requiredContextRole: [
    'row',
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
      'widget',
    ],
  ],
};

export default gridcellRole;