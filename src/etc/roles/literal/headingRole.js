/**
 * @flow
 */
const headingRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-level': '2',
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'h1',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h2',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h3',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h4',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h5',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'h6',
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
      'sectionhead',
    ],
  ],
};

export default headingRole;