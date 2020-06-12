/**
 * @flow
 */
const treeitemRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {
    'aria-expanded': null,
    'aria-haspopup': null,
  },
  relatedConcepts: [],
  requireContextRole: [
    'group',
    'tree',
  ],
  requiredContextRole: [
    'group',
    'tree',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'listitem',
    ],
    [
      'roletype',
      'widget',
      'input',
      'option',
    ],
  ],
};

export default treeitemRole;