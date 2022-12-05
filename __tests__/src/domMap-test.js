import expect from 'expect';
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

describe('domMap API', function () {
  describe('entries()', function () {
    test.each(domMap.entries())(`Testing role: '%s' with defintion %o`, (role, definition) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, definition]]),
      );
    });
    test.each([...domMap.entries()])(`Testing role: '%s'`, (role, definition) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, definition]]),
      );
    });
  });
  describe('forEach()', function () {
    const output = [];
    let context;
    domMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });
    test.each(output)(`Testing role: '%s'`, (role, definition) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, definition]]),
      );
    });
    test.each(context)(`Testing role: '%s'`, (role, definition) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[role, definition]]),
      );
    });
  });
  it('get()', function () {
    expect(domMap.get('a')).toBeDefined();
    expect(domMap.get('fake element')).toBeUndefined();
  });
  it('has()', function () {
    expect(domMap.has('a')).toEqual(true);
    expect(domMap.has('fake element')).toEqual(false);
  });
  describe('keys()', function () {
    const entriesKeys = entriesList.map(entry => entry[0]);
    test.each(domMap.keys())('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
    test.each([...domMap.keys()])('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
  });
  describe('values()', function () {
    const entriesValues = entriesList.map(entry => entry[1]);
    test.each(domMap.values().map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
    test.each([...domMap.values()].map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
  });
});

describe('domMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(domMap[Symbol.iterator]).not.toBeUndefined();
    });
    describe('spread operator', function () {
      it('should have a specific length', function () {
        expect([...domMap].length).toEqual(129);
      });
      test.each([...domMap])('Testing element: %o', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
    describe('for..of pattern', function () {
      const output = [];
      for (const [key, value] of domMap) {
        output.push([key, value]);
      }
      test.each(output)('Testing element: %o', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
  });
});
