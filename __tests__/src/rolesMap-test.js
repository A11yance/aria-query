/* eslint-env mocha */
import expect from 'expect';
import rolesMap from '../../src/rolesMap';
import ariaPropsMap from '../../src/ariaPropsMap';

describe('rolesMap', function () {
  it('should be a Map', function () {
    expect(rolesMap).toBeA(Map);
  });
  it('should have size', function () {
    expect(rolesMap.size).toBeGreaterThan(0);
  });

  for (const [role, definition] of rolesMap) {
    describe(role, function() {
      it('should have only props defined in ariaPropsMap', function() {
        const unknownProps = Object.keys(definition.props).filter((prop) => {
          return !ariaPropsMap.has(prop);
        });
        expect(unknownProps).toEqual([]);
      });
    });
  }
});
