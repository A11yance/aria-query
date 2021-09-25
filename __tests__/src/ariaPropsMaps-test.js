import expect from 'expect';
import ariaPropsMap from '../../src/ariaPropsMap';
import rolesMap from '../../src/rolesMap';

describe('ariaPropsMap', function () {
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
  for (let i =0; i < ariaPropsMap.length; i++) {
    const prop = ariaPropsMap[i][0];
    describe(prop, function() {
      it('should be used in at least one role definition', function() {
        expect(usedProps.find(p => p === prop)).toBeDefined();
      });
    });
  }
});
