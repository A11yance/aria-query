/* eslint-env mocha */
import expect from 'expect';
import ariaPropsMap from '../../src/ariaPropsMap';

describe('ariaPropsMap', function () {
  it('should be a Map', function () {
    expect(ariaPropsMap).toBeA(Map);
  });
  it('should have size', function () {
    expect(ariaPropsMap.size).toBeGreaterThan(0);
  });
});
