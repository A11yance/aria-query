/**
 * @flow
 */
const searchboxRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'search',
          },
          {
            name: 'list',
            constraints: [
              'undefined',
            ],
          },
        ],
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
      'widget',
      'input',
      'textbox',
    ],
  ],
};

export default searchboxRole;