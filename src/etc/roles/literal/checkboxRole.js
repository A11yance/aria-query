/**
 * @flow
 */
const checkboxRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-readonly': null,
    'aria-checked': 'false',
  },
  relatedConcepts: [
    {
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'checkbox',
          },
        ],
        name: 'input',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'option',
      },
      module: 'ARIA',
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

export default checkboxRole;