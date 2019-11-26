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

  // dpub-aria
  describe('doc-abstract role', function () {
    const abstract = rolesMap.get('doc-abstract');
    const { props } = abstract;

    it('should not have aria-describedat property', function () {
      expect(props).toExcludeKey('aria-describedat');
    });

    it('should have aria-details property', function () {
      expect(props).toInclude({ 'aria-details': null });
    });
  });
});
