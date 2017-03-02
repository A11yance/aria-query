/**
 * @flow
 */
const searchboxRole: RoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'search',
          },
        ],
      },
    },
  ],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
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