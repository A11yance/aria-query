import expect from 'expect';
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
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "email"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "search"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "tel"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "text"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "url"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "multiple"}, {"name": "size"}], "constraints": ["the multiple attribute and the size attribute do not have a value greater than 1"], "name": "select"}, ["combobox"]],
  [{"constraints": ["scoped to the body element", "scoped to the main element"], "name": "aside"}, ["complementary"]],
  [{"attributes": [{"name": "aria-label"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}, ["complementary"]],
  [{"attributes": [{"name": "aria-labelledby"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}, ["complementary"]],
  [{"constraints": ["scoped to the body element"], "name": "footer"}, ["contentinfo"]],
  [{"name": "dd"}, ["definition"]],
  [{"name": "del"}, ["deletion"]],
  [{"name": "dialog"}, ["dialog"]],
  [{"name": "em"}, ["emphasis"]],
  [{"name": "html"}, ["document"]],
  [{"name": "figure"}, ["figure"]],
  [{"attributes": [{"name": "aria-label"}], "name": "form"}, ["form"]],
  [{"attributes": [{"name": "aria-labelledby"}], "name": "form"}, ["form"]],
  [{"attributes": [{"name": "name"}], "name": "form"}, ["form"]],
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
  [{"constraints": ["ancestor table element has grid role"], "name": "td"}, ["gridcell"]],
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
  [{"name": "img"}, ["img"]],
  [{"name": "ins"}, ["insertion"]],
  [{"attributes": [{"name": "href"}], "name": "a"}, ["link"]],
  [{"attributes": [{"name": "href"}], "name": "area"}, ["link"]],
  [{"name": "menu"}, ["list"]],
  [{"name": "ol"}, ["list"]],
  [{"name": "ul"}, ["list"]],
  [{"attributes": [{"name": "size"}, {"name": "multiple"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"}, ["listbox"]],
  [{"attributes": [{"name": "size"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"}, ["listbox"]],
  [{"attributes": [{"name": "multiple"}], "constraints": ["the multiple attribute value is greater than 1"], "name": "select"}, ["listbox"]],
  [{"attributes": [{"name": "aria-multiselectable", "value": "true"}], "constraints": ["the datalist selection model allows multiple option elements to be selected at a time"], "name": "datalist"}, ["listbox"]],
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
  [{"attributes": [{"name": "aria-label"}], "name": "section"}, ["region"]],
  [{"attributes": [{"name": "aria-labelledby"}], "name": "section"}, ["region"]],
  [{"name": "tr"}, ["row"]],
  [{"name": "tbody"}, ["rowgroup"]],
  [{"constraints": ["ancestor table element has table role"], "name": "td"}, ["cell"]],
  [{"name": "tfoot"}, ["rowgroup"]],
  [{"name": "thead"}, ["rowgroup"]],
  [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}, ["rowheader"]],
  [{"attributes": [{"name": "scope", "value": "rowgroup"}], "name": "th"}, ["rowheader"]],
  [{"attributes": [{"name": "type", "value": "search"}], "name": "input"}, ["searchbox"]],
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
  [{"name": "input"}, ["textbox"]],
  [{"attributes": [{"name": "type", "value": "email"}], "name": "input"}, ["textbox"]],
  [{"attributes": [{"name": "type", "value": "tel"}], "name": "input"}, ["textbox"]],
  [{"attributes": [{"name": "type", "value": "text"}], "name": "input"}, ["textbox"]],
  [{"attributes": [{"name": "type", "value": "url"}], "name": "input"}, ["textbox"]],
  [{"name": "textarea"}, ["textbox"]],
  [{"name": "time"}, ["time"]],
];

describe('elementRoleMap API', function () {
  describe('entries()', function () {
    test.each(elementRoleMap.entries())('Testing element: %o', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
    test.each([...elementRoleMap.entries()])('Testing element: %o', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
  });
  describe('forEach()', function () {
    const output = [];
    let context;
    elementRoleMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });
    test.each(output)('Testing element: %o', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
    test.each(context)('Testing element: %o', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
  });
  it('get()', function () {
    expect(elementRoleMap.get({"name": "article"})).toEqual(["article"]);
    expect(elementRoleMap.get({"name": "header"})).toEqual(["banner", "generic"]);
    expect(elementRoleMap.get({"constraints": ["scoped to the body element"], "name": "header"})).toEqual(["banner"]);
    expect(elementRoleMap.get({"name": "blockquote"})).toEqual(["blockquote"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "button"}], "name": "input"})).toEqual(["button"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "image"}], "name": "input"})).toEqual(["button"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "reset"}], "name": "input"})).toEqual(["button"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "submit"}], "name": "input"})).toEqual(["button"]);
    expect(elementRoleMap.get({"name": "button"})).toEqual(["button"]);
    expect(elementRoleMap.get({"name": "caption"})).toEqual(["caption"]);
    expect(elementRoleMap.get({"constraints": ["ancestor table element has table role"], "name": "td"})).toEqual(["cell"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"})).toEqual(["checkbox"]);
    expect(elementRoleMap.get({"name": "code"})).toEqual(["code"]);
    expect(elementRoleMap.get({"name": "th"})).toEqual(["columnheader"]);
    expect(elementRoleMap.get({"attributes": [{"name": "scope", "value": "col"}], "name": "th"})).toEqual(["columnheader"]);
    expect(elementRoleMap.get({"attributes": [{"name": "scope", "value": "colgroup"}], "name": "th"})).toEqual(["columnheader"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "email"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "search"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "tel"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "text"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "url"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "multiple"}, {"name": "size"}], "name": "select"})).toEqual(["combobox", "listbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "multiple"}, {"name": "size"}], "constraints": ["the multiple attribute and the size attribute do not have a value greater than 1"], "name": "select"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-label"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"})).toEqual(["complementary"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-labelledby"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"})).toEqual(["complementary"]);
    expect(elementRoleMap.get({"name": "footer"})).toEqual(["contentinfo", "generic"]);
    expect(elementRoleMap.get({"constraints": ["scoped to the body element"], "name": "footer"})).toEqual(["contentinfo"]);
    expect(elementRoleMap.get({"name": "dd"})).toEqual(["definition"]);
    expect(elementRoleMap.get({"name": "del"})).toEqual(["deletion"]);
    expect(elementRoleMap.get({"name": "dialog"})).toEqual(["dialog"]);
    expect(elementRoleMap.get({"name": "em"})).toEqual(["emphasis"]);
    expect(elementRoleMap.get({"name": "html"})).toEqual(["document"]);
    expect(elementRoleMap.get({"name": "figure"})).toEqual(["figure"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-label"}], "name": "form"})).toEqual(["form"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-labelledby"}], "name": "form"})).toEqual(["form"]);
    expect(elementRoleMap.get({"attributes": [{"name": "name"}], "name": "form"})).toEqual(["form"]);
    expect(elementRoleMap.get({"name": "a"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "area"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "aside"})).toEqual(["complementary", "generic"]);
    expect(elementRoleMap.get({"name": "b"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "bdo"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "body"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "data"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "div"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "footer"})).toEqual(["contentinfo", "generic"]);
    expect(elementRoleMap.get({"constraints": ["scoped to the main element"], "name": "footer"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"constraints": ["scoped to a sectioning content element"], "name": "footer"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"constraints": ["scoped to a sectioning root element other than body"], "name": "footer"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "footer"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "header"})).toEqual(["banner", "generic"]);
    expect(elementRoleMap.get({"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "header"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "hgroup"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "i"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "pre"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "q"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "samp"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "section"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "small"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "span"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"name": "u"})).toEqual(["generic"]);
    expect(elementRoleMap.get({"constraints": ["ancestor table element has grid role"], "name": "td"})).toEqual(["gridcell"]);
    expect(elementRoleMap.get({"name": "details"})).toEqual(["group"]);
    expect(elementRoleMap.get({"name": "fieldset"})).toEqual(["group"]);
    expect(elementRoleMap.get({"name": "optgroup"})).toEqual(["group"]);
    expect(elementRoleMap.get({"name": "address"})).toEqual(["group"]);
    expect(elementRoleMap.get({"name": "h1"})).toEqual(["heading"]);
    expect(elementRoleMap.get({"name": "h2"})).toEqual(["heading"]);
    expect(elementRoleMap.get({"name": "h3"})).toEqual(["heading"]);
    expect(elementRoleMap.get({"name": "h4"})).toEqual(["heading"]);
    expect(elementRoleMap.get({"name": "h5"})).toEqual(["heading"]);
    expect(elementRoleMap.get({"name": "h6"})).toEqual(["heading"]);
    expect(elementRoleMap.get({"name": "img"})).toEqual(["img"]);
    expect(elementRoleMap.get({"name": "ins"})).toEqual(["insertion"]);
    expect(elementRoleMap.get({"attributes": [{"name": "href"}], "name": "a"})).toEqual(["link"]);
    expect(elementRoleMap.get({"attributes": [{"name": "href"}], "name": "area"})).toEqual(["link"]);
    expect(elementRoleMap.get({"name": "menu"})).toEqual(["list"]);
    expect(elementRoleMap.get({"name": "ol"})).toEqual(["list"]);
    expect(elementRoleMap.get({"name": "ul"})).toEqual(["list"]);
    expect(elementRoleMap.get({"attributes": [{"name": "size"}, {"name": "multiple"}], "name": "select"})).toEqual(["combobox", "listbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "size"}, {"name": "multiple"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"})).toEqual(["listbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "size"}], "name": "select"})).toEqual(["listbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "size"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"})).toEqual(["listbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "multiple"}], "name": "select"})).toEqual(["listbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "multiple"}], "constraints": ["the multiple attribute value is greater than 1"], "name": "select"})).toEqual(["listbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-multiselectable", "value": "true"}], "constraints": ["the datalist selection model allows multiple option elements to be selected at a time"], "name": "datalist"})).toEqual(["listbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-multiselectable", "value": "false"}], "name": "datalist"})).toEqual(["listbox"]);
    expect(elementRoleMap.get({"constraints": ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"], "name": "li"})).toEqual(["listitem"]);
    expect(elementRoleMap.get({"name": "main"})).toEqual(["main"]);
    expect(elementRoleMap.get({"name": "mark"})).toEqual(["mark"]);
    expect(elementRoleMap.get({"name": "math"})).toEqual(["math"]);
    expect(elementRoleMap.get({"name": "meter"})).toEqual(["meter"]);
    expect(elementRoleMap.get({"name": "nav"})).toEqual(["navigation"]);
    expect(elementRoleMap.get({"name": "option"})).toEqual(["option"]);
    expect(elementRoleMap.get({"name": "p"})).toEqual(["paragraph"]);
    expect(elementRoleMap.get({"attributes": [{"name": "alt", "value": ""}], "name": "img"})).toEqual(["presentation"]);
    expect(elementRoleMap.get({"name": "progress"})).toEqual(["progressbar"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-valuemax"}, {"name": "aria-valuemin", "value": 0}, {"name": "aria-valuenow"}], "constraints": ["the progress bar is determinate"],"name": "progress"})).toEqual(["progressbar"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "radio"}], "name": "input"})).toEqual(["radio"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-label"}], "name": "section"})).toEqual(["section", "region"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-labelledby"}], "name": "section"})).toEqual(["section", "region"]);
    expect(elementRoleMap.get({"name": "tr"})).toEqual(["row"]);
    expect(elementRoleMap.get({"name": "tbody"})).toEqual(["rowgroup"]);
    expect(elementRoleMap.get({"name": "td"})).toEqual(["cell", "gridcell"]);
    expect(elementRoleMap.get({"constraints": ["ancestor table element has table role"], "name": "td"})).toEqual(["cell"]);
    expect(elementRoleMap.get({"name": "tfoot"})).toEqual(["rowgroup"]);
    expect(elementRoleMap.get({"name": "thead"})).toEqual(["rowgroup"]);
    expect(elementRoleMap.get({"attributes": [{"name": "scope", "value": "row"}], "name": "th"})).toEqual(["rowheader"]);
    expect(elementRoleMap.get({"attributes": [{"name": "scope", "value": "rowgroup"}], "name": "th"})).toEqual(["rowheader"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "search"}], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "search"}], "name": "input"})).toEqual(["searchbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-label"}], "name": "section"})).toEqual(["section", "region"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-labelledby"}], "name": "section"})).toEqual(["section", "region"]);
    expect(elementRoleMap.get({"name": "hr"})).toEqual(["separator"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "range"}], "name": "input"})).toEqual(["slider"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "number"}], "name": "input"})).toEqual(["spinbutton"]);
    expect(elementRoleMap.get({"name": "output"})).toEqual(["status"]);
    expect(elementRoleMap.get({"name": "strong"})).toEqual(["strong"]);
    expect(elementRoleMap.get({"name": "sub"})).toEqual(["subscript"]);
    expect(elementRoleMap.get({"name": "sup"})).toEqual(["superscript"]);
    expect(elementRoleMap.get({"attributes": [{"name": "aria-checked"}], "name": "button"})).toEqual(["switch"]);
    expect(elementRoleMap.get({"name": "table"})).toEqual(["table"]);
    expect(elementRoleMap.get({"name": "dfn"})).toEqual(["term"]);
    expect(elementRoleMap.get({"name": "dt"})).toEqual(["term"]);
    expect(elementRoleMap.get({"name": "input"})).toEqual(["textbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "list"}, {"name": "type", "value": "email"}], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "email"}], "name": "input"})).toEqual(["textbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "list"}, {"name": "type", "value": "tel"}], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "tel"}], "name": "input"})).toEqual(["textbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "list"}, {"name": "type", "value": "text"}], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "text"}], "name": "input"})).toEqual(["textbox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "list"}, {"name": "type", "value": "url"}], "name": "input"})).toEqual(["combobox"]);
    expect(elementRoleMap.get({"attributes": [{"name": "type", "value": "url"}], "name": "input"})).toEqual(["textbox"]);
    expect(elementRoleMap.get({"name": "textarea"})).toEqual(["textbox"]);
    expect(elementRoleMap.get({"name": "time"})).toEqual(["time"]);
    expect(elementRoleMap.get({
      attributes: {
        name: 'fake attribute',
      },
      name: 'fake element',
    })).toBeUndefined();
  });
  it('has()', function () {
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
  describe('keys()', function () {
    const entriesKeys = entriesList.map(entry => entry[0]);
    test.each(elementRoleMap.keys())('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
    test.each([...elementRoleMap.keys()])('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
  });
  describe('values()', function () {
    const entriesValues = entriesList.map(entry => entry[1]);
    test.each(elementRoleMap.values().map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
    test.each([...elementRoleMap.values()].map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
  });
});

describe('elementRolesMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(elementRoleMap[Symbol.iterator]).not.toBeUndefined();
    });
    describe('spread operator', function () {
      it('should have a specific length', function () {
        expect([...elementRoleMap].length).toEqual(118);
      });
      test.each([...elementRoleMap])('Testing element: %o', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
    describe('for..of pattern', function () {
      const output = [];
      for (const [key, value] of elementRoleMap) {
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
