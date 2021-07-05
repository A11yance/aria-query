/**
 * @flow
 */
import alertRole from './literal/alertRole';
import alertdialogRole from './literal/alertdialogRole';
import applicationRole from './literal/applicationRole';
import articleRole from './literal/articleRole';
import bannerRole from './literal/bannerRole';
import blockquoteRole from './literal/blockquoteRole';
import buttonRole from './literal/buttonRole';
import captionRole from './literal/captionRole';
import cellRole from './literal/cellRole';
import checkboxRole from './literal/checkboxRole';
import codeRole from './literal/codeRole';
import columnheaderRole from './literal/columnheaderRole';
import comboboxRole from './literal/comboboxRole';
import complementaryRole from './literal/complementaryRole';
import contentinfoRole from './literal/contentinfoRole';
import definitionRole from './literal/definitionRole';
import deletionRole from './literal/deletionRole';
import dialogRole from './literal/dialogRole';
import directoryRole from './literal/directoryRole';
import documentRole from './literal/documentRole';
import emphasisRole from './literal/emphasisRole';
import feedRole from './literal/feedRole';
import figureRole from './literal/figureRole';
import formRole from './literal/formRole';
import genericRole from './literal/genericRole';
import gridRole from './literal/gridRole';
import gridcellRole from './literal/gridcellRole';
import groupRole from './literal/groupRole';
import headingRole from './literal/headingRole';
import imgRole from './literal/imgRole';
import insertionRole from './literal/insertionRole';
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
import meterRole from './literal/meterRole';
import navigationRole from './literal/navigationRole';
import noneRole from './literal/noneRole';
import noteRole from './literal/noteRole';
import optionRole from './literal/optionRole';
import paragraphRole from './literal/paragraphRole';
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
import strongRole from './literal/strongRole';
import subscriptRole from './literal/subscriptRole';
import superscriptRole from './literal/superscriptRole';
import switchRole from './literal/switchRole';
import tabRole from './literal/tabRole';
import tableRole from './literal/tableRole';
import tablistRole from './literal/tablistRole';
import tabpanelRole from './literal/tabpanelRole';
import termRole from './literal/termRole';
import textboxRole from './literal/textboxRole';
import timeRole from './literal/timeRole';
import timerRole from './literal/timerRole';
import toolbarRole from './literal/toolbarRole';
import tooltipRole from './literal/tooltipRole';
import treeRole from './literal/treeRole';
import treegridRole from './literal/treegridRole';
import treeitemRole from './literal/treeitemRole';

const ariaLiteralRoles: { [ARIARoleDefintionKey]: ARIARoleDefinition } = {
  'alert': alertRole,
  'alertdialog': alertdialogRole,
  'application': applicationRole,
  'article': articleRole,
  'banner': bannerRole,
  'blockquote': blockquoteRole,
  'button': buttonRole,
  'caption': captionRole,
  'cell': cellRole,
  'checkbox': checkboxRole,
  'code': codeRole,
  'columnheader': columnheaderRole,
  'combobox': comboboxRole,
  'complementary': complementaryRole,
  'contentinfo': contentinfoRole,
  'definition': definitionRole,
  'deletion': deletionRole,
  'dialog': dialogRole,
  'directory': directoryRole,
  'document': documentRole,
  'emphasis': emphasisRole,
  'feed': feedRole,
  'figure': figureRole,
  'form': formRole,
  'generic': genericRole,
  'grid': gridRole,
  'gridcell': gridcellRole,
  'group': groupRole,
  'heading': headingRole,
  'img': imgRole,
  'insertion': insertionRole,
  'link': linkRole,
  'list': listRole,
  'listbox': listboxRole,
  'listitem': listitemRole,
  'log': logRole,
  'main': mainRole,
  'marquee': marqueeRole,
  'math': mathRole,
  'menu': menuRole,
  'menubar': menubarRole,
  'menuitem': menuitemRole,
  'menuitemcheckbox': menuitemcheckboxRole,
  'menuitemradio': menuitemradioRole,
  'meter': meterRole,
  'navigation': navigationRole,
  'none': noneRole,
  'note': noteRole,
  'option': optionRole,
  'paragraph': paragraphRole,
  'presentation': presentationRole,
  'progressbar': progressbarRole,
  'radio': radioRole,
  'radiogroup': radiogroupRole,
  'region': regionRole,
  'row': rowRole,
  'rowgroup': rowgroupRole,
  'rowheader': rowheaderRole,
  'scrollbar': scrollbarRole,
  'search': searchRole,
  'searchbox': searchboxRole,
  'separator': separatorRole,
  'slider': sliderRole,
  'spinbutton': spinbuttonRole,
  'status': statusRole,
  'strong': strongRole,
  'subscript': subscriptRole,
  'superscript': superscriptRole,
  'switch': switchRole,
  'tab': tabRole,
  'table': tableRole,
  'tablist': tablistRole,
  'tabpanel': tabpanelRole,
  'term': termRole,
  'textbox': textboxRole,
  'time': timeRole,
  'timer': timerRole,
  'toolbar': toolbarRole,
  'tooltip': tooltipRole,
  'tree': treeRole,
  'treegrid': treegridRole,
  'treeitem': treeitemRole
};

export default ariaLiteralRoles;