import expect from 'expect';
import { dom } from '../../src';

describe('dom', function () {
  it('should be a Map', function () {
    expect(dom instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(dom.size).toBeGreaterThan(0);
  });
});
