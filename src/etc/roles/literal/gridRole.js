/**
 * @flow
 */
const gridRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-level': null,
    'aria-multiselectable': null,
    'aria-readonly': null,
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'role',
            value: 'grid',
          },
        ],
        name: 'table',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    [
      'row',
      'rowgroup',
    ],
    [
      'row',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'composite',
    ],
    [
      'roletype',
      'structure',
      'section',
      'table',
    ],
  ],
};

export default gridRole;