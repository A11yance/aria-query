/**
 * @flow
 */

type RoleDefinition = {
  abstract: boolean,
  baseConcepts: Array<RoleRelation>,
  childrenPresentational: boolean,
  interactive: boolean,
  props: Array<string>,
  relatedConcepts: Array<RoleRelation>,
  requiredProps: Array<string>,
};

type RoleRelation = {
  module?: string,
  concept: RelationConcept,
};

type RelationConcept = {
  name: string,
  attributes?: Array<RelationConceptAttribute>,
};

type RelationConceptAttribute = {
  name: string,
  value: string,
};
