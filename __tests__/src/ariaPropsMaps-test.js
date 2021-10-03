import expect from 'expect';
import ariaPropsMap from '../../src/ariaPropsMap';
import rolesMap from '../../src/rolesMap';

describe('ariaPropsMap API', function () {
  it('entries', function () {
    expect(ariaPropsMap.entries().length).toEqual(48);
  });
  it('get', function () {
    expect(ariaPropsMap.get('aria-label')).toBeDefined();
    expect(ariaPropsMap.get('fake prop')).toBeUndefined();
  });
  it('has', function () {
    expect(ariaPropsMap.has('aria-label')).toEqual(true);
    expect(ariaPropsMap.has('fake prop')).toEqual(false);
  });
  it('keys', function () {
    expect(ariaPropsMap.keys().length).toEqual(48);
  });
  it('values', function () {
    expect(ariaPropsMap.values().length).toEqual(48);
  });
});

describe('ariaPropsMap content', function () {
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
