/* eslint-env mocha */
import expect from 'expect';
import ariaMap from '../../src/ariaMap';

describe('ariaMap', function () {
  it('should be a Map', function () {
    expect(ariaMap).toBeA(Map);
  });
  it('should have size', function () {
    expect(ariaMap.size).toBeGreaterThan(0);
  });
});
