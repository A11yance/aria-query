import expect from 'expect';
import elementRoleMap from '../../src/elementRoleMap';

describe('elementRoleMap API', function () {
  it('entries', function () {
    expect(elementRoleMap.entries().length).toEqual(88);
  });
  it('get', function () {
    expect(elementRoleMap.get({
      attributes: [
        { name: 'href' }
      ],
      name: 'a'
    })).toBeDefined();
    expect(elementRoleMap.get({
      attributes: {
        name: 'fake attribute',
      },
      name: 'fake element',
    })).toBeUndefined();
  });
  it('has', function () {
    expect(elementRoleMap.has({
      attributes: [
        { name: 'href' }
      ],
      name: 'a'
    })).toEqual(true);
    expect(elementRoleMap.has({
      attributes: {
        name: 'fake attribute',
      },
      name: 'fake element',
    })).toEqual(false);
  });
  it('keys', function () {
    expect(elementRoleMap.keys().length).toEqual(88);
  });
  it('values', function () {
    expect(elementRoleMap.values().length).toEqual(88);
  });
});

describe('elementRolesMap', function () {
  it('should have specific items', function () {
    expect(elementRoleMap.entries()).toEqual(
      expect.arrayContaining(
        [
          [{"name": "menuitem"}, ["command", "menuitem"]],
          [{"name": "rel"}, ["roletype"]],
          [{"name": "article"}, ["article"]],
          [{"constraints": ["direct descendant of document"], "name": "header"}, ["banner"]],
          [{"attributes": [{"constraints": ["set"], "name": "aria-pressed"}, {"name": "type", "value": "checkbox"}], "name": "input"}, ["button"]],
          [{"attributes": [{"name": "aria-expanded", "value": "false"}], "name": "summary"}, ["button"]],
          [{"attributes": [{"name": "aria-expanded", "value": "true"}], "constraints": ["direct descendant of details element with the open attribute defined"], "name": "summary"}, ["button"]],
          [{"attributes": [{"name": "type", "value": "button"}], "name": "input"}, ["button"]],
          [{"attributes": [{"name": "type", "value": "image"}], "name": "input"}, ["button"]],
          [{"attributes": [{"name": "type", "value": "reset"}], "name": "input"}, ["button"]],
          [{"attributes": [{"name": "type", "value": "submit"}], "name": "input"}, ["button"]],
          [{"name": "button"}, ["button"]],
          [{"constraints": ["descendant of table"], "name": "td"}, ["cell"]],
          [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}, ["checkbox"]],
          [{"name": "th"}, ["columnheader"]],
          [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "email"}], "name": "input"}, ["combobox"]],
          [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "search"}], "name": "input"}, ["combobox"]],
          [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "tel"}], "name": "input"}, ["combobox"]],
          [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "text"}], "name": "input"}, ["combobox"]],
          [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "url"}], "name": "input"}, ["combobox"]],
          [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "url"}], "name": "input"}, ["combobox"]],
          [{"attributes": [{"constraints": ["undefined"], "name": "multiple"}, {"constraints": ["undefined"], "name": "size"}], "name": "select"}, ["combobox"]],
          [{"attributes": [{"constraints": ["undefined"], "name": "multiple"}, {"name": "size", "value": 1}], "name": "select"}, ["combobox"]],
          [{"name": "aside"}, ["complementary"]],
          [{"constraints": ["direct descendant of document"], "name": "footer"}, ["contentinfo"]],
          [{"name": "dd"}, ["definition"]],
          [{"name": "dialog"}, ["dialog"]],
          [{"name": "body"}, ["document"]],
          [{"name": "figure"}, ["figure"]],
          [{"attributes": [{"constraints": ["set"], "name": "aria-label"}], "name": "form"}, ["form"]],
          [{"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "name": "form"}, ["form"]],
          [{"attributes": [{"constraints": ["set"], "name": "name"}], "name": "form"}, ["form"]],
          [{"name": "span"}, ["generic"]],
          [{"name": "div"}, ["generic"]],
          [{"attributes": [{"name": "role", "value": "grid"}], "name": "table"}, ["grid"]],
          [{"attributes": [{"name": "role", "value": "gridcell"}], "name": "td"}, ["gridcell"]],
          [{"name": "details"}, ["group"]],
          [{"name": "fieldset"}, ["group"]],
          [{"name": "optgroup"}, ["group"]],
          [{"name": "h1"}, ["heading"]],
          [{"name": "h2"}, ["heading"]],
          [{"name": "h3"}, ["heading"]],
          [{"name": "h4"}, ["heading"]],
          [{"name": "h5"}, ["heading"]],
          [{"name": "h6"}, ["heading"]],
          [{"attributes": [{"constraints": ["set"], "name": "alt"}], "name": "img"}, ["img"]],
          [{"attributes": [{"constraints": ["undefined"], "name": "alt"}], "name": "img"}, ["img"]],
          [{"attributes": [{"name": "href"}], "name": "a"}, ["link"]],
          [{"attributes": [{"name": "href"}], "name": "area"}, ["link"]],
          [{"attributes": [{"name": "href"}], "name": "link"}, ["link"]],
          [{"name": "menu"}, ["list"]],
          [{"name": "ol"}, ["list"]],
          [{"name": "ul"}, ["list"]],
          [{"attributes": [{"constraints": [">1"], "name": "size"}, {"name": "multiple"}], "name": "select"}, ["listbox"]],
          [{"attributes": [{"constraints": [">1"], "name": "size"}], "name": "select"}, ["listbox"]],
          [{"attributes": [{"name": "multiple"}], "name": "select"}, ["listbox"]],
          [{"name": "datalist"}, ["listbox"]],
          [{"constraints": ["direct descendant of ol, ul or menu"], "name": "li"}, ["listitem"]],
          [{"name": "main"}, ["main"]],
          [{"name": "math"}, ["math"]],
          [{"name": "menuitem"}, ["command", "menuitem"]],
          [{"name": "nav"}, ["navigation"]],
          [{"name": "option"}, ["option"]],
          [{"name": "progress"}, ["progressbar"]],
          [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}, ["radio"]],
          [{"attributes": [{"constraints": ["set"], "name": "aria-label"}], "name": "section"}, ["region"]],
          [{"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "name": "section"}, ["region"]],
          [{"name": "frame"}, ["region"]],
          [{"name": "tr"}, ["row"]],
          [{"name": "tbody"}, ["rowgroup"]],
          [{"name": "tfoot"}, ["rowgroup"]],
          [{"name": "thead"}, ["rowgroup"]],
          [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}, ["rowheader"]],
          [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "search"}], "name": "input"}, ["searchbox"]],
          [{"name": "hr"}, ["separator"]],
          [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}, ["slider"]],
          [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}, ["spinbutton"]],
          [{"name": "output"}, ["status"]],
          [{"name": "table"}, ["table"]],
          [{"name": "dfn"}, ["term"]],
          [{"name": "dt"}, ["term"]],
          [{"attributes": [{"constraints": ["undefined"], "name": "type"}, {"constraints": ["undefined"], "name": "list"}], "name": "input"}, ["textbox"]],
          [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "email"}], "name": "input"}, ["textbox"]],
          [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "tel"}], "name": "input"}, ["textbox"]],
          [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "text"}], "name": "input"}, ["textbox"]],
          [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "url"}], "name": "input"}, ["textbox"]],
          [{"name": "textarea"}, ["textbox"]]
        ]
      )
    );
  });
});
