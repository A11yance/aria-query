/**
 * @flow
 */
const groupRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-activedescendant': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'fieldset',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'details',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'optgroup',
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
    ],
  ],
};

export default groupRole;