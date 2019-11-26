/**
 * @flow
 */
const sectionRole: ARIARoleDefinition = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [],
  props: {
    'aria-expanded': null,
  },
  relatedConcepts: [
    {
      module: 'DTB',
      concept: {
        name: 'frontmatter',
      },
    },
    {
      module: 'DTB',
      concept: {
        name: 'level',
      },
    },
    {
      module: 'SMIL',
      concept: {
        name: 'level',
      },
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
    ],
  ],
};

export default sectionRole;