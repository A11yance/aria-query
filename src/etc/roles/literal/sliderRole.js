/**
 * @flow
 */
const sliderRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
  ],
  props: {
    0: 'aria-valuemin',
    50: 'aria-valuenow',
    100: 'aria-valuemax',
    'aria-readonly': null,
    'aria-orientation': 'horizontal',
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'range',
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
    0: 'aria-valuemin',
    50: 'aria-valuenow',
    100: 'aria-valuemax',
  },
  superClass: [
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

export default sliderRole;