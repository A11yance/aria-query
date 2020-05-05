/**
 * @flow
 */
const rowgroupRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [
    'grid',
    'table',
    'treegrid',
  ],
  requiredContextRole: [
    'grid',
    'table',
    'treegrid',
  ],
  requiredOwnedElements: [
    'row',
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
    ],
  ],
};

export default rowgroupRole;