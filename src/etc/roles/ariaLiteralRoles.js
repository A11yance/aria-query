/**
 * @flow
 */
import alert from "./literal/alertRole";
import alertdialog from "./literal/alertdialogRole";
import application from "./literal/applicationRole";
import article from "./literal/articleRole";
import banner from "./literal/bannerRole";
import blockquote from "./literal/blockquoteRole";
import button from "./literal/buttonRole";
import caption from "./literal/captionRole";
import cell from "./literal/cellRole";
import checkbox from "./literal/checkboxRole";
import code from "./literal/codeRole";
import columnheader from "./literal/columnheaderRole";
import combobox from "./literal/comboboxRole";
import complementary from "./literal/complementaryRole";
import contentinfo from "./literal/contentinfoRole";
import definition from "./literal/definitionRole";
import deletion from "./literal/deletionRole";
import dialog from "./literal/dialogRole";
import directory from "./literal/directoryRole";
import document from "./literal/documentRole";
import emphasis from "./literal/emphasisRole";
import feed from "./literal/feedRole";
import figure from "./literal/figureRole";
import form from "./literal/formRole";
import generic from "./literal/genericRole";
import grid from "./literal/gridRole";
import gridcell from "./literal/gridcellRole";
import group from "./literal/groupRole";
import heading from "./literal/headingRole";
import img from "./literal/imgRole";
import insertion from "./literal/insertionRole";
import link from "./literal/linkRole";
import list from "./literal/listRole";
import listbox from "./literal/listboxRole";
import listitem from "./literal/listitemRole";
import log from "./literal/logRole";
import main from "./literal/mainRole";
import marquee from "./literal/marqueeRole";
import math from "./literal/mathRole";
import menu from "./literal/menuRole";
import menubar from "./literal/menubarRole";
import menuitem from "./literal/menuitemRole";
import menuitemcheckbox from "./literal/menuitemcheckboxRole";
import menuitemradio from "./literal/menuitemradioRole";
import meter from "./literal/meterRole";
import navigation from "./literal/navigationRole";
import none from "./literal/noneRole";
import note from "./literal/noteRole";
import option from "./literal/optionRole";
import paragraph from "./literal/paragraphRole";
import presentation from "./literal/presentationRole";
import progressbar from "./literal/progressbarRole";
import radio from "./literal/radioRole";
import radiogroup from "./literal/radiogroupRole";
import region from "./literal/regionRole";
import row from "./literal/rowRole";
import rowgroup from "./literal/rowgroupRole";
import rowheader from "./literal/rowheaderRole";
import scrollbar from "./literal/scrollbarRole";
import search from "./literal/searchRole";
import searchbox from "./literal/searchboxRole";
import separator from "./literal/separatorRole";
import slider from "./literal/sliderRole";
import spinbutton from "./literal/spinbuttonRole";
import status from "./literal/statusRole";
import strong from "./literal/strongRole";
import subscript from "./literal/subscriptRole";
import superscript from "./literal/superscriptRole";
import switchRole from "./literal/switchRole";
import tab from "./literal/tabRole";
import table from "./literal/tableRole";
import tablist from "./literal/tablistRole";
import tabpanel from "./literal/tabpanelRole";
import term from "./literal/termRole";
import textbox from "./literal/textboxRole";
import time from "./literal/timeRole";
import timer from "./literal/timerRole";
import toolbar from "./literal/toolbarRole";
import tooltip from "./literal/tooltipRole";
import tree from "./literal/treeRole";
import treegrid from "./literal/treegridRole";
import treeitem from "./literal/treeitemRole";

const ariaLiteralRoles: { [ARIARoleDefintionKey]: ARIARoleDefinition } = {
  alert,
  alertdialog,
  application,
  article,
  banner,
  blockquote,
  button,
  caption,
  cell,
  checkbox,
  code,
  columnheader,
  combobox,
  complementary,
  contentinfo,
  definition,
  deletion,
  dialog,
  directory,
  document,
  emphasis,
  feed,
  figure,
  form,
  generic,
  grid,
  gridcell,
  group,
  heading,
  img,
  insertion,
  link,
  list,
  listbox,
  listitem,
  log,
  main,
  marquee,
  math,
  menu,
  menubar,
  menuitem,
  menuitemcheckbox,
  menuitemradio,
  meter,
  navigation,
  none,
  note,
  option,
  paragraph,
  presentation,
  progressbar,
  radio,
  radiogroup,
  region,
  row,
  rowgroup,
  rowheader,
  scrollbar,
  search,
  searchbox,
  separator,
  slider,
  spinbutton,
  status,
  strong,
  subscript,
  superscript,
  switch: switchRole,
  tab,
  table,
  tablist,
  tabpanel,
  term,
  textbox,
  time,
  timer,
  toolbar,
  tooltip,
  tree,
  treegrid,
  treeitem,
};

export default ariaLiteralRoles;
