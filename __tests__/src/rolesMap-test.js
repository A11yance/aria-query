import test from 'tape';
import inspect from 'object-inspect';

import rolesMap from 'aria-query/src/rolesMap';
import ariaPropsMap from 'aria-query/src/ariaPropsMap';

const entriesList = [
  ["alert", null],
  ["alertdialog", null],
  ["application", null],
  ["article", null],
  ["banner", null],
  ["blockquote", null],
  ["button", null],
  ["caption", null],
  ["cell", null],
  ["checkbox", null],
  ["code", null],
  ["columnheader", null],
  ["combobox", null],
  ["command", null],
  ["complementary", null],
  ["composite", null],
  ["contentinfo", null],
  ["definition", null],
  ["deletion", null],
  ["dialog", null],
  ["directory", null],
  ["document", null],
  ["emphasis", null],
  ["feed", null],
  ["figure", null],
  ["form", null],
  ["generic", null],
  ["grid", null],
  ["gridcell", null],
  ["group", null],
  ["heading", null],
  ["img", null],
  ["input", null],
  ["insertion", null],
  ["landmark", null],
  ["link", null],
  ["list", null],
  ["listbox", null],
  ["listitem", null],
  ["log", null],
  ["main", null],
  ["marquee", null],
  ["mark", null],
  ["math", null],
  ["menu", null],
  ["menubar", null],
  ["menuitem", null],
  ["menuitemcheckbox", null],
  ["menuitemradio", null],
  ["meter", null],
  ["navigation", null],
  ["none", null],
  ["note", null],
  ["option", null],
  ["paragraph", null],
  ["presentation", null],
  ["progressbar", null],
  ["radio", null],
  ["radiogroup", null],
  ["range", null],
  ["region", null],
  ["roletype", null],
  ["row", null],
  ["rowgroup", null],
  ["rowheader", null],
  ["scrollbar", null],
  ["search", null],
  ["searchbox", null],
  ["section", null],
  ["sectionhead", null],
  ["select", null],
  ["separator", null],
  ["slider", null],
  ["spinbutton", null],
  ["status", null],
  ["strong", null],
  ["structure", null],
  ["subscript", null],
  ["superscript", null],
  ["switch", null],
  ["tab", null],
  ["table", null],
  ["tablist", null],
  ["tabpanel", null],
  ["term", null],
  ["textbox", null],
  ["time", null],
  ["timer", null],
  ["toolbar", null],
  ["tooltip", null],
  ["tree", null],
  ["treegrid", null],
  ["treeitem", null],
  ["widget", null],
  ["window", null],
  ["doc-abstract", null],
  ["doc-acknowledgments", null],
  ["doc-afterword", null],
  ["doc-appendix", null],
  ["doc-backlink", null],
  ["doc-biblioentry", null],
  ["doc-bibliography", null],
  ["doc-biblioref", null],
  ["doc-chapter", null],
  ["doc-colophon", null],
  ["doc-conclusion", null],
  ["doc-cover", null],
  ["doc-credit", null],
  ["doc-credits", null],
  ["doc-dedication", null],
  ["doc-endnote", null],
  ["doc-endnotes", null],
  ["doc-epigraph", null],
  ["doc-epilogue", null],
  ["doc-errata", null],
  ["doc-example", null],
  ["doc-footnote", null],
  ["doc-foreword", null],
  ["doc-glossary", null],
  ["doc-glossref", null],
  ["doc-index", null],
  ["doc-introduction", null],
  ["doc-noteref", null],
  ["doc-notice", null],
  ["doc-pagebreak", null],
  ["doc-pagefooter", null],
  ["doc-pageheader", null],
  ["doc-pagelist", null],
  ["doc-part", null],
  ["doc-preface", null],
  ["doc-prologue", null],
  ["doc-pullquote", null],
  ["doc-qna", null],
  ["doc-subtitle", null],
  ["doc-tip", null],
  ["doc-toc", null],
  ["graphics-document", null],
  ["graphics-object", null],
  ["graphics-symbol", null],
];

test('rolesMap API', (t) => {
  t.test('iteration', async (st) => {
    st.notEqual(rolesMap[Symbol.iterator], undefined, 'has an iterator defined');
    st.equal([...rolesMap].length, 139, 'has a specific length');

    st.test('supports the spread operator', async (s2t) => {
      [...rolesMap].forEach(([role, elements]) => {
        const found = entriesList.filter(([r]) => r === role)[0];

        s2t.ok(found, `spread has role: ${role}`);
        s2t.ok(elements && typeof elements === 'object', `spread has object elements`)
      });
    });

    st.test('supports the for..of pattern', async (s2t) => {
      const output = [];
      for (const [key, value] of rolesMap) {
        output.push([key, value]);
      }

      output.forEach(([role, elements]) => {
        const found = entriesList.filter(([r]) => r === role)[0];

        s2t.ok(found, `for-of has role: ${role}`);
        s2t.ok(elements && typeof elements === 'object', `for-of has object elements`)
      });
    });
  });

  t.test('forEach()', async (st) => {
    const output = [];
    let context;
    rolesMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });

    for (let i = 0; i < output.length; i++) {
      const [role, elements] = output[i];
      st.ok(
        entriesList.filter(([r]) => r === role)[0],
        `\`forEach\` has role: ${role}`
      );
      st.ok(elements && typeof elements === 'object', `\`forEach\` has object elements`)
    }
  });

  t.test('get()', (st) => {
    st.notEqual(rolesMap.get('roletype'), undefined, 'has a defined role')
    st.equal(rolesMap.get('fake role'), undefined, 'returns undefined for a fake role');

    st.end();
  });

  t.test('has()', (st) => {
    st.equal(rolesMap.has('roletype'), true, 'has a defined role');
    st.equal(rolesMap.has('fake role'), false, 'returns false for a fake role');

    st.end();
  });

  t.test('keys(), iteration', async (st) => {
    const entriesKeys = entriesList.map(entry => entry[0]);
    for (const key of rolesMap.keys()) {
      st.ok(entriesKeys.filter((k) => k === key)[0], `for-of has key: ${key}`);
    }

    [...rolesMap.keys()].forEach(([key]) => {
        st.ok(entriesKeys.filter(([k]) => k === key)[0], `spread has key: ${key}`);
    });
  });

  t.test('values(), iteration', async (st) => {
    for (const values of rolesMap.values()) {
      st.ok(values && typeof values === 'object', `for-of has object values: ${inspect(values)}`);
    }

    [...rolesMap.values()].forEach((values) => {
      st.ok(values && typeof values === 'object', `spread has object values: ${inspect(values)}`);
    });
  });

  t.test('props and ariaPropsMap', (st) => {
    const roles = rolesMap.entries();

    for (const [role, definition] of roles) {
      const unknownProps = Object.keys(definition.props).filter(prop => !ariaPropsMap.has(prop));
      st.deepEqual(unknownProps, [], `${role}: no unknown props`);
    }

    st.end();
  });

  // dpub-aria
  t.test('doc-abstract role', (st) => {
    const { props } = rolesMap.get('doc-abstract');

    st.notOk('aria-describedat' in props, 'does not have aria-describedat property');
    st.equal(props['aria-details'], null, 'has aria-details property');

    st.end();
  });

  t.end();
});
