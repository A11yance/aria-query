/**
 * @flow
 */
const docBiblioentryRole: RoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-describedat': null,
  },
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