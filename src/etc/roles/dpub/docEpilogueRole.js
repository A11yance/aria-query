/**
 * @flow
 */
const docEpilogueRole: RoleDefinition = {
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
        name: 'epilogue [EPUB-SSV]',
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [],
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

export default docEpilogueRole;