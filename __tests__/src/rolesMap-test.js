/* eslint-env mocha */
import expect from 'expect';
import rolesMap from '../../src/rolesMap';

describe('rolesMap', function () {
  it('should be a Map', function () {
    expect(rolesMap).toBeA(Map);
  });
  it('should have size', function () {
    expect(rolesMap.size).toBeGreaterThan(0);
  });
});
