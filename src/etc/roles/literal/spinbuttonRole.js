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
    'encapsulation',
  ],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-valuemax': 'that there is no maximum value',
    'aria-valuemin': 'that there is no minimum value',
    'aria-valuenow': 'that there is no current value',
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