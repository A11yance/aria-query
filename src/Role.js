/**
 * @flow
 */
import { roles } from './index';
import rolesMap from './etc/roles.json';

// Private properties on Role class.
const _name = Symbol('name');
const _supportedAriaProps = Symbol('supportedAriaProps');

export default class Role {
  [_name]: string;
  [_supportedAriaProps]: Array<string>;

  constructor(role: string) {
    if (roles.has(role) === false) {
      throw new Error(`${role} is not a valid ARIA role.`);
    }

    this[_name] = role;
    this[_supportedAriaProps] = roles.get(role).props;
  }

  /**
   * Returns the role name.
   */
  name() {
    return this[_name];
  }

 /**
  * Returns a list of supported aria-* properties for the instantiated role.
  */
  supportedAriaProps(): Array<string> {
    return this[_supportedAriaProps];
  }

  /**
   * Returns boolean indicating whether an aria-* prop is supported by the instantiated role.
   * prop - An aria-* property.
   * @type {string}
   */
  supportsAriaProp(prop: string): boolean {
    const normalizedProp: string = prop.toLowerCase();
    return this[_supportedAriaProps].some(function(supportedProp) {
      return supportedProp === normalizedProp;
    });
  }
}
