import expect from 'expect';
import ariaPropsMap from '../../src/ariaPropsMap';
import rolesMap from '../../src/rolesMap';

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

describe('ariaPropsMap API', function () {
  describe('entries()', function () {
    test.each(ariaPropsMap.entries())('Testing prop: %s', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
    test.each([...ariaPropsMap.entries()])('Testing prop: %s', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
  });
  describe('forEach()', function () {
    const output = [];
    let context;
    ariaPropsMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });
    test.each(output)('Testing prop: %s', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
    test.each(context)('Testing prop: %s', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
  });
  it('get()', function () {
    expect(ariaPropsMap.get('aria-label')).toBeDefined();
    expect(ariaPropsMap.get('fake prop')).toBeUndefined();
  });
  it('has()', function () {
    expect(ariaPropsMap.has('aria-label')).toEqual(true);
    expect(ariaPropsMap.has('fake prop')).toEqual(false);
  });
  describe('keys()', function () {
    const entriesKeys = entriesList.map(entry => entry[0]);
    test.each(ariaPropsMap.keys())('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
    test.each([...ariaPropsMap.keys()])('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
  });
  describe('values()', function () {
    const entriesValues = entriesList.map(entry => entry[1]);
    test.each(ariaPropsMap.values())('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
    test.each([...ariaPropsMap.values()])('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
  });
});

describe('ariaPropsMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(ariaPropsMap[Symbol.iterator]).not.toBeUndefined();
    });
    describe('spread operator', function () {
      it('should have a specific length', function () {
        expect(ariaPropsMap.entries().length).toEqual(51);
      });
      test.each([...ariaPropsMap])('Testing prop: %s', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
    describe('for..of pattern', function () {
      const output = [];
      for (const [key, value] of ariaPropsMap) {
        output.push([key, value]);
      }
      test.each(output)('Testing prop: %s', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
  });
  describe('props and role defintions', function () {
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
    test.each(ariaPropsMap.entries())(
      'The prop %s should be used in at least one role definition',
      (prop) => {
        expect(usedProps.find(p => p === prop)).toBeDefined();
      }
    );
  });
});
