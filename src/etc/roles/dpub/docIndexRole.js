/**
 * @flow
 */
const docIndexRole: ARIARoleDefinition = {
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
        name: 'index [EPUB-SSV]',
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
      'structure',
      'section',
      'landmark',
      'navigation',
    ],
  ],
};

export default docIndexRole;