/* eslint-env mocha */
import expect from 'expect';
import elementRoleMap from '../../src/elementRoleMap';

describe('domRolesMap', function () {
  it('should be a Map', function () {
    expect(elementRoleMap instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(elementRoleMap.size).toBeGreaterThan(0);
  });
});
