/**
 * @flow
 */
const cellRole: RoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'td',
      },
    },
  ],
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
  relatedConcepts: [],
  requireContextRole: [
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