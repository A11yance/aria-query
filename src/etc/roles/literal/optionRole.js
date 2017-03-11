/**
 * @flow
 */
const optionRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'option',
      },
    },
  ],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-checked': null,
    'aria-posinset': null,
    'aria-selected': 'false',
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'listitem',
      },
    },
    {
      module: 'XForms',
      concept: {
        name: 'item',
      },
    },
  ],
  requireContextRole: [
    'listbox',
  ],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-selected': 'false',
  },
  superClass: [
    [
      'roletype',
      'widget',
      'input',
    ],
  ],
};

export default optionRole;