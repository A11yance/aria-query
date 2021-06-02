import expect from 'expect';
import { aria, roles } from '../../src';

describe('aria', function () {
  it('should be a Map', function () {
    expect(aria instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(aria.size).toBeGreaterThan(0);
  });

  const usedProps = new Set();
  for (const roleDefinition of roles.values()) {
    for (const prop of Object.keys(roleDefinition.props)) {
      usedProps.add(prop);
    }
  }
  for (const prop of aria.keys()) {
    describe(prop, function() {
      it('should be used in at least one role definition', function() {
        expect(usedProps.has(prop)).toBe(true, `Expected '${prop}' is used in at least one role definition`);
      });
    });
  }
});
