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
  prohibitedProps: [],
  props: {
    'aria-expanded': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'rearnotes [EPUB-SSV]',
      },
      module: 'EPUB',
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
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