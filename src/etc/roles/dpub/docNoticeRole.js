/**
 * @flow
 */
const docNoticeRole: ARIARoleDefinition = {
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
        name: 'notice [EPUB-SSV]',
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
      'note',
    ],
  ],
};

export default docNoticeRole;