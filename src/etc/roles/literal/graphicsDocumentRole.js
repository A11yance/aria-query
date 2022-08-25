/**
 * @flow
 */
const graphicsDocumentRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null,
  },
  relatedConcepts: [
    {
      module: 'GRAPHICS',
      concept: {
        name: 'graphics-object',
      },
    },
    {
      module: 'ARIA',
      concept: {
        name: 'img',
      },
    },
    {
      module: 'ARIA',
      concept: {
        name: 'article',
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
      'document',
    ],
  ],
};

export default graphicsDocumentRole;