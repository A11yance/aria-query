/* eslint-env mocha */
import expect from 'expect';
import iterationDecorator from '../../../src/util/iterationDecorator';

describe('iterationDecorator', function () {
  describe('should add a Symbol.iterator property to a collection', function () {
    it('should return the values when iterated', function () {
      // const collection = {a: 'apple', b: 'banana', c: 'cantaloupe'};
      const collection = {
        'a': 'apple',
        'b': 'banana',
        'c': 'cantaloupe',
      };
      const arr = ['apple', 'banana', 'cantaloupe'];
      const iter = iterationDecorator(collection, Object.values(collection));
      expect([...iter]).toEqual(expect.arrayContaining(arr));
    });
  });
  describe('when Symbol is not defined in the global space', function () {
    beforeEach(function () {
      global.originalSymbol = global.Symbol
      global.originalSymbolIterator = global.Symbol.iterator;
      global.Symbol = undefined;
    });
    it('should not add a Symbol.iterator property to a collection', function () {
      const collection = {
        'a': 'apple',
        'b': 'banana',
        'c': 'cantaloupe',
      };
      const iter = iterationDecorator(collection, []);
      expect(iter[global.originalSymbolIterator]).not.toBeDefined();
    });
    afterEach(function () {
      global.Symbol = global.originalSymbol;
      global.originalSymbol = undefined;
      global.originalSymbolIterator = undefined;
    });
  });
  describe('when Symbol.iterator is not defined in the global space', function () {
    beforeEach(function () {
      global.originalSymbol = global.Symbol
      global.originalSymbolIterator = global.Symbol.iterator;
      global.Symbol = function () {};
    });
    it('should not add a Symbol.iterator property to a collection', function () {
      const collection = {
        'a': 'apple',
        'b': 'banana',
        'c': 'cantaloupe',
      };
      const iter = iterationDecorator(collection, []);
      expect(iter[global.originalSymbolIterator]).not.toBeDefined();
    });
    afterEach(function () {
      global.Symbol = global.originalSymbol;
      global.originalSymbol = undefined;
      global.originalSymbolIterator = undefined;
    });
  });
});