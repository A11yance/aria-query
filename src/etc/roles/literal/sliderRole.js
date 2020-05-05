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
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-haspopup': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-valuetext': null,
    'aria-valuemin': '0',
    'aria-valuemax': '100',
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
    'aria-valuenow': null,
  },
  superClass: [
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

export default sliderRole;