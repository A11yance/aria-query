import expect from 'expect';
import ariaPropsMap from '../../src/ariaPropsMap';
import rolesMap from '../../src/rolesMap';

describe('ariaPropsMap', function () {
  it('should be a Map', function () {
    expect(ariaPropsMap instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(ariaPropsMap.size).toBeGreaterThan(0);
  });

  const usedProps = new Set();
  for (const roleDefinition of rolesMap.values()) {
    for (const prop of Object.keys(roleDefinition.props)) {
      usedProps.add(prop);
    }
  }
  for (const prop of ariaPropsMap.keys()) {
    describe(prop, function() {
      it('should be used in at least one role definition', function() {
        expect(usedProps.has(prop)).toBe(true, `Expected '${prop}' is used in at least one role definition`);
      });
    });
  }
});
