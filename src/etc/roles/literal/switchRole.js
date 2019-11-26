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
  props: {
    'aria-checked': 'false',
  },
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'button',
      },
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': 'false',
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