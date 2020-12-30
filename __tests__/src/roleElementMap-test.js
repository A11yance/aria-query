/* eslint-env mocha */
import expect from 'expect';
import roleElementMap from '../../src/roleElementMap';

describe('domRolesMap', function () {
  it('should be a Map', function () {
    expect(roleElementMap instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(roleElementMap.size).toBeGreaterThan(0);
  });
});
