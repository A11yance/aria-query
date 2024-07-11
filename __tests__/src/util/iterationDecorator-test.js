import test from 'tape';
import values from 'object.values';
import mockProperty from 'mock-property';

import iterationDecorator from 'aria-query/src/util/iterationDecorator';

test('iterationDecorator', (t) => {
  t.test('adds a Symbol.iterator property to a collection', async (st) => {
      // const collection = {a: 'apple', b: 'banana', c: 'cantaloupe'};
      const collection = {
        'a': 'apple',
        'b': 'banana',
        'c': 'cantaloupe',
      };
      const arr = ['apple', 'banana', 'cantaloupe'];
      const iter = iterationDecorator(collection, values(collection));
      st.deepEqual([...iter], arr, 'returns the values when iterated');
  });

  t.test('when Symbol is not defined in the global space', async (st) => {
    const originalSymbolIterator = typeof Symbol === 'function' ? Symbol.iterator : null;
    st.teardown(mockProperty(global, 'Symbol', { value: undefined }));

    const collection = {
      'a': 'apple',
      'b': 'banana',
      'c': 'cantaloupe',
    };
    const iter = iterationDecorator(collection, []);
    st.equal(iter[originalSymbolIterator], undefined, 'does not add a Symbol.iterator property to a collection');
  });

  t.test('when Symbol.iterator is not defined in the global space', async (st) => {
    const originalSymbolIterator = typeof Symbol === 'function' ? Symbol.iterator : null;
    st.teardown(mockProperty(global, 'Symbol', { value: function () {} }));

    const collection = {
      'a': 'apple',
      'b': 'banana',
      'c': 'cantaloupe',
    };
    const iter = iterationDecorator(collection, []);
    st.equal(iter[originalSymbolIterator], undefined, 'does not add a Symbol.iterator property to a collection');
  });
});