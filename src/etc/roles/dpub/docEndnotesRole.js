/**
 * @flow
 */
const docEndnotesRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [
    {
      module: 'EPUB',
      concept: {
        name: 'rearnotes [EPUB-SSV]',
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [
    [
      'doc-endnote',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'landmark',
    ],
  ],
};

export default docEndnotesRole;