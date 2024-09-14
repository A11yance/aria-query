import test from 'tape';
import deepEqual from 'deep-equal-json';
import inspect from 'object-inspect';

import ariaPropsMap from 'aria-query/src/ariaPropsMap';
import rolesMap from 'aria-query/src/rolesMap';

const entriesList = [
  ['aria-activedescendant', {'type': 'id'}],
  ['aria-atomic', {'type': 'boolean'}],
  ['aria-autocomplete', {'type': 'token','values': ['inline','list','both','none']}],
  ["aria-braillelabel", {"type": "string"}],
  ["aria-brailleroledescription", {"type": "string"}],
  ['aria-busy', {'type': 'boolean'}],
  ['aria-checked', {'type': 'tristate'}],
  ['aria-colcount', {type: 'integer',}],
  ['aria-colindex', {type: 'integer',}],
  ['aria-colspan', {type: 'integer',}],
  ['aria-controls', {'type': 'idlist'}],
  ['aria-current', {type: 'token',values: ['page','step','location','date','time',true,false,],}],
  ['aria-describedby', {'type': 'idlist'}],
  ['aria-description', {'type': 'string'}],
  ['aria-details', {'type': 'id'}],
  ['aria-disabled', {'type': 'boolean'}],
  ['aria-dropeffect', {'type': 'tokenlist','values': ['copy','execute','link','move','none','popup']}],
  ['aria-errormessage', {'type': 'id'}],
  ['aria-expanded', {'type': 'boolean','allowundefined': true}],
  ['aria-flowto', {'type': 'idlist'}],
  ['aria-grabbed', {'type': 'boolean','allowundefined': true}],
  ['aria-haspopup', {'type': 'token','values': [false,true,'menu','listbox','tree','grid','dialog']}],
  ['aria-hidden', {'type': 'boolean','allowundefined': true}],
  ['aria-invalid', {'type': 'token','values': ['grammar',false,'spelling',true]}],
  ['aria-keyshortcuts', {type: 'string',}],
  ['aria-label', {'type': 'string'}],
  ['aria-labelledby', {'type': 'idlist'}],
  ['aria-level', {'type': 'integer'}],
  ['aria-live', {'type': 'token','values': ['assertive','off','polite']}],
  ['aria-modal', {type: 'boolean',}],
  ['aria-multiline', {'type': 'boolean'}],
  ['aria-multiselectable', {'type': 'boolean'}],
  ['aria-orientation', {'type': 'token','values': ['vertical','undefined','horizontal']}],
  ['aria-owns', {'type': 'idlist'}],
  ['aria-placeholder', {type: 'string',}],
  ['aria-posinset', {'type': 'integer'}],
  ['aria-pressed', {'type': 'tristate'}],
  ['aria-readonly', {'type': 'boolean'}],
  ['aria-relevant', {'type': 'tokenlist','values': ['additions','all','removals','text',]}],
  ['aria-required', {'type': 'boolean'}],
  ['aria-roledescription', {type: 'string',}],
  ['aria-rowcount', {type: 'integer',}],
  ['aria-rowindex', {type: 'integer',}],
  ['aria-rowspan', {type: 'integer',}],
  ['aria-selected', {'type': 'boolean','allowundefined': true}],
  ['aria-setsize', {'type': 'integer'}],
  ['aria-sort', {'type': 'token','values': ['ascending','descending','none','other']}],
  ['aria-valuemax', {'type': 'number'}],
  ['aria-valuemin', {'type': 'number'}],
  ['aria-valuenow', {'type': 'number'}],
  ['aria-valuetext', {'type': 'string'}],
];

test('ariaPropsMap API', async (t) => {
  t.test('iteration', async (st) => {
    st.notEqual(ariaPropsMap[Symbol.iterator], undefined, 'has an iterator defined');
    st.equal([...ariaPropsMap].length, 51, 'has a specific length');

    st.test('supports the spread operator', async (s2t) => {
      [...ariaPropsMap].forEach(([obj, roles]) => {
        const found = entriesList.filter(([o]) => deepEqual(o, obj))[0];

        s2t.ok(found, `spread has element: ${inspect(obj)}`);
        s2t.deepEqual(roles, found[1], `for-of has object elements`);
      });
    });

    st.test('supports the for..of pattern', async (s2t) => {
      const output = [];
      for (const [key, value] of ariaPropsMap) {
        output.push([key, value]);
      }

      output.forEach(([obj, roles]) => {
        const found = entriesList.filter(([o]) => deepEqual(o, obj))[0];

        s2t.ok(found, `for-of has element: ${inspect(obj)}`);
        s2t.deepEqual(roles, found[1], `for-of has object elements`);
      });
    });
  });

  t.test('forEach()', async (st) => {
    const output = [];
    let context;
    ariaPropsMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });

    for (let i = 0; i < output.length; i++) {
      const [obj, roles] = output[i];
      const found = entriesList.filter(([o]) => deepEqual(o, obj))[0];
      
      st.ok(found, `\`forEach\` has element: ${inspect(obj)}`);
      st.deepEqual(roles, found[1], `\`forEach\` has object elements`);
    }
  });

  t.test('get()', async (st) => {
    st.notEqual(ariaPropsMap.get('aria-label'), undefined, 'has a defined prop')
    st.equal(ariaPropsMap.get('fake prop'), undefined, 'returns undefined for a fake prop');
  });

  t.test('has()', async (st) => {
    st.equal(ariaPropsMap.has('aria-label'), true, 'has a defined prop');
    st.equal(ariaPropsMap.has('fake prop'), false, 'returns false for a fake prop');
  });
  
  t.test('keys(), iteration', async (st) => {
    const entriesKeys = entriesList.map(entry => entry[0]);
    for (const obj of ariaPropsMap.keys()) {
      st.ok(entriesKeys.filter((k) => deepEqual(k, obj))[0], `for-of has key: ${inspect(obj)}`);
    }

    [...ariaPropsMap.keys()].forEach((obj) => {
        st.ok(entriesKeys.filter((k) => deepEqual(k, obj))[0], `spread has key: ${inspect(obj)}`);
    });
  });

  t.test('values(), iteration', async (st) => {
    for (const values of ariaPropsMap.values()) {
      st.ok(entriesList.some(([, x]) => deepEqual(x, values)), `for-of has object values: ${inspect(values)}`);
    }

    [...ariaPropsMap.values()].forEach((values) => {
      st.ok(entriesList.some(([, x]) => deepEqual(x, values)), `spread has object values: ${inspect(values)}`);
    });
  });

  t.test('props and role defintions', async (st) => {
    const usedProps = [];
    for (const roleDefinition of rolesMap.values()) {
      for (const prop of Object.keys(roleDefinition.props)) {
        let isUnique = true;
        for (let i = 0; i < usedProps.length; i++) {
          if (usedProps[i] === prop) {
            isUnique = false;
            break;
          }
        }
        if (isUnique) {
          usedProps.push(prop);
        }
      }
    }

    ariaPropsMap.forEach((value, key) => {
      st.ok(usedProps.filter(p => p === key)[0], `has prop: ${key}`);
    });
  });
});
