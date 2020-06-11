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
    'aria-selected': 'false',
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'option',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'listitem',
      },
      module: 'ARIA',
    },
    {
      concept: {
        name: 'item',
      },
      module: 'XForms',
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