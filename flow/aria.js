/**
 * @flow
 */

type RoleDefinition = {
  abstract: boolean,
  baseConcepts: Array<RoleRelation>,
  childrenPresentational: boolean,
  props: {[key: string]: mixed},
  relatedConcepts: Array<RoleRelation>,
  requiredProps: {[key: string]: mixed},
  superClass: Array<Array<string>>,
};

type RoleRelation = {
  module?: string,
  concept?: RelationConcept,
};

type RelationConcept = {
  name: string,
  attributes?: Array<RelationConceptAttribute>,
};

type RelationConceptAttribute = {
  name: string,
  value: string,
};

type PropDefinition = {
  type: 'string'
  | 'integer'
  | 'number'
  | 'boolean'
  | 'token'
  | 'tokenlist'
  | 'tristate',
  value? : Array<string>,
  allowundefined?: boolean,
};
