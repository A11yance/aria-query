/**
 * @flow
 */
const docPagebreakRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
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
        name: 'pagebreak [EPUB-SSV]',
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
      'separator',
    ],
  ],
};

export default docPagebreakRole;