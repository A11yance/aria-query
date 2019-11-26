/**
 * @flow
 */
const toolbarRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-orientation': 'horizontal',
  },
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'menubar',
      },
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'group',
    ],
  ],
};

export default toolbarRole;