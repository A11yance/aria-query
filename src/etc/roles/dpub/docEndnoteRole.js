/**
 * @flow
 */
const docEndnoteRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-expanded': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'rearnote [EPUB-SSV]',
      },
      module: 'EPUB',
    },
  ],
  requireContextRole: [
    'doc-endnotes',
  ],
  requiredContextRole: [
    'doc-endnotes',
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
  ],
};

export default docEndnoteRole;