/* eslint-env mocha */
import expect from 'expect';
import iteratorProxy from '../../../src/util/iteratorProxy';

describe('iteratorProxy', function () {
  it('should create an iterator for the bound array', function () {
    const arr = ['a', 'b', 'c'];
    const iter = {
      [Symbol.iterator]: iteratorProxy.bind(arr)
    };
    expect([...iter]).toEqual(expect.arrayContaining(arr));
  });
});