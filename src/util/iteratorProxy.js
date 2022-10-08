/**
 * @flow
 */

 function iteratorProxy<T>(): Iterator<T> {
  const values = this;
  let index = 0;
  const iter = {
    '@@iterator': function (): $Iterator<*, *, *> {
      return iter;
    },
    next: function (): IteratorResult<*, *> {
      if (index < values.length) {
        let value = values[index];
        index = index + 1;
        return { done: false, value };
      } else {
        return { done: true };
      }
    },
  };
  return iter;
}
export default iteratorProxy;