import expect from 'expect';
import { aria, roles } from '../../src';

describe('roles', function () {
  it('should be a Map', function () {
    expect(roles instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(roles.size).toBeGreaterThan(0);
  });

  test.each(
    [...roles.entries()])(
    'The definition for role %s has only props defined in aria',
    (role, definition) => {

      const unknownProps = Object.keys(definition.props).filter((prop) => {
        return !aria.has(prop);
      });
      expect(unknownProps.length).toEqual(0);
    }
  );

  // dpub-aria
  describe('doc-abstract role', function () {
    const abstract = roles.get('doc-abstract');
    const { props } = abstract;

    it('should not have aria-describedat property', function () {
      expect(props).not.toHaveProperty('aria-describedat');
    });

    it('should have aria-details property', function () {
      expect(props).toEqual(expect.objectContaining({ 'aria-details': null }));
    });
  });
});
