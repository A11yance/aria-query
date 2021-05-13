/* eslint-env mocha */
import expect from 'expect';
import domMap from '../../src/domMap';

describe('domMap', function () {
  it('should be a Map', function () {
    expect(domMap).toBeInstanceOf(Map);
  });
  it('should have size', function () {
    expect(domMap.size).toBeGreaterThan(0);
  });
});
