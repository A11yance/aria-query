/**
 * @flow
 */
const gridcellRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
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
    'aria-readonly': null,
    'aria-required': null,
    'aria-selected': null,
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
      'cell',
    ],
    [
      'roletype',
      'widget',
    ],
  ],
};

export default gridcellRole;