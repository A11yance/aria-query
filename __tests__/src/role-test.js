/* eslint-env mocha */
import expect from 'expect';
import Role from '../../src/Role';

describe('rolesMap', function () {
  it('should instantiate a valid role object', function() {
    const alertRole = new Role('alert');
    expect(alertRole).toExist();
  });

  it('should throw an error when try to instantiate a non-existant role', function () {
    expect(function () {
      new Role('foo');
    }).toThrow(/foo is not a valid ARIA role./)
  });

  describe('#name', function() {
    it('should have name property set correctly', function () {
      const alertRole = new Role('alert');
      expect(alertRole.name()).toBe('alert');
    });
  });

  describe('#supportedAriaProps', function() {
    it('should have supportedAriaProps property set correctly', function () {
      const alertRole = new Role('alert');
      const supportedProps = alertRole.supportedAriaProps();
      expect(supportedProps.length).toBeGreaterThan(1);
    });
  });

  describe('#supportsAriaProp', function () {
    it('should return true if the given role supports an aria-* prop', function () {
      const alertRole = new Role('alert');
      expect(alertRole.supportsAriaProp('aria-expanded')).toBe(true);
    });

    it('should return false if the given role does not support an aria-* prop', function() {
      const alertRole = new Role('alert');
      expect(alertRole.supportsAriaProp('aria-colindex')).toBe(false);
    });
  });
});
