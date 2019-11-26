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
  props: {},
  relatedConcepts: [
    {
      module: 'EPUB',
      concept: {
        name: 'EPUB biblioentry [EPUB-SSV]',
      },
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