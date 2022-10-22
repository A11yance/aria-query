/**
 * @flow
 */

import iterationDecorator from "./util/iterationDecorator";

type ARIAPropertyDefinitionTuple = [ARIAProperty, ARIAPropertyDefinition];
type ARIAPropertyDefinitions = Array<ARIAPropertyDefinitionTuple>;

const properties: ARIAPropertyDefinitions = [
  ['aria-activedescendant', {
    'type': 'id'
  }],
  ['aria-atomic', {
    'type': 'boolean'
  }],
  ['aria-autocomplete', {
    'type': 'token',
    'values': [
      'inline',
      'list',
      'both',
      'none'
    ]
  }],
  ['aria-busy', {
    'type': 'boolean'
  }],
  ['aria-checked', {
    'type': 'tristate'
  }],
  ['aria-colcount', {
    type: 'integer',
  }],
  ['aria-colindex', {
    type: 'integer',
  }],
  ['aria-colspan', {
    type: 'integer',
  }],
  ['aria-controls', {
    'type': 'idlist'
  }],
  ['aria-current', {
    type: 'token',
    values: [
      'page',
      'step',
      'location',
      'date',
      'time',
      true,
      false,
    ],
  }],
  ['aria-describedby', {
    'type': 'idlist'
  }],
  ['aria-details', {
    'type': 'id'
  }],
  ['aria-disabled', {
    'type': 'boolean'
  }],
  ['aria-dropeffect', {
    'type': 'tokenlist',
    'values': [
      'copy',
      'execute',
      'link',
      'move',
      'none',
      'popup'
    ]
  }],
  ['aria-errormessage', {
    'type': 'id'
  }],
  ['aria-expanded', {
    'type': 'boolean',
    'allowundefined': true
  }],
  ['aria-flowto', {
    'type': 'idlist'
  }],
  ['aria-grabbed', {
    'type': 'boolean',
    'allowundefined': true
  }],
  ['aria-haspopup', {
    'type': 'token',
    'values': [
      false,
      true,
      'menu',
      'listbox',
      'tree',
      'grid',
      'dialog'
    ]
  }],
  ['aria-hidden', {
    'type': 'boolean',
    'allowundefined': true
  }],
  ['aria-invalid', {
    'type': 'token',
    'values': [
      'grammar',
      false,
      'spelling',
      true
    ]
  }],
  ['aria-keyshortcuts', {
    type: 'string',
  }],
  ['aria-label', {
    'type': 'string'
  }],
  ['aria-labelledby', {
    'type': 'idlist'
  }],
  ['aria-level', {
    'type': 'integer'
  }],
  ['aria-live', {
    'type': 'token',
    'values': [
      'assertive',
      'off',
      'polite'
    ]
  }],
  ['aria-modal', {
    type: 'boolean',
  }],
  ['aria-multiline', {
    'type': 'boolean'
  }],
  ['aria-multiselectable', {
    'type': 'boolean'
  }],
  ['aria-orientation', {
    'type': 'token',
    'values': [
      'vertical',
      'undefined',
      'horizontal'
    ]
  }],
  ['aria-owns', {
    'type': 'idlist'
  }],
  ['aria-placeholder', {
    type: 'string',
  }],
  ['aria-posinset', {
    'type': 'integer'
  }],
  ['aria-pressed', {
    'type': 'tristate'
  }],
  ['aria-readonly', {
    'type': 'boolean'
  }],
  ['aria-relevant', {
    'type': 'tokenlist',
    'values': [
      'additions',
      'all',
      'removals',
      'text',
    ]
  }],
  ['aria-required', {
    'type': 'boolean'
  }],
  ['aria-roledescription', {
    type: 'string',
  }],
  ['aria-rowcount', {
    type: 'integer',
  }],
  ['aria-rowindex', {
    type: 'integer',
  }],
  ['aria-rowspan', {
    type: 'integer',
  }],
  ['aria-selected', {
    'type': 'boolean',
    'allowundefined': true
  }],
  ['aria-setsize', {
    'type': 'integer'
  }],
  ['aria-sort', {
    'type': 'token',
    'values': [
      'ascending',
      'descending',
      'none',
      'other'
    ]
  }],
  ['aria-valuemax', {
    'type': 'number'
  }],
  ['aria-valuemin', {
    'type': 'number'
  }],
  ['aria-valuenow', {
    'type': 'number'
  }],
  ['aria-valuetext', {
    'type': 'string'
  }],
];

const ariaPropsMap: TAriaQueryMap<
  ARIAPropertyDefinitions,
  ARIAProperty,
  ARIAPropertyDefinition,
> = {
  entries: function (): ARIAPropertyDefinitions {
    return properties;
  },
  forEach: function (
    fn: (ARIAPropertyDefinition, ARIAProperty, ARIAPropertyDefinitions) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of properties) {
      fn.call(thisArg, values, key, properties);
    }
  },
  get: function (key: ARIAProperty): ?ARIAPropertyDefinition {
    const item = properties.find(tuple => (tuple[0] === key) ? true : false);
    return item && item[1];
  },
  has: function (key: ARIAProperty): boolean {
    return !!ariaPropsMap.get(key);
  },
  keys: function (): Array<ARIAProperty> {
    return properties.map(([key]) => key);
  },
  values: function (): Array<ARIAPropertyDefinition> {
    return properties.map(([, values]) => values);
  }
};

export default (
  iterationDecorator(
    ariaPropsMap,
    ariaPropsMap.entries(),
  ): TAriaQueryMap<ARIAPropertyDefinitions, ARIAProperty, ARIAPropertyDefinition>
);
