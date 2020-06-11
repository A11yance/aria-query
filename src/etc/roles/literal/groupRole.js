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
      concept: {
        name: 'fieldset',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'details',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'optgroup',
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
      'section',
    ],
  ],
};

export default groupRole;