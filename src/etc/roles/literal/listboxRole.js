/**
 * @flow
 */
const listboxRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-invalid': null,
    'aria-multiselectable': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-orientation': 'vertical',
  },
  relatedConcepts: [
    {
      concept: {
        name: 'select',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'list',
      },
      module: 'ARIA',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    'option',
    [
      'option',
      'group',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'composite',
      'select',
    ],
    [
      'roletype',
      'structure',
      'section',
      'group',
      'select',
    ],
  ],
};

export default listboxRole;