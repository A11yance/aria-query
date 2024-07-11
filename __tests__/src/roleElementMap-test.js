import test from 'tape';
import inspect from 'object-inspect';
import deepEqual from 'deep-equal-json';

import roleElementMap from '../../src/roleElementMap';

const entriesList = [
  ["article", [{"name": "article"}]],
  ["banner", [{"constraints": ["scoped to the body element"], "name": "header"}]],
  ["blockquote", [{"name": "blockquote"}]],
  ["button", [{"attributes": [{"name": "type", "value": "button"}], "name": "input"}, {"attributes": [{"name": "type", "value": "image"}], "name": "input"}, {"attributes": [{"name": "type", "value": "reset"}], "name": "input"}, {"attributes": [{"name": "type", "value": "submit"}], "name": "input"}, {"name": "button"}]],
  ["caption", [{"name": "caption"}]],
  ["cell", [{"constraints": ["ancestor table element has table role"], "name": "td"}]],
  ["checkbox", [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}]],
  ["code", [{"name": "code"}]],
  ["columnheader", [{"name": "th"}, {"attributes": [{"name": "scope", "value": "col"}], "name": "th"}, {"attributes": [{"name": "scope", "value": "colgroup"}], "name": "th"}]],
  ["combobox", [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "email"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "search"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "tel"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "text"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "url"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "url"}], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "multiple"}, {"constraints": ["undefined"], "name": "size"}], "constraints": ["the multiple attribute is not set and the size attribute does not have a value greater than 1"], "name": "select"}]],
  ["complementary", [{"constraints": ["scoped to the body element", "scoped to the main element"], "name": "aside"}, {"attributes": [{"constraints": ["set"], "name": "aria-label"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}, {"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}]],
  ["contentinfo", [{"constraints": ["scoped to the body element"], "name": "footer"}]],
  ["definition", [{"name": "dd"}]],
  ["deletion", [{"name": "del"}]],
  ["dialog", [{"name": "dialog"}]],
  ["document", [{"name": "html"}]],
  ["emphasis", [{"name": "em"}]],
  ["figure", [{"name": "figure"}]],
  ["form", [{"attributes": [{"constraints": ["set"], "name": "aria-label"}], "name": "form"}, {"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "name": "form"}, {"attributes": [{"constraints": ["set"], "name": "name"}], "name": "form"}]],
  ["generic", [{"name": "a"}, {"name": "area"}, {"name": "aside"}, {"name": "b"}, {"name": "bdo"}, {"name": "body"}, {"name": "data"}, {"name": "div"}, {"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "footer"}, {"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "header"}, {"name": "hgroup"}, {"name": "i"}, {"name": "pre"}, {"name": "q"}, {"name": "samp"}, {"name": "section"}, {"name": "small"}, {"name": "span"}, {"name": "u"}]],
  ["grid", [{"attributes": [{"name": "role", "value": "grid"}], "name": "table"}]],
  ["gridcell", [{"constraints": ["ancestor table element has grid role", "ancestor table element has treegrid role"], "name": "td"}]],
  ["group", [{"name": "details"}, {"name": "fieldset"}, {"name": "optgroup"}, {"name": "address"}]],
  ["heading", [{"name": "h1"}, {"name": "h2"}, {"name": "h3"}, {"name": "h4"}, {"name": "h5"}, {"name": "h6"}]],
  ["img", [{"attributes": [{"constraints": ["set"], "name": "alt"}], "name": "img"}, {"attributes": [{"constraints": ["undefined"], "name": "alt"}], "name": "img"}]],
  ["insertion", [{"name": "ins"}]],
  ["link", [{"attributes": [{"constraints": ["set"], "name": "href"}], "name": "a"}, {"attributes": [{"constraints": ["set"], "name": "href"}], "name": "area"}]],
  ["list", [{"name": "menu"}, {"name": "ol"}, {"name": "ul"}]],
  ["listbox", [{"attributes": [{"constraints": [">1"], "name": "size"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"}, {"attributes": [{"name": "multiple"}], "name": "select"}, {"name": "datalist"}]],
  ["listitem", [{"constraints": ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"], "name": "li"}]],
  ["main", [{"name": "main"}]],
  ["mark", [{"name": "mark"}]],
  ["math", [{"name": "math"}]],
  ["meter", [{"name": "meter"}]],
  ["navigation", [{"name": "nav"}]],
  ["option", [{"name": "option"}]],
  ["paragraph", [{"name": "p"}]],
  ["presentation", [{"attributes": [{"name": "alt", "value": ""}], "name": "img"}]],
  ["progressbar", [{"name": "progress"}]],
  ["radio", [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}]],
  ["region", [{"attributes": [{"constraints": ["set"], "name": "aria-label"}], "name": "section"}, {"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "name": "section"}]],
  ["row", [{"name": "tr"}]],
  ["rowgroup", [{"name": "tbody"}, {"name": "tfoot"}, {"name": "thead"}]],
  ["rowheader", [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}, {"attributes": [{"name": "scope", "value": "rowgroup"}], "name": "th"}]],
  ["section", [{"attributes": [{"name": "aria-label"}], "name": "section"}, {"attributes": [{"name": "aria-labelledby"}], "name": "section"}]],
  ["searchbox", [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "search"}], "constraints": ["the list attribute is not set"], "name": "input"}]],
  ["separator", [{"name": "hr"}]],
  ["slider", [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}]],
  ["spinbutton", [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}]],
  ["status", [{"name": "output"}]],
  ["strong", [{"name": "strong"}]],
  ["subscript", [{"name": "sub"}]],
  ["superscript", [{"name": "sup"}]],
  ["switch", [{"attributes": [{"name": "aria-checked"}], "name": "button"}]],
  ["table", [{"name": "table"}]],
  ["term", [{"name": "dfn"}, {"name": "dt"}]],
  ["textbox", [{"attributes": [{"constraints": ["undefined"], "name": "type"}, {"constraints": ["undefined"], "name": "list"}], "constraints": ["the list attribute is not set"], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "email"}], "constraints": ["the list attribute is not set"], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "tel"}], "constraints": ["the list attribute is not set"], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "text"}], "constraints": ["the list attribute is not set"], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "url"}], "constraints": ["the list attribute is not set"], "name": "input"}, {"name": "textarea"}]],
  ["time", [{"name": "time"}]],
];

test('roleElementMap API', async (t) => {
  t.test('iteration', async (st) => {
    st.notEqual(roleElementMap[Symbol.iterator], undefined, 'has an iterator defined');
    st.equal([...roleElementMap].length, 55, 'has a specific length');

    st.test('supports the spread operator', async (s2t) => {
      [...roleElementMap].forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.ok(found, `spread has role: ${role}`);
        s2t.ok(elements && typeof elements === 'object', `spread has object elements`)
      });
    });

    st.test('supports the for..of pattern', async (s2t) => {
      const output = [];
      for (const [key, value] of roleElementMap) {
        output.push([key, value]);
      }

      output.forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.ok(found, `for-of has role: ${role}`);
        s2t.ok(elements && typeof elements === 'object', `for-of has object elements`)
      });
    });
  });

  t.test('forEach()', async (st) => {
    const output = [];
    let context;
    roleElementMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });

    for (let i = 0; i < output.length; i++) {
      const [role, elements] = output[i];
      st.ok(
        entriesList.find(([r]) => r === role),
        `\`forEach\` has role: ${role}`
      );
      st.ok(elements && typeof elements === 'object', `\`forEach\` has object elements`)
    }
  });

  t.test('get()', async (st) => {
    const map = roleElementMap.get('button');

    [
      {"attributes": [{"name": "type", "value": "button"}], "name": "input"},
      {"attributes": [{"name": "type", "value": "image"}], "name": "input"},
      {"attributes": [{"name": "type", "value": "reset"}], "name": "input"},
      {"attributes": [{"name": "type", "value": "submit"}], "name": "input"},
      {"name": "button"}
    ].forEach((element) => {
      st.ok(map.some((e) => deepEqual(e, element)), `has element: ${inspect(element)}`);
    });

    st.equal(roleElementMap.get('fake role'), undefined, 'returns undefined for a fake role');
  });

  t.test('has()', async (st) => {
    st.equal(roleElementMap.has('button'), true, 'has a defined role');
    st.equal(roleElementMap.has('fake role'), false, 'returns false for a fake role');
  });

  t.test('keys(), iteration', async (st) => {
    const entriesKeys = entriesList.map(entry => entry[0]);
    for (const key of roleElementMap.keys()) {
      st.ok(entriesKeys.find((k) => k === key), `for-of has key: ${key}`);
    }

    [...roleElementMap.keys()].forEach(([key]) => {
        st.ok(entriesKeys.find(([k]) => k === key), `spread has key: ${key}`);
    });
  });

  t.test('values(), iteration', async (st) => {
    for (const values of roleElementMap.values()) {
      st.ok(entriesList.some(([, x]) => deepEqual(x, values)), `for-of has object values: ${inspect(values)}`);
    }

    [...roleElementMap.values()].forEach((values) => {
      st.ok(entriesList.some(([, x]) => deepEqual(x, values)), `spread has object values: ${inspect(values)}`);
    });
  });
});