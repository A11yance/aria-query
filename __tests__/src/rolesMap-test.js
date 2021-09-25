import expect from 'expect';
import rolesMap from '../../src/rolesMap';
import ariaPropsMap from '../../src/ariaPropsMap';

describe('rolesMap', function () {
  const roles = rolesMap.entries();
  test.each(roles)(
    'The definition for role %s has only props defined in ariaPropsMap',
    (role, definition) => {
      const unknownProps = Object.keys(definition.props).filter((prop) => {
        return ariaPropsMap.find(p => p === prop);
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
      expect(props).toEqual(expect.objectContaining({ 'aria-details': null }));
    });
  });
});
