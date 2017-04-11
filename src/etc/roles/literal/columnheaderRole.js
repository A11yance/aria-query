/**
 * @flow
 */
const columnheaderRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'th',
      },
    },
  ],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-sort': null,
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
      'structure',
      'section',
      'cell',
      'gridcell',
    ],
    [
      'roletype',
      'widget',
      'gridcell',
    ],
    [
      'roletype',
      'structure',
      'sectionhead',
    ],
  ],
};

export default columnheaderRole;