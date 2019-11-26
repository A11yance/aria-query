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
      module: 'HTML',
      concept: {
        name: 'table',
        attributes: [
          {
            name: 'role',
            value: 'grid',
          },
        ],
      },
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    [
      'rowgroup',
      'row',
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