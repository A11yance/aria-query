/**
 * @flow
 */
const alertdialogRole: ARIARoleDefinition = {
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
      module: 'XForms',
      concept: {
        name: 'alert',
      },
    },
  ],
  requireContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'alert',
    ],
    [
      'roletype',
      'window',
      'dialog',
    ],
  ],
};

export default alertdialogRole;