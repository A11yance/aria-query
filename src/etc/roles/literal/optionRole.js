/**
 * @flow
 */
const optionRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-checked': null,
    'aria-posinset': null,
    'aria-setsize': null,
    'aria-selected': 'false',
  },
  relatedConcepts: [
    {
      concept: {
        name: 'item',
      },
      module: 'XForms',
    },
    {
      concept: {
        name: 'listitem',
      },
      module: 'ARIA',
    },
    {
      concept: {
        name: 'option',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [
    'listbox',
  ],
  requiredContextRole: [
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