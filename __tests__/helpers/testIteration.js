import inspect from 'object-inspect';

export default function testIteration(t, map, entriesList, expectedLength, predicate) {
    t.test('iteration', { skip: typeof Symbol === 'undefined' }, (st) => {
      st.notEqual(map[Symbol.iterator], undefined, 'has an iterator defined');
      st.equal([...map].length, expectedLength, 'has a specific length');

      st.test('supports the spread operator', (s2t) => {
        [...map].forEach(([obj, values]) => {
          const found = entriesList.filter((entry) => predicate(obj, entry))[0];

          s2t.ok(found, `spread has element: ${inspect(obj)}`);
          if (values && found && found[1]) {
            s2t.deepEqual(values, found[1], `spread has object elements`);
          } else {
            s2t.ok(values && typeof values === 'object', 'spread has object elements')
          }
        });

        s2t.end();
      });

      st.test('supports the for..of pattern', (s2t) => {
        const output = [];
        for (const [key, value] of map) {
          output.push([key, value]);
        }

        output.forEach(([obj, values]) => {
          const found = entriesList.filter((entry) => predicate(obj, entry))[0];

          s2t.ok(found, `for-of has element: ${inspect(obj)}`);
          if (values && found && found[1]) {
            s2t.deepEqual(values, found[1], `for-of has object elements`);
          } else {
            s2t.ok(values && typeof values === 'object', 'for-of has object elements')
          }
        });

        s2t.end();
      });

      st.end();
    });
  }