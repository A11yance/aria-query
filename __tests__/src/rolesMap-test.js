/* eslint-env mocha */
import expect from 'expect';
import rolesMap from '../../src/rolesMap';
import ariaPropsMap from '../../src/ariaPropsMap';

describe('rolesMap', function () {
  it('should be a Map', function () {
    expect(rolesMap).toBeInstanceOf(Map);
  });
  it('should have size', function () {
    expect(rolesMap.size).toBeGreaterThan(0);
  });

  test.each(
    [...rolesMap.entries()])(
    'The definition for role %s has only props defined in ariaPropsMap',
    (role, definition) => {

      const unknownProps = Object.keys(definition.props).filter((prop) => {
        return !ariaPropsMap.has(prop);
      });
      expect(unknownProps.length).toEqual(0);
    }
  );

  // dpub-aria
  describe('doc-abstract role', function () {
    const abstract = rolesMap.get('doc-abstract');
    const { props } = abstract;

    it('should not have aria-describedat property', function () {
      expect(props).not.toHaveProperty('aria-describedat');
    });

    it('should have aria-details property', function () {
      expect(props).toHaveProperty('aria-details', null);
    });
  });
});
