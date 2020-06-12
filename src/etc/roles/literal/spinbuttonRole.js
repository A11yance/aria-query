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
  props: {
    0: 'aria-valuenow',
    'aria-readonly': null,
    'aria-required': null,
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
  requiredProps: {
    0: 'aria-valuenow',
    'aria-valuemax': null,
    'aria-valuemin': null,
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