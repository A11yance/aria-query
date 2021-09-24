import expect from 'expect';
import roleElementMap from '../../src/roleElementMap';

describe('domRolesMap', function () {
  it('should have specific items', function () {
    const entries = roleElementMap.map(entry => [entry[0], Array.from(entry[1])]);
    expect(entries).toEqual(
      expect.arrayContaining(
        [
          ["command", [{"name": "menuitem"}]],
          ["roletype", [{"name": "rel"}]],
          ["article", [{"name": "article"}]],
          ["banner", [{"constraints": ["direct descendant of document"], "name": "header"}]],
          ["button", [{"attributes": [{"constraints": ["set"], "name": "aria-pressed"}, {"name": "type", "value": "checkbox"}], "name": "input"}, {"attributes": [{"name": "aria-expanded", "value": "false"}], "name": "summary"}, {"attributes": [{"name": "aria-expanded", "value": "true"}], "constraints": ["direct descendant of details element with the open attribute defined"], "name": "summary"}, {"attributes": [{"name": "type", "value": "button"}], "name": "input"}, {"attributes": [{"name": "type", "value": "image"}], "name": "input"}, {"attributes": [{"name": "type", "value": "reset"}], "name": "input"}, {"attributes": [{"name": "type", "value": "submit"}], "name": "input"}, {"name": "button"}]],
          ["cell", [{"constraints": ["descendant of table"], "name": "td"}]],
          ["checkbox", [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}]],
          ["columnheader", [{"name": "th"}]],
          ["combobox", [{"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "email"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "search"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "tel"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "text"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "url"}], "name": "input"}, {"attributes": [{"constraints": ["set"], "name": "list"}, {"name": "type", "value": "url"}], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "multiple"}, {"constraints": ["undefined"], "name": "size"}], "name": "select"}, {"attributes": [{"constraints": ["undefined"], "name": "multiple"}, {"name": "size", "value": 1}], "name": "select"}]],
          ["complementary", [{"name": "aside"}]],
          ["contentinfo", [{"constraints": ["direct descendant of document"], "name": "footer"}]],
          ["definition", [{"name": "dd"}]],
          ["dialog", [{"name": "dialog"}]],
          ["document", [{"name": "body"}]],
          ["figure", [{"name": "figure"}]],
          ["form", [{"attributes": [{"constraints": ["set"], "name": "aria-label"}], "name": "form"}, {"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "name": "form"}, {"attributes": [{"constraints": ["set"], "name": "name"}], "name": "form"}]],
          ["generic", [{"name": "span"}, {"name": "div"}]],
          ["grid", [{"attributes": [{"name": "role", "value": "grid"}], "name": "table"}]],
          ["gridcell", [{"attributes": [{"name": "role", "value": "gridcell"}], "name": "td"}]],
          ["group", [{"name": "details"}, {"name": "fieldset"}, {"name": "optgroup"}]],
          ["heading", [{"name": "h1"}, {"name": "h2"}, {"name": "h3"}, {"name": "h4"}, {"name": "h5"}, {"name": "h6"}]],
          ["img", [{"attributes": [{"constraints": ["set"], "name": "alt"}], "name": "img"}, {"attributes": [{"constraints": ["undefined"], "name": "alt"}], "name": "img"}]],
          ["link", [{"attributes": [{"name": "href"}], "name": "a"}, {"attributes": [{"name": "href"}], "name": "area"}, {"attributes": [{"name": "href"}], "name": "link"}]],
          ["list", [{"name": "menu"}, {"name": "ol"}, {"name": "ul"}]],
          ["listbox", [{"attributes": [{"constraints": [">1"], "name": "size"}, {"name": "multiple"}], "name": "select"}, {"attributes": [{"constraints": [">1"], "name": "size"}], "name": "select"}, {"attributes": [{"name": "multiple"}], "name": "select"}, {"name": "datalist"}]],
          ["listitem", [{"constraints": ["direct descendant of ol, ul or menu"], "name": "li"}]],
          ["main", [{"name": "main"}]],
          ["math", [{"name": "math"}]],
          ["menuitem", [{"name": "menuitem"}]],
          ["navigation", [{"name": "nav"}]],
          ["option", [{"name": "option"}]],
          ["progressbar", [{"name": "progress"}]],
          ["radio", [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}]],
          ["region", [{"attributes": [{"constraints": ["set"], "name": "aria-label"}], "name": "section"}, {"attributes": [{"constraints": ["set"], "name": "aria-labelledby"}], "name": "section"}, {"name": "frame"}]],
          ["row", [{"name": "tr"}]],
          ["rowgroup", [{"name": "tbody"}, {"name": "tfoot"}, {"name": "thead"}]],
          ["rowheader", [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}]],
          ["searchbox", [{"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "search"}], "name": "input"}]],
          ["separator", [{"name": "hr"}]],
          ["slider", [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}]],
          ["spinbutton", [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}]],
          ["status", [{"name": "output"}]],
          ["table", [{"name": "table"}]],
          ["term", [{"name": "dfn"}, {"name": "dt"}]],
          ["textbox", [{"attributes": [{"constraints": ["undefined"], "name": "type"}, {"constraints": ["undefined"], "name": "list"}], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "email"}], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "tel"}], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "text"}], "name": "input"}, {"attributes": [{"constraints": ["undefined"], "name": "list"}, {"name": "type", "value": "url"}], "name": "input"}, {"name": "textarea"}]]
        ]
      )
    );
  });
});
