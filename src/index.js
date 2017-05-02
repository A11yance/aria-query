/**
 * @flow
 */

import ariaPropsMap from './ariaPropsMap';
import domMap from './domMap';
import rolesMap from './rolesMap';
import elementRoleMap from './elementRoleMap';
import roleElementMap from './roleElementMap';

export type ARIARoleDefintionKey =
  ARIAAbstractRole
  | ARIARole
  | ARIADPubRole;


export const aria = ariaPropsMap;
export const dom = domMap;
export const roles = rolesMap;
export const elementRoles = elementRoleMap;
export const roleElements = roleElementMap;
