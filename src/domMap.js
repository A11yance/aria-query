/**
 * @flow
 */

import domJSON from './etc/dom.json';

type DOMDefinition = {
  reserved?: boolean,
  interactive?: boolean,
};

type MapOfDOMDefinitions = Map<string, DOMDefinition>;

const domMap: MapOfDOMDefinitions = new Map([]);

Object
  .keys(domJSON)
  .reduce(
    (map, key) => map.set(key, (domJSON[key]: DOMDefinition)),
    domMap,
  );

export default domMap;
