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
    'aria-checked': 'false',
    'aria-readonly': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'option',
      },
      module: 'ARIA',
    },
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