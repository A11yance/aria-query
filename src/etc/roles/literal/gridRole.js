/**
 * @flow
 */
const gridRole: RoleDefinition = {
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
    'aria-level': null,
    'aria-multiselectable': null,
    'aria-readonly': null,
  },
  relatedConcepts: [],
  requireContextRole: [],
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