/**
 * @flow
 */
const sectionRole: ARIARoleDefinition = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [
    {
      concept: {
        name: 'frontmatter',
      },
      module: 'DTB',
    },
    {
      concept: {
        name: 'level',
      },
      module: 'DTB',
    },
    {
      concept: {
        name: 'level',
      },
      module: 'SMIL',
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