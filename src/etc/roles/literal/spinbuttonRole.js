/**
 * @flow
 */
const spinbuttonRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-valuetext': null,
    'aria-valuenow': '0',
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'number',
          },
        ],
        name: 'input',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
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
      'structure',
      'range',
    ],
  ],
};

export default spinbuttonRole;