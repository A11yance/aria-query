import test from 'tape';
import deepEqual from 'deep-equal-json';
import inspect from 'object-inspect';

import domMap from '../../src/domMap';

const entriesList = [
  ["a", {"reserved": false}],
  ["abbr", {"reserved": false}],
  ["acronym", {"reserved": false}],
  ["address", {"reserved": false}],
  ["applet", {"reserved": false}],
  ["area", {"reserved": false}],
  ["article", {"reserved": false}],
  ["aside", {"reserved": false}],
  ["audio", {"reserved": false}],
  ["b", {"reserved": false}],
  ["base", {"reserved": true}],
  ["bdi", {"reserved": false}],
  ["bdo", {"reserved": false}],
  ["big", {"reserved": false}],
  ["blink", {"reserved": false}],
  ["blockquote", {"reserved": false}],
  ["body", {"reserved": false}],
  ["br", {"reserved": false}],
  ["button", {"reserved": false}],
  ["canvas", {"reserved": false}],
  ["caption", {"reserved": false}],
  ["center", {"reserved": false}],
  ["cite", {"reserved": false}],
  ["code", {"reserved": false}],
  ["col", {"reserved": true}],
  ["colgroup", {"reserved": true}],
  ["content", {"reserved": false}],
  ["data", {"reserved": false}],
  ["datalist", {"reserved": false}],
  ["dd", {"reserved": false}],
  ["del", {"reserved": false}],
  ["details", {"reserved": false}],
  ["dfn", {"reserved": false}],
  ["dialog", {"reserved": false}],
  ["dir", {"reserved": false}],
  ["div", {"reserved": false}],
  ["dl", {"reserved": false}],
  ["dt", {"reserved": false}],
  ["em", {"reserved": false}],
  ["embed", {"reserved": false}],
  ["fieldset", {"reserved": false}],
  ["figcaption", {"reserved": false}],
  ["figure", {"reserved": false}],
  ["font", {"reserved": false}],
  ["footer", {"reserved": false}],
  ["form", {"reserved": false}],
  ["frame", {"reserved": false}],
  ["frameset", {"reserved": false}],
  ["h1", {"reserved": false}],
  ["h2", {"reserved": false}],
  ["h3", {"reserved": false}],
  ["h4", {"reserved": false}],
  ["h5", {"reserved": false}],
  ["h6", {"reserved": false}],
  ["head", {"reserved": true}],
  ["header", {"reserved": false}],
  ["hgroup", {"reserved": false}],
  ["hr", {"reserved": false}],
  ["html", {"reserved": true}],
  ["i", {"reserved": false}],
  ["iframe", {"reserved": false}],
  ["img", {"reserved": false}],
  ["input", {"reserved": false}],
  ["ins", {"reserved": false}],
  ["kbd", {"reserved": false}],
  ["keygen", {"reserved": false}],
  ["label", {"reserved": false}],
  ["legend", {"reserved": false}],
  ["li", {"reserved": false}],
  ["link", {"reserved": true}],
  ["main", {"reserved": false}],
  ["map", {"reserved": false}],
  ["mark", {"reserved": false}],
  ["marquee", {"reserved": false}],
  ["menu", {"reserved": false}],
  ["menuitem", {"reserved": false}],
  ["meta", {"reserved": true}],
  ["meter", {"reserved": false}],
  ["nav", {"reserved": false}],
  ["noembed", {"reserved": true}],
  ["noscript", {"reserved": true}],
  ["object", {"reserved": false}],
  ["ol", {"reserved": false}],
  ["optgroup", {"reserved": false}],
  ["option", {"reserved": false}],
  ["output", {"reserved": false}],
  ["p", {"reserved": false}],
  ["param", {"reserved": true}],
  ["picture", {"reserved": true}],
  ["pre", {"reserved": false}],
  ["progress", {"reserved": false}],
  ["q", {"reserved": false}],
  ["rp", {"reserved": false}],
  ["rt", {"reserved": false}],
  ["rtc", {"reserved": false}],
  ["ruby", {"reserved": false}],
  ["s", {"reserved": false}],
  ["samp", {"reserved": false}],
  ["script", {"reserved": true}],
  ["section", {"reserved": false}],
  ["select", {"reserved": false}],
  ["small", {"reserved": false}],
  ["source", {"reserved": true}],
  ["spacer", {"reserved": false}],
  ["span", {"reserved": false}],
  ["strike", {"reserved": false}],
  ["strong", {"reserved": false}],
  ["style", {"reserved": true}],
  ["sub", {"reserved": false}],
  ["summary", {"reserved": false}],
  ["sup", {"reserved": false}],
  ["table", {"reserved": false}],
  ["tbody", {"reserved": false}],
  ["td", {"reserved": false}],
  ["textarea", {"reserved": false}],
  ["tfoot", {"reserved": false}],
  ["th", {"reserved": false}],
  ["thead", {"reserved": false}],
  ["time", {"reserved": false}],
  ["title", {"reserved": true}],
  ["tr", {"reserved": false}],
  ["track", {"reserved": true}],
  ["tt", {"reserved": false}],
  ["u", {"reserved": false}],
  ["ul", {"reserved": false}],
  ["var", {"reserved": false}],
  ["video", {"reserved": false}],
  ["wbr", {"reserved": false}],
  ["xmp", {"reserved": false}],
];

test('domMap API', async (t) => {
  t.test('iteration', async (st) => {
    st.notEqual(domMap[Symbol.iterator], undefined, 'has an iterator defined');
    st.equal([...domMap].length, 129, 'has a specific length');

    st.test('supports the spread operator', async (s2t) => {
      [...domMap].forEach(([obj, roles]) => {
        const found = entriesList.find(([o]) => deepEqual(o, obj));

        s2t.ok(found, `spread has element: ${inspect(obj)}`);
        s2t.deepEqual(roles, found[1], `for-of has object elements`);
      });
    });

    st.test('supports the for..of pattern', async (s2t) => {
      const output = [];
      for (const [key, value] of domMap) {
        output.push([key, value]);
      }

      output.forEach(([obj, roles]) => {
        const found = entriesList.find(([o]) => deepEqual(o, obj));

        s2t.ok(found, `for-of has element: ${inspect(obj)}`);
        s2t.deepEqual(roles, found[1], `for-of has object elements`);
      });
    });
  });

  t.test('forEach()', async (st) => {
    const output = [];
    let context;
    domMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });

    for (let i = 0; i < output.length; i++) {
      const [obj, roles] = output[i];
      const found = entriesList.find(([o]) => deepEqual(o, obj));
      
      st.ok(found, `\`forEach\` has element: ${inspect(obj)}`);
      st.deepEqual(roles, found[1], `\`forEach\` has object elements`);
    }
  });

  t.test('get()', async (st) => {
    st.notEqual(domMap.get('a'), undefined, 'has a defined element')
    st.equal(domMap.get('fake element'), undefined, 'returns undefined for a fake element');
  });

  t.test('has()', async (st) => {
    st.equal(domMap.has('a'), true, 'has a defined element');
    st.equal(domMap.has('fake element'), false, 'returns false for a fake element');
  });

  t.test('keys(), iteration', async (st) => {
    const entriesKeys = entriesList.map(entry => entry[0]);
    for (const obj of domMap.keys()) {
      st.ok(entriesKeys.find((k) => deepEqual(k, obj)), `for-of has key: ${inspect(obj)}`);
    }

    [...domMap.keys()].forEach((obj) => {
        st.ok(entriesKeys.find((k) => deepEqual(k, obj)), `spread has key: ${inspect(obj)}`);
    });
  });

  t.test('values(), iteration', async (st) => {
    for (const values of domMap.values()) {
      st.ok(entriesList.some(([, x]) => deepEqual(x, values)), `for-of has object values: ${inspect(values)}`);
    }

    [...domMap.values()].forEach((values) => {
      st.ok(entriesList.some(([, x]) => deepEqual(x, values)), `spread has object values: ${inspect(values)}`);
    });
  });
});
