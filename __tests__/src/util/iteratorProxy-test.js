import test from 'tape';

import iteratorProxy from 'aria-query/src/util/iteratorProxy';

test('iteratorProxy', async (t) => {
  const arr = ['a', 'b', 'c'];
  const iter = {
    [Symbol.iterator]: iteratorProxy.bind(arr)
  };

  t.deepEqual([...iter], arr, 'creates an iterator for the bound array');
});