/**
 * @flow
 */
import alertRole from './literal/alertRole';
import alertdialogRole from './literal/alertdialogRole';
import applicationRole from './literal/applicationRole';
import articleRole from './literal/articleRole';
import bannerRole from './literal/bannerRole';
import buttonRole from './literal/buttonRole';
import cellRole from './literal/cellRole';
import checkboxRole from './literal/checkboxRole';
import columnheaderRole from './literal/columnheaderRole';
import comboboxRole from './literal/comboboxRole';
import complementaryRole from './literal/complementaryRole';
import contentinfoRole from './literal/contentinfoRole';
import definitionRole from './literal/definitionRole';
import dialogRole from './literal/dialogRole';
import directoryRole from './literal/directoryRole';
import documentRole from './literal/documentRole';
import feedRole from './literal/feedRole';
import figureRole from './literal/figureRole';
import formRole from './literal/formRole';
import gridRole from './literal/gridRole';
import gridcellRole from './literal/gridcellRole';
import groupRole from './literal/groupRole';
import headingRole from './literal/headingRole';
import imgRole from './literal/imgRole';
import linkRole from './literal/linkRole';
import listRole from './literal/listRole';
import listboxRole from './literal/listboxRole';
import listitemRole from './literal/listitemRole';
import logRole from './literal/logRole';
import mainRole from './literal/mainRole';
import marqueeRole from './literal/marqueeRole';
import mathRole from './literal/mathRole';
import menuRole from './literal/menuRole';
import menubarRole from './literal/menubarRole';
import menuitemRole from './literal/menuitemRole';
import menuitemcheckboxRole from './literal/menuitemcheckboxRole';
import menuitemradioRole from './literal/menuitemradioRole';
import navigationRole from './literal/navigationRole';
import noneRole from './literal/noneRole';
import noteRole from './literal/noteRole';
import optionRole from './literal/optionRole';
import presentationRole from './literal/presentationRole';
import progressbarRole from './literal/progressbarRole';
import radioRole from './literal/radioRole';
import radiogroupRole from './literal/radiogroupRole';
import regionRole from './literal/regionRole';
import rowRole from './literal/rowRole';
import rowgroupRole from './literal/rowgroupRole';
import rowheaderRole from './literal/rowheaderRole';
import scrollbarRole from './literal/scrollbarRole';
import searchRole from './literal/searchRole';
import searchboxRole from './literal/searchboxRole';
import separatorRole from './literal/separatorRole';
import sliderRole from './literal/sliderRole';
import spinbuttonRole from './literal/spinbuttonRole';
import statusRole from './literal/statusRole';
import switchRole from './literal/switchRole';
import tabRole from './literal/tabRole';
import tableRole from './literal/tableRole';
import tablistRole from './literal/tablistRole';
import tabpanelRole from './literal/tabpanelRole';
import termRole from './literal/termRole';
import textboxRole from './literal/textboxRole';
import timerRole from './literal/timerRole';
import toolbarRole from './literal/toolbarRole';
import tooltipRole from './literal/tooltipRole';
import treeRole from './literal/treeRole';
import treegridRole from './literal/treegridRole';
import treeitemRole from './literal/treeitemRole';

const ariaLiteralRoles: MapOfRoleDefinitions = new Map([
  ['alert', alertRole],
  ['alertdialog', alertdialogRole],
  ['application', applicationRole],
  ['article', articleRole],
  ['banner', bannerRole],
  ['button', buttonRole],
  ['cell', cellRole],
  ['checkbox', checkboxRole],
  ['columnheader', columnheaderRole],
  ['combobox', comboboxRole],
  ['complementary', complementaryRole],
  ['contentinfo', contentinfoRole],
  ['definition', definitionRole],
  ['dialog', dialogRole],
  ['directory', directoryRole],
  ['document', documentRole],
  ['feed', feedRole],
  ['figure', figureRole],
  ['form', formRole],
  ['grid', gridRole],
  ['gridcell', gridcellRole],
  ['group', groupRole],
  ['heading', headingRole],
  ['img', imgRole],
  ['link', linkRole],
  ['list', listRole],
  ['listbox', listboxRole],
  ['listitem', listitemRole],
  ['log', logRole],
  ['main', mainRole],
  ['marquee', marqueeRole],
  ['math', mathRole],
  ['menu', menuRole],
  ['menubar', menubarRole],
  ['menuitem', menuitemRole],
  ['menuitemcheckbox', menuitemcheckboxRole],
  ['menuitemradio', menuitemradioRole],
  ['navigation', navigationRole],
  ['none', noneRole],
  ['note', noteRole],
  ['option', optionRole],
  ['presentation', presentationRole],
  ['progressbar', progressbarRole],
  ['radio', radioRole],
  ['radiogroup', radiogroupRole],
  ['region', regionRole],
  ['row', rowRole],
  ['rowgroup', rowgroupRole],
  ['rowheader', rowheaderRole],
  ['scrollbar', scrollbarRole],
  ['search', searchRole],
  ['searchbox', searchboxRole],
  ['separator', separatorRole],
  ['slider', sliderRole],
  ['spinbutton', spinbuttonRole],
  ['status', statusRole],
  ['switch', switchRole],
  ['tab', tabRole],
  ['table', tableRole],
  ['tablist', tablistRole],
  ['tabpanel', tabpanelRole],
  ['term', termRole],
  ['textbox', textboxRole],
  ['timer', timerRole],
  ['toolbar', toolbarRole],
  ['tooltip', tooltipRole],
  ['tree', treeRole],
  ['treegrid', treegridRole],
  ['treeitem', treeitemRole]
]);

export default ariaLiteralRoles;