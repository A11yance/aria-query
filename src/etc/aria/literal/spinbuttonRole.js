/**
 * @flow
 */
const spinbuttonRole: RoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-valuenow': '0',
    'aria-required': null,
    'aria-readonly': null,
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-valuemax': null,
    'aria-valuemin': null,
    'aria-valuenow': '0',
  },
  superClass: [
    [
      'roletype',
      'widget',
      'composite',
    ],
    [
      'roletype',
      'widget',
      'input',
    ],
    [
      'roletype',
      'widget',
      'range',
    ],
  ],
};

export default spinbuttonRole;