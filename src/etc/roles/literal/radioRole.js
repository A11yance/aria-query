/**
 * @flow
 */
const radioRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
    'encapsulation',
  ],
  prohibitedProps: [],
  props: {
    'aria-checked': null,
    'aria-posinset': null,
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'radio',
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
    'aria-checked': null,
  },
  superClass: [
    [
      'roletype',
      'widget',
      'input',
    ],
  ],
};

export default radioRole;