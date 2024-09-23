import test from 'tape';
import deepEqual from 'deep-equal-json';
import some from 'array.prototype.some';

import elementRoleMap from 'aria-query/src/elementRoleMap';

import testIteration from '../helpers/testIteration';
import testForEach from '../helpers/testForEach';

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
  [{"name": "hgroup"}, ["group"]],
  [{"name": "i"}, ["generic"]],
  [{"name": "pre"}, ["generic"]],
  [{"name": "q"}, ["generic"]],
  [{"name": "s"}, ["deletion"]],
  [{"name": "samp"}, ["generic"]],
  [{"name": "search"}, ["search"]],
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
  [{"attributes": [{"constraints": ["set"], "name": "alt"}], "name": "img"}, ["image", "img"]],
  [{"attributes": [{"constraints": ["undefined"], "name": "alt"}], "name": "img"}, ["image", "img"]],
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
  [{"attributes": [{"name": "alt", "value": ""}], "name": "img"}, ["none", "presentation"]],
  [{"name": "option"}, ["option"]],
  [{"name": "p"}, ["paragraph"]],
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
  [{"name": "svg"}, ["graphics-document"]],
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

test('elementRoleMap API', (t) => {
  const predicate = (obj, [o]) => deepEqual(o, obj);

  testIteration(t, elementRoleMap, entriesList, 115, predicate);

  testForEach(t, elementRoleMap, entriesList, predicate);

  t.test('get()', (st) => {
    st.ok(some(
      elementRoleMap.get({
        attributes: [
          { constraints: ["set"], name: 'href' }
        ],
        name: 'a'
      }),
      x => x.indexOf('link') >= 0
    ));

    st.ok(some(
      elementRoleMap.get({
        "attributes": [
          {
            "name": "type",
            "value": "radio"
          }
        ], "name": "input"
      }),
      x => x.indexOf('radio') >= 0
    ));

    st.equal(
      elementRoleMap.get({
        attributes: {
          name: 'fake attribute',
        },
        name: 'fake element',
      }),
      undefined,
    );

    st.end();
  });

  t.test('has()', (st) => {
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

    st.end();
  });

  t.end();
});
