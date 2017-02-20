/**
 * @flow
 */
const radioRole: RoleDefinition = {
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
    'aria-posinset': null,
    'aria-selected': null,
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'radio',
          },
        ],
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': 'false',
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