/**
 * @flow
 */
const docBiblioentryRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
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
        name: 'EPUB biblioentry [EPUB-SSV]',
      },
      module: 'EPUB',
    },
  ],
  requireContextRole: [
    'doc-bibliography',
  ],
  requiredContextRole: [
    'doc-bibliography',
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

export default docBiblioentryRole;