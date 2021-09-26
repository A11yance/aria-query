import expect from 'expect';
import rolesMap from '../../src/rolesMap';
import ariaPropsMap from '../../src/ariaPropsMap';

describe('rolesMap API', function () {
  it('entries', function () {
    expect(rolesMap.entries().length).toEqual(133);
  });
  it('get', function () {
    expect(rolesMap.get('roletype')).toBeDefined();
    expect(rolesMap.get('fake role')).toBeUndefined();
  });
  it('has', function () {
    expect(rolesMap.has('roletype')).toEqual(true);
    expect(rolesMap.has('fake role')).toEqual(false);
  });
  it('keys', function () {
    expect(rolesMap.keys().length).toEqual(133);
  });
  it('values', function () {
    expect(rolesMap.values().length).toEqual(133);
  });
});

describe('rolesMap', function () {
  const roles = rolesMap.entries();
  test.each(roles)(
    'The definition for role %s has only props defined in ariaPropsMap',
    (role, definition) => {
      const unknownProps = Object.keys(definition.props).filter(
        prop => !ariaPropsMap.has(prop)
      );
      expect(unknownProps.length).toEqual(0);
    }
  );

  describe('content', function () {
    it('should have specific entries', function () {
      expect(rolesMap.entries()).toEqual(
        expect.arrayContaining(
          [
            ["command", expect.any(Object)],
            ["composite", expect.any(Object)],
            ["input", expect.any(Object)],
            ["landmark", expect.any(Object)],
            ["range", expect.any(Object)],
            ["roletype", expect.any(Object)],
            ["section", expect.any(Object)],
            ["sectionhead", expect.any(Object)],
            ["select", expect.any(Object)],
            ["structure", expect.any(Object)],
            ["widget", expect.any(Object)],
            ["window", expect.any(Object)],
            ["alert", expect.any(Object)],
            ["alertdialog", expect.any(Object)],
            ["application", expect.any(Object)],
            ["article", expect.any(Object)],
            ["banner", expect.any(Object)],
            ["blockquote", expect.any(Object)],
            ["button", expect.any(Object)],
            ["caption", expect.any(Object)],
            ["cell", expect.any(Object)],
            ["checkbox", expect.any(Object)],
            ["code", expect.any(Object)],
            ["columnheader", expect.any(Object)],
            ["combobox", expect.any(Object)],
            ["complementary", expect.any(Object)],
            ["contentinfo", expect.any(Object)],
            ["definition", expect.any(Object)],
            ["deletion", expect.any(Object)],
            ["dialog", expect.any(Object)],
            ["directory", expect.any(Object)],
            ["document", expect.any(Object)],
            ["emphasis", expect.any(Object)],
            ["feed", expect.any(Object)],
            ["figure", expect.any(Object)],
            ["form", expect.any(Object)],
            ["generic", expect.any(Object)],
            ["grid", expect.any(Object)],
            ["gridcell", expect.any(Object)],
            ["group", expect.any(Object)],
            ["heading", expect.any(Object)],
            ["img", expect.any(Object)],
            ["insertion", expect.any(Object)],
            ["link", expect.any(Object)],
            ["list", expect.any(Object)],
            ["listbox", expect.any(Object)],
            ["listitem", expect.any(Object)],
            ["log", expect.any(Object)],
            ["main", expect.any(Object)],
            ["marquee", expect.any(Object)],
            ["math", expect.any(Object)],
            ["menu", expect.any(Object)],
            ["menubar", expect.any(Object)],
            ["menuitem", expect.any(Object)],
            ["menuitemcheckbox", expect.any(Object)],
            ["menuitemradio", expect.any(Object)],
            ["meter", expect.any(Object)],
            ["navigation", expect.any(Object)],
            ["none", expect.any(Object)],
            ["note", expect.any(Object)],
            ["option", expect.any(Object)],
            ["paragraph", expect.any(Object)],
            ["presentation", expect.any(Object)],
            ["progressbar", expect.any(Object)],
            ["radio", expect.any(Object)],
            ["radiogroup", expect.any(Object)],
            ["region", expect.any(Object)],
            ["row", expect.any(Object)],
            ["rowgroup", expect.any(Object)],
            ["rowheader", expect.any(Object)],
            ["scrollbar", expect.any(Object)],
            ["search", expect.any(Object)],
            ["searchbox", expect.any(Object)],
            ["separator", expect.any(Object)],
            ["slider", expect.any(Object)],
            ["spinbutton", expect.any(Object)],
            ["status", expect.any(Object)],
            ["strong", expect.any(Object)],
            ["subscript", expect.any(Object)],
            ["superscript", expect.any(Object)],
            ["switch", expect.any(Object)],
            ["tab", expect.any(Object)],
            ["table", expect.any(Object)],
            ["tablist", expect.any(Object)],
            ["tabpanel", expect.any(Object)],
            ["term", expect.any(Object)],
            ["textbox", expect.any(Object)],
            ["time", expect.any(Object)],
            ["timer", expect.any(Object)],
            ["toolbar", expect.any(Object)],
            ["tooltip", expect.any(Object)],
            ["tree", expect.any(Object)],
            ["treegrid", expect.any(Object)],
            ["treeitem", expect.any(Object)],
            ["doc-abstract", expect.any(Object)],
            ["doc-acknowledgments", expect.any(Object)],
            ["doc-afterword", expect.any(Object)],
            ["doc-appendix", expect.any(Object)],
            ["doc-backlink", expect.any(Object)],
            ["doc-biblioentry", expect.any(Object)],
            ["doc-bibliography", expect.any(Object)],
            ["doc-biblioref", expect.any(Object)],
            ["doc-chapter", expect.any(Object)],
            ["doc-colophon", expect.any(Object)],
            ["doc-conclusion", expect.any(Object)],
            ["doc-cover", expect.any(Object)],
            ["doc-credit", expect.any(Object)],
            ["doc-credits", expect.any(Object)],
            ["doc-dedication", expect.any(Object)],
            ["doc-endnote", expect.any(Object)],
            ["doc-endnotes", expect.any(Object)],
            ["doc-epigraph", expect.any(Object)],
            ["doc-epilogue", expect.any(Object)],
            ["doc-errata", expect.any(Object)],
            ["doc-example", expect.any(Object)],
            ["doc-footnote", expect.any(Object)],
            ["doc-foreword", expect.any(Object)],
            ["doc-glossary", expect.any(Object)],
            ["doc-glossref", expect.any(Object)],
            ["doc-index", expect.any(Object)],
            ["doc-introduction", expect.any(Object)],
            ["doc-noteref", expect.any(Object)],
            ["doc-notice", expect.any(Object)],
            ["doc-pagebreak", expect.any(Object)],
            ["doc-pagelist", expect.any(Object)],
            ["doc-part", expect.any(Object)],
            ["doc-preface", expect.any(Object)],
            ["doc-prologue", expect.any(Object)],
            ["doc-pullquote", expect.any(Object)],
            ["doc-qna", expect.any(Object)],
            ["doc-subtitle", expect.any(Object)],
            ["doc-tip", expect.any(Object)],
            ["doc-toc", expect.any(Object)]
          ]
        )
      );
    });
    it('it should have specific keys', function () {
      expect(rolesMap.keys()).toEqual(
        expect.arrayContaining(
          [
            "command",
            "composite",
            "input",
            "landmark",
            "range",
            "roletype",
            "section",
            "sectionhead",
            "select",
            "structure",
            "widget",
            "window",
            "alert",
            "alertdialog",
            "application",
            "article",
            "banner",
            "blockquote",
            "button",
            "caption",
            "cell",
            "checkbox",
            "code",
            "columnheader",
            "combobox",
            "complementary",
            "contentinfo",
            "definition",
            "deletion",
            "dialog",
            "directory",
            "document",
            "emphasis",
            "feed",
            "figure",
            "form",
            "generic",
            "grid",
            "gridcell",
            "group",
            "heading",
            "img",
            "insertion",
            "link",
            "list",
            "listbox",
            "listitem",
            "log",
            "main",
            "marquee",
            "math",
            "menu",
            "menubar",
            "menuitem",
            "menuitemcheckbox",
            "menuitemradio",
            "meter",
            "navigation",
            "none",
            "note",
            "option",
            "paragraph",
            "presentation",
            "progressbar",
            "radio",
            "radiogroup",
            "region",
            "row",
            "rowgroup",
            "rowheader",
            "scrollbar",
            "search",
            "searchbox",
            "separator",
            "slider",
            "spinbutton",
            "status",
            "strong",
            "subscript",
            "superscript",
            "switch",
            "tab",
            "table",
            "tablist",
            "tabpanel",
            "term",
            "textbox",
            "time",
            "timer",
            "toolbar",
            "tooltip",
            "tree",
            "treegrid",
            "treeitem",
            "doc-abstract",
            "doc-acknowledgments",
            "doc-afterword",
            "doc-appendix",
            "doc-backlink",
            "doc-biblioentry",
            "doc-bibliography",
            "doc-biblioref",
            "doc-chapter",
            "doc-colophon",
            "doc-conclusion",
            "doc-cover",
            "doc-credit",
            "doc-credits",
            "doc-dedication",
            "doc-endnote",
            "doc-endnotes",
            "doc-epigraph",
            "doc-epilogue",
            "doc-errata",
            "doc-example",
            "doc-footnote",
            "doc-foreword",
            "doc-glossary",
            "doc-glossref",
            "doc-index",
            "doc-introduction",
            "doc-noteref",
            "doc-notice",
            "doc-pagebreak",
            "doc-pagelist",
            "doc-part",
            "doc-preface",
            "doc-prologue",
            "doc-pullquote",
            "doc-qna",
            "doc-subtitle",
            "doc-tip",
            "doc-toc"
          ]
        )
      );
    });
  });
  // dpub-aria
  describe('doc-abstract role', function () {
    const abstract = rolesMap.get('doc-abstract');
    const { props } = abstract;

    it('should not have aria-describedat property', function () {
      expect(props).not.toHaveProperty('aria-describedat');
    });

    it('should have aria-details property', function () {
      expect(props).toEqual(expect.objectContaining({ 'aria-details': null }));
    });
  });
});
