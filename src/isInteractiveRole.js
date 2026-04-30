/**
 * @flow
 */

import rolesMap from './rolesMap';

// Roles that are widget descendants but do not accept user input in practice.
const OVERRIDE_NON_INTERACTIVE: Array<string> = ['progressbar'];

// Roles that are not widget descendants but do accept user input in practice.
const OVERRIDE_INTERACTIVE: Array<string> = ['toolbar'];

// $FlowIssue { __proto__: null } produces a prototype-less object, which is what we want here.
const interactiveRoles: { [string]: true } = { __proto__: null };

for (let i = 0; i < OVERRIDE_INTERACTIVE.length; i++) {
  interactiveRoles[OVERRIDE_INTERACTIVE[i]] = true;
}

for (const [name, def] of rolesMap.entries()) {
  if (
    !def.abstract &&
    OVERRIDE_NON_INTERACTIVE.indexOf(name) === -1 &&
    def.superClass.some((chain) => chain.indexOf('widget') !== -1)
  ) {
    interactiveRoles[name] = true;
  }
}

export default function isInteractiveRole(role: string): boolean {
  return interactiveRoles[role] === true;
}
