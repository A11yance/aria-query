/**
 * @flow
 */
const cellRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-colindex': null,
    'aria-colspan': null,
    'aria-rowindex': null,
    'aria-rowspan': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'td',
      },
    },
  ],
  requireContextRole: [
    'row',
  ],
  requiredContextRole: [
    'row',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
    ],
  ],
};

export default cellRole;