/* eslint-env mocha */
import expect from 'expect';
import domMap from '../../src/domMap';

describe('domMap', function () {
  it('should be a Map', function () {
    expect(domMap).toBeA(Map);
  });
  it('should have size', function () {
    expect(domMap.size).toBeGreaterThan(0);
  });
});
