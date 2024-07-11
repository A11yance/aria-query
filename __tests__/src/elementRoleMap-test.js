import test from 'tape';
import deepEqual from 'deep-equal-json';
import inspect from 'object-inspect';

import elementRoleMap from '../../src/elementRoleMap';

const entriesList = [
  [{"name": "article"}, ["article"]],
  [{"constraints": ["scoped to the body element"], "name": "header"}, ["banner"]],
  [{"name": "blockquote"}, ["blockquote"]],
  [{"attributes": [{"name": "type", "value": "button"}], "name": "input"}, ["button"]],
  [{"attributes": [{"name": "type", "value": "image"}], "name": "input"}, ["button"]],
  [{"attributes": [{"name": "type", "value": "reset"}], "name": "input"}, ["button"]],
  [{"attributes": [{"name": "type", "value": "submit"}], "name": "input"}, ["button"]],
  [{"name": "button"}, ["button"]],
  [{"name": "caption"}, ["caption"]],
  [{"constraints": ["ancestor table element has table role"], "name": "td"}, ["cell"]],
  [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}, ["checkbox"]],
  [{"name": "code"}, ["code"]],
  [{"name": "th"}, ["columnheader"]],
  [{"attributes": [{"name": "scope", "value": "col"}], "name": "th"}, ["columnheader"]],
  [{"attributes": [{"name": "scope", "value": "colgroup"}], "name": "th"}, ["columnheader"]],
  [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "email"}], "name": "input"}, ["combobox"]],
  [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "search"}], "name": "input"}, ["combobox"]],
  [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "tel"}], "name": "input"}, ["combobox"]],
  [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "text"}], "name": "input"}, ["combobox"]],
  [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "url"}], "name": "input"}, ["combobox"]],
  [{"attributes": [{"constraints": ["undefined"], "name": "multiple"}, {"constraints": ["undefined"], "name": "size"}], "constraints": ["the multiple attribute is not set and the size attribute does not have a value greater than 1"], "name": "select"}, ["combobox"]],
  [{"constraints": ["scoped to the body element", "scoped to the main element"], "name": "aside"}, ["complementary"]],
  [{"attributes": [{"constraints": ["set"], "name": "aria-label"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}, ["complementary"]],
  [{"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}, ["complementary"]],
  [{"constraints": ["scoped to the body element"], "name": "footer"}, ["contentinfo"]],
  [{"name": "dd"}, ["definition"]],
  [{"name": "del"}, ["deletion"]],
  [{"name": "dialog"}, ["dialog"]],
  [{"name": "em"}, ["emphasis"]],
  [{"name": "html"}, ["document"]],
  [{"name": "figure"}, ["figure"]],
  [{"attributes": [{"constraints": ["set"], "name": "aria-label"}], "name": "form"}, ["form"]],
  [{"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "name": "form"}, ["form"]],
  [{"attributes": [{"constraints": ["set"], "name": "name"}], "name": "form"}, ["form"]],
  [{"name": "a"}, ["generic"]],
  [{"name": "area"}, ["generic"]],
  [{"name": "aside"}, ["generic"]],
  [{"name": "b"}, ["generic"]],
  [{"name": "bdo"}, ["generic"]],
  [{"name": "body"}, ["generic"]],
  [{"name": "data"}, ["generic"]],
  [{"name": "div"}, ["generic"]],
  [{"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "footer"}, ["generic"]],
  [{"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "header"}, ["generic"]],
  [{"name": "hgroup"}, ["generic"]],
  [{"name": "i"}, ["generic"]],
  [{"name": "pre"}, ["generic"]],
  [{"name": "q"}, ["generic"]],
  [{"name": "samp"}, ["generic"]],
  [{"name": "section"}, ["generic"]],
  [{"name": "small"}, ["generic"]],
  [{"name": "span"}, ["generic"]],
  [{"name": "u"}, ["generic"]],
  [{"constraints": ["ancestor table element has grid role", "ancestor table element has treegrid role"], "name": "td"}, ["gridcell"]],
  [{"name": "details"}, ["group"]],
  [{"name": "fieldset"}, ["group"]],
  [{"name": "optgroup"}, ["group"]],
  [{"name": "address"}, ["group"]],
  [{"name": "h1"}, ["heading"]],
  [{"name": "h2"}, ["heading"]],
  [{"name": "h3"}, ["heading"]],
  [{"name": "h4"}, ["heading"]],
  [{"name": "h5"}, ["heading"]],
  [{"name": "h6"}, ["heading"]],
  [{"attributes": [{"constraints": ["set"], "name": "alt"}], "name": "img"}, ["img"]],
  [{"attributes": [{"constraints": ["undefined"], "name": "alt"}], "name": "img"}, ["img"]],
  [{"name": "ins"}, ["insertion"]],
  [{"attributes": [{"constraints": ["set"], "name": "href"}], "name": "a"}, ["link"]],
  [{"attributes": [{"constraints": ["set"], "name": "href"}], "name": "area"}, ["link"]],
  [{"name": "menu"}, ["list"]],
  [{"name": "ol"}, ["list"]],
  [{"name": "ul"}, ["list"]],
  [{"attributes": [{"constraints": [">1"], "name": "size"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"}, ["listbox"]],
  [{"attributes": [{"name": "multiple"}], "name": "select"}, ["listbox"]],
  [{"name": "datalist"}, ["listbox"]],
  [{"attributes": [{"name": "aria-multiselectable", "value": "false"}], "name": "datalist"}, ["listbox"]],
  [{"constraints": ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"], "name": "li"}, ["listitem"]],
  [{"name": "main"}, ["main"]],
  [{"name": "mark"}, ["mark"]],
  [{"name": "math"}, ["math"]],
  [{"name": "meter"}, ["meter"]],
  [{"name": "nav"}, ["navigation"]],
  [{"name": "option"}, ["option"]],
  [{"name": "p"}, ["paragraph"]],
  [{"attributes": [{"name": "alt", "value": ""}], "name": "img"}, ["presentation"]],
  [{"name": "progress"}, ["progressbar"]],
  [{"attributes": [{"name": "aria-valuemax"}, {"name": "aria-valuemin", "value": 0}, {"name": "aria-valuenow"}], "constraints": ["the progress bar is determinate"],"name": "progress"}, ["progressbar"]],
  [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}, ["radio"]],
  [{"attributes": [{"constraints": ["set"], "name": "aria-label"}], "name": "section"}, ["region"]],
  [{"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "name": "section"}, ["region"]],
  [{"name": "tr"}, ["row"]],
  [{"name": "tbody"}, ["rowgroup"]],
  [{"constraints": ["ancestor table element has table role"], "name": "td"}, ["cell"]],
  [{"name": "tfoot"}, ["rowgroup"]],
  [{"name": "thead"}, ["rowgroup"]],
  [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}, ["rowheader"]],
  [{"attributes": [{"name": "scope", "value": "rowgroup"}], "name": "th"}, ["rowheader"]],
  [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "search"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["searchbox"]],
  [{"attributes": [{"name": "aria-label"}], "name": "section"}, ["section"]],
  [{"attributes": [{"name": "aria-labelledby"}], "name": "section"}, ["section"]],
  [{"name": "hr"}, ["separator"]],
  [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}, ["slider"]],
  [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}, ["spinbutton"]],
  [{"name": "output"}, ["status"]],
  [{"name": "strong"}, ["strong"]],
  [{"name": "sub"}, ["subscript"]],
  [{"name": "sup"}, ["superscript"]],
  [{"attributes": [{"name": "aria-checked"}], "name": "button"}, ["switch"]],
  [{"name": "table"}, ["table"]],
  [{"name": "dfn"}, ["term"]],
  [{"name": "dt"}, ["term"]],
  [{"attributes": [{"constraints": ["undefined"], "name": "type"}, {"constraints": ["undefined"], "name": "list"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "email"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "tel"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "text"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "url"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"name": "textarea"}, ["textbox"]],
  [{"name": "time"}, ["time"]],
];

test('elementRoleMap API', async (t) => {
  t.test('iteration', async (st) => {
    st.notEqual(elementRoleMap[Symbol.iterator], undefined, 'has an iterator defined');
    st.equal([...elementRoleMap].length, 112, 'has a specific length');

    st.test('supports the spread operator', async (s2t) => {
      [...elementRoleMap].forEach(([obj, roles]) => {
        const found = entriesList.find(([o]) => deepEqual(o, obj));

        s2t.ok(found, `spread has element: ${inspect(obj)}`);
        s2t.deepEqual(roles, found[1], `for-of has object elements`);
      });
    });

    st.test('supports the for..of pattern', async (s2t) => {
      const output = [];
      for (const [key, value] of elementRoleMap) {
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
    elementRoleMap.forEach((value, key, map) => {
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
    st.ok(
      elementRoleMap.get({
        attributes: [
          { constraints: ["set"], name: 'href' }
        ],
        name: 'a'
      }).some(x => x.includes('link')),
    );

    st.ok(
      elementRoleMap.get({
        "attributes": [
          {
            "name": "type",
            "value": "radio"
          }
        ], "name": "input"
      }).some(x => x.includes('radio')),
    );

    st.equal(
      elementRoleMap.get({
        attributes: {
          name: 'fake attribute',
        },
        name: 'fake element',
      }),
      undefined,
    );
  });

  t.test('has()', async (st) => {
    st.equal(
      elementRoleMap.has({
        attributes: [
          { constraints: ["set"], name: 'href' }
        ],
        name: 'a'
      }),
      true,
    );

    st.equal(
      elementRoleMap.has({
        attributes: {
          name: 'fake attribute',
        },
        name: 'fake element',
      }),
      false,
    );
  });

  t.test('keys(), iteration', async (st) => {
    const entriesKeys = entriesList.map(entry => entry[0]);
    for (const obj of elementRoleMap.keys()) {
      st.ok(entriesKeys.find((k) => deepEqual(k, obj)), `for-of has key: ${inspect(obj)}`);
    }

    [...elementRoleMap.keys()].forEach((obj) => {
        st.ok(entriesKeys.find((k) => deepEqual(k, obj)), `spread has key: ${inspect(obj)}`);
    });
  });

  t.test('values(), iteration', async (st) => {
    for (const values of elementRoleMap.values()) {
      st.ok(entriesList.some(([, x]) => deepEqual(x, values)), `for-of has object values: ${inspect(values)}`);
    }

    [...elementRoleMap.values()].forEach((values) => {
      st.ok(entriesList.some(([, x]) => deepEqual(x, values)), `spread has object values: ${inspect(values)}`);
    });
  });
});
