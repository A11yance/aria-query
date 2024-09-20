import test from 'tape';
import deepEqual from 'deep-equal-json';

import ariaPropsMap from 'aria-query/src/ariaPropsMap';
import rolesMap from 'aria-query/src/rolesMap';

import testIteration from '../helpers/testIteration';
import testForEach from '../helpers/testForEach';

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

test('ariaPropsMap API', (t) => {
  const predicate = (obj, [o]) => deepEqual(o, obj);
  
  testIteration(t, ariaPropsMap, entriesList, 51, predicate);

  testForEach(t, ariaPropsMap, entriesList, predicate);

  t.test('get()', (st) => {
    st.notEqual(ariaPropsMap.get('aria-label'), undefined, 'has a defined prop')
    st.equal(ariaPropsMap.get('fake prop'), undefined, 'returns undefined for a fake prop');

    st.end();
  });

  t.test('has()', (st) => {
    st.equal(ariaPropsMap.has('aria-label'), true, 'has a defined prop');
    st.equal(ariaPropsMap.has('fake prop'), false, 'returns false for a fake prop');

    st.end();
  });

  t.test('props and role defintions', (st) => {
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

    st.end();
  });

  t.end();
});
