/**
 * @flow
 */
import command from "./abstract/commandRole";
import composite from "./abstract/compositeRole";
import input from "./abstract/inputRole";
import landmark from "./abstract/landmarkRole";
import range from "./abstract/rangeRole";
import roletype from "./abstract/roletypeRole";
import section from "./abstract/sectionRole";
import sectionhead from "./abstract/sectionheadRole";
import select from "./abstract/selectRole";
import structure from "./abstract/structureRole";
import widget from "./abstract/widgetRole";
import window from "./abstract/windowRole";

const ariaAbstracts: { [ARIARoleDefintionKey]: ARIARoleDefinition } = {
  command,
  composite,
  input,
  landmark,
  range,
  roletype,
  section,
  sectionhead,
  select,
  structure,
  widget,
  window,
};

export default ariaAbstracts;
