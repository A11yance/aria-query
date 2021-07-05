import expect from 'expect';
import { roleElements } from '../../src';

describe('roleElements', function () {
  it('should be a Map', function () {
    expect(roleElements instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(roleElements.size).toBeGreaterThan(0);
  });
});
