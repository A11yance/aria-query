/**
 * @flow
 */
const docGlossrefRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [
    {
      concept: {
        name: 'glossref [EPUB-SSV]',
      },
      module: 'EPUB',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'command',
      'link',
    ],
  ],
};

export default docGlossrefRole;