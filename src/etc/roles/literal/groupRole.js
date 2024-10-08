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
  prohibitedProps: [],
  props: {
    'aria-activedescendant': null,
    'aria-disabled': null,
  },
  relatedConcepts: [
    {
      concept: {
        name: 'address',
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
        name: 'fieldset',
      },
      module: 'HTML',
    },
    {
      concept: {
        name: 'hgroup',
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