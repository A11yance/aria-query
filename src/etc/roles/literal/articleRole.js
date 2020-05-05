/**
 * @flow
 */
const articleRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  prohibitedProps: [],
  props: {
    'aria-posinset': null,
    'aria-setsize': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'article',
      },
      module: 'HTML',
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

export default articleRole;