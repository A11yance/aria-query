/**
 * @flow
 */
const docBacklinkRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'content',
  ],
  props: {},
  relatedConcepts: [
    {
      concept: {
        name: 'referrer [EPUB-SSV]',
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

export default docBacklinkRole;