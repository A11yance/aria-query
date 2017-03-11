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
  props: {},
  relatedConcepts: [],
  requireContextRole: [
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