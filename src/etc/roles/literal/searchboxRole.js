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
      concept: {
        attributes: [
          {
            name: 'type',
            value: 'search',
          },
          {
            constraints: [
              'undefined',
            ],
            name: 'list',
          },
        ],
        name: 'input',
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
      'widget',
      'input',
      'textbox',
    ],
  ],
};

export default searchboxRole;