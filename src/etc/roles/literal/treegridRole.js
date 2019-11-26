/**
 * @flow
 */
const treegridRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [],
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