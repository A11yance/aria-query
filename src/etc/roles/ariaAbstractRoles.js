/**
 * @flow
 */
import commandRole from './abstract/commandRole';
import compositeRole from './abstract/compositeRole';
import inputRole from './abstract/inputRole';
import landmarkRole from './abstract/landmarkRole';
import rangeRole from './abstract/rangeRole';
import roletypeRole from './abstract/roletypeRole';
import sectionRole from './abstract/sectionRole';
import sectionheadRole from './abstract/sectionheadRole';
import selectRole from './abstract/selectRole';
import structureRole from './abstract/structureRole';
import widgetRole from './abstract/widgetRole';
import windowRole from './abstract/windowRole';

const ariaAbstractRoles: { [ARIARoleDefintionKey]: ARIARoleDefinition } = {
  'command': commandRole,
  'composite': compositeRole,
  'input': inputRole,
  'landmark': landmarkRole,
  'range': rangeRole,
  'roletype': roletypeRole,
  'section': sectionRole,
  'sectionhead': sectionheadRole,
  'select': selectRole,
  'structure': structureRole,
  'widget': widgetRole,
  'window': windowRole
};

export default ariaAbstractRoles;