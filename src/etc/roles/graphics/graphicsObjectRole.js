/**
 * @flow
 */
const graphicsObjectRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null,
  },
  relatedConcepts: [
    {
      module: 'GRAPHICS',
      concept: {
        name: 'graphics-document',
      },
    },
    {
      module: 'ARIA',
      concept: {
        name: 'group',
      },
    },
    {
      module: 'ARIA',
      concept: {
        name: 'img',
      },
    },
    {
      module: 'GRAPHICS',
      concept: {
        name: 'graphics-symbol',
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
      'section',
      'group',
    ],
  ],
};

export default graphicsObjectRole;