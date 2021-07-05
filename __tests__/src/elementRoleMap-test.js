import expect from 'expect';
import { elementRoles } from '../../src';

describe('elementRoles', function () {
  it('should be a Map', function () {
    expect(elementRoles instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(elementRoles.size).toBeGreaterThan(0);
  });
});
