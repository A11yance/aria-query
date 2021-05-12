/**
 * @flow
 */

export function convertToMap<V>(mapObject: {[string]: V}): Map<string, V> {
  const map: Map<string, V> = new Map();
  for (const key in mapObject) {
    map.set(key, mapObject[key]);
  }
  return map;
}