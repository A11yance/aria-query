/* eslint-env mocha */
import expect from 'expect';
import elementRoleMap from '../../src/elementRoleMap';

describe('domRolesMap', function () {
  it('should be a Map', function () {
    expect(elementRoleMap).toBeInstanceOf(Map);
  });
  it('should have size', function () {
    expect(elementRoleMap.size).toBeGreaterThan(0);
  });
});
