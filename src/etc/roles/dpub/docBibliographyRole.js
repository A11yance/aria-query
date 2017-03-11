/**
 * @flow
 */
const docBibliographyRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
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
        name: 'bibliography [EPUB-SSV]',
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [
    [
      'doc-biblioentry',
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

export default docBibliographyRole;