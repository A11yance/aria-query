/**
 * @flow
 */
const switchRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'aria-checked',
          },
        ],
        name: 'button',
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
      'checkbox',
    ],
  ],
};

export default switchRole;