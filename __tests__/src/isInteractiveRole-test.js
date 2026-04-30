import test from 'tape';
import isInteractiveRole from 'aria-query/src/isInteractiveRole';

test('isInteractiveRole', (t) => {
  t.test('widget-descended roles are interactive', (st) => {
    const interactiveRoles = [
      'button',
      'checkbox',
      'columnheader',
      'combobox',
      'grid',
      'gridcell',
      'link',
      'listbox',
      'menu',
      'menubar',
      'menuitem',
      'menuitemcheckbox',
      'menuitemradio',
      'option',
      'radio',
      'radiogroup',
      'row',
      'rowheader',
      'scrollbar',
      'searchbox',
      'slider',
      'spinbutton',
      'switch',
      'tab',
      'tablist',
      'textbox',
      'tree',
      'treegrid',
      'treeitem',
    ];
    for (const role of interactiveRoles) {
      st.equal(isInteractiveRole(role), true, `${role} is interactive`);
    }
    st.end();
  });

  t.test('dpub link roles are interactive', (st) => {
    st.equal(isInteractiveRole('doc-backlink'), true, 'doc-backlink is interactive');
    st.equal(isInteractiveRole('doc-biblioref'), true, 'doc-biblioref is interactive');
    st.equal(isInteractiveRole('doc-glossref'), true, 'doc-glossref is interactive');
    st.equal(isInteractiveRole('doc-noteref'), true, 'doc-noteref is interactive');
    st.end();
  });

  t.test('toolbar is interactive (supports aria-activedescendant despite not descending from widget)', (st) => {
    st.equal(isInteractiveRole('toolbar'), true, 'toolbar is interactive');
    st.end();
  });

  t.test('progressbar is not interactive (read-only despite descending from widget)', (st) => {
    st.equal(isInteractiveRole('progressbar'), false, 'progressbar is not interactive');
    st.end();
  });

  t.test('structural and document roles are not interactive', (st) => {
    const nonInteractiveRoles = [
      'alert',
      'article',
      'banner',
      'complementary',
      'contentinfo',
      'definition',
      'dialog',
      'document',
      'feed',
      'figure',
      'form',
      'group',
      'heading',
      'img',
      'list',
      'listitem',
      'log',
      'main',
      'marquee',
      'math',
      'navigation',
      'none',
      'note',
      'presentation',
      'region',
      'separator',
      'status',
      'table',
      'tabpanel',
      'term',
      'timer',
      'tooltip',
    ];
    for (const role of nonInteractiveRoles) {
      st.equal(isInteractiveRole(role), false, `${role} is not interactive`);
    }
    st.end();
  });

  t.test('abstract roles are not interactive', (st) => {
    const abstractRoles = [
      'command',
      'composite',
      'input',
      'landmark',
      'range',
      'roletype',
      'section',
      'sectionhead',
      'select',
      'structure',
      'widget',
      'window',
    ];
    for (const role of abstractRoles) {
      st.equal(isInteractiveRole(role), false, `abstract role ${role} is not interactive`);
    }
    st.end();
  });

  t.test('unknown or invalid roles return false', (st) => {
    st.equal(isInteractiveRole('fake-role'), false, 'unknown role is not interactive');
    st.equal(isInteractiveRole(''), false, 'empty string is not interactive');
    st.end();
  });

  t.end();
});
