/**
 * @flow
 */
const treegridRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
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
      'grid',
    ],
    [
      'roletype',
      'structure',
      'section',
      'table',
      'grid',
    ],
    [
      'roletype',
      'widget',
      'composite',
      'select',
      'tree',
    ],
    [
      'roletype',
      'structure',
      'section',
      'group',
      'select',
      'tree',
    ],
  ],
};

export default treegridRole;