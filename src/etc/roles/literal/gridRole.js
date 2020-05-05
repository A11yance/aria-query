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
  prohibitedProps: [],
  props: {
    'aria-multiselectable': null,
    'aria-readonly': null,
  },
  relatedConcepts: [
    {
      concept: {
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
    'row',
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