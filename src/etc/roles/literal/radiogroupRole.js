/**
 * @flow
 */
const radiogroupRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-readonly': null,
    'aria-required': null,
  },
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'list',
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [
    [
      'radio',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'widget',
      'composite',
      'select',
    ],
    [
      'roletype',
      'structure',
      'section',
      'group',
      'select',
    ],
  ],
};

export default radiogroupRole;