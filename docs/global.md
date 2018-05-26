# [deep-props](https://github.com/jpcx/deep-props/blob/master/README.md).set

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 9](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L9)

### Methods

<a name=".place"></a>
#### (generator, static) place(host, path, data, opt) → \{[deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target)|[deep-props.set~Host](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Host)}

Iterates along the supplied path and shifts a reference point along the way. Sets data to last key in path.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `host` | [deep-props.set~Host](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Host) | Base container dataset to search within. |
| `path` | [deep-props.set~Path](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Path) | Path to desired property. |
| `data` | * | Data to set at endpoint of path. |
| `opt` | [deep-props.set~Options](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Options) | Execution settings. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 331](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L331)

##### Returns:

Returns undefined if search has finished executing or if the desired value has not been found.

Type

undefined

##### Yields:

While exploring existing structures, yields each level explored. While creating new structures, yields new value of Host. Yields Host at end of search.

Type

[deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target) | [deep-props.set~Host](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Host)

<a name=".setWithin"></a>
#### (static) setWithin(target, key, nextKey, depth, isLast, data, opt) → \{[deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target)}

Defines a value within an object at a key. Uses next key along the chain (and options) to determine the type of constructor to be used. If data is provided, sets a value at key.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target) | Current reference to a given level of the path. |
| `key` | [deep-props.set~Key](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Key) | Key to construct within. |
| `nextKey` | [deep-props.set~Key](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Key) | Next key along the path. |
| `depth` | number | Current level of path. |
| `isLast` | boolean | True if end of path has been reached. |
| `data` | * | Data to set within target. |
| `opt` | [deep-props.set~Options](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Options) | Execution settings. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 274](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L274)

##### Returns:

New reference.

Type

[deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target)

<a name=".setWithinMap"></a>
#### (static) setWithinMap(target, key, dataopt)

Sets a value within an Map or WeakMap.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `target` | [deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target) |  | Current reference to a given level of the path. |
| `key` | [deep-props.set~Key](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Key) |  | Key to construct within. |
| `data` | * | \<optional> | Data to set within target at key. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 192](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L192)

<a name=".setWithinSet"></a>
#### (static) setWithinSet(target, key, dataopt)

Sets a value within a Set or WeakSet.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `target` | [deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target) |  | Current reference to a given level of the path. |
| `key` | [deep-props.set~Key](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Key) |  | Key to construct within. |
| `data` | * | \<optional> | Data to set within target at key. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 209](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L209)

<a name=".setWithinStandard"></a>
#### (static) setWithinStandard(target, key, dataopt)

Sets a value within an Object or Array.

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `target` | [deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target) |  | Current reference to a given level of the path. |
| `key` | [deep-props.set~Key](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Key) |  | Key to construct within. |
| `data` | * | \<optional> | Data to set within target at key. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 171](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L171)

### Type Definitions

<a name="~Container"></a>
#### Container

Container object used as a target for child property extraction.

##### Type:

*   Object | Array | Map | WeakMap | Set | WeakSet | [deep-props.set~Custom](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Custom)

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 34](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L34)

<a name="~Custom"></a>
#### Custom

Custom dataset for use as a [Container](#~Container). May be accessed via valid customizer functions.

##### Type:

*   \*

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 11](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L11)

##### Example

```js
(() => {
  class CustomDataStructure {
    constructor(array) {
      this.get = i => array[i]
      this.getValues = () => array
      this.push = x => array.push(x)
    }
  }
  return new CustomDataStructure([ 'foo', 'bar' ])
})()
```

<a name="~GetCustomizer"></a>
#### GetCustomizer(target, key) → \{[deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target)}

Function used for custom handling of entry into next level of the dataset.

*   Allows for extraction from container objects that are not directly supported.
*   Returns new value of Target based on key.
*   Returns undefined if Target is not compatible with the filter.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target) | Current data being analyzed. |
| `key` | [deep-props.set~Key](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Key) | Next key along the path. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 70](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L70)

##### Returns:

Value to pass along to the search function as the next Target. If undefined, will fall back on using standard extraction methods to find the next Target.

Type

[deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target)

##### Example

```js
(target, key) => {
  if (target instanceof ArrayBuffer && target.byteLength === 16) {
    return new Int16Array(target)[key]
  }
}
```

<a name="~Host"></a>
#### Host

A non-primitive [Container](#~Container) which represents the root of a given path.

##### Type:

*   [deep-props.set~Container](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Container)

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 40](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L40)

<a name="~Key"></a>
#### Key

Key used for accessing a child property within a container. When its value is `'__proto__'`, it is used as a stand-in for `Object.getPrototypeOf()`.

##### Type:

*   \*

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 28](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L28)

<a name="~Options"></a>
#### Options

Settings for customizing behaviour.

##### Type:

*   Object

##### Properties:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `gen` | boolean | \<optional> | If true, module returns a generator that yields each search step and returns the final value. |
| `getCustomizer` | [deep-props.set~GetCustomizer](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~GetCustomizer) | \<optional> | Allows for custom extraction. |
| `setCustomizer` | [deep-props.set~SetCustomizer](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~SetCustomizer) | \<optional> | Allows for setting within custom objects. |
| `forceConstructor` | function | \<optional> | Forces a certain constructor to be used instead when creating new structures. |
| `match` | RegExp | \<optional> | Regular expression used for custom key extraction from supplied path string. If supplied, it is used as the only argument for `path.match()`, which should return an array of key names. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 113](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L113)

##### Example

```js
{
  gen: true,
  getCustomizer: (target, key) => {
    if (target instanceof ArrayBuffer && target.byteLength === 16) {
      return new Int16Array(target)[key]
    }
  },
  setCustomizer: (target, key, depth, data) => {
    if (target instanceof ArrayBuffer && target.byteLength === 16) {
      new Int16Array(target)[key] = data
      return true
    }
  },
  forceConstructor: Map,
  match: /[^/]+/g
}
```

<a name="~Path"></a>
#### Path

Instructions that specify which keys should be accessed at each level of the dataset.

*   A nested array `'arr'` with property `arr[0][0] === 'foo'` should be represented as `[0, 0]` or `'[0][0]'`, (or `'0.0'`, etc.) in order to retrieve `'foo'`.
*   A nested object `'nest'` with property `nest.foo.bar === 'baz'` should be represented as either `['foo', 'bar']` or `'foo.bar'` (or `'foo[bar]'`, etc.) in order to retrieve `'baz'`.
*   String paths will be converted to an array of keys based on matches of the following regex: `/[^.[\]]+/g`.
    *   In other words, anything between periods or brackets will be interpreted as keys.
    *   Paths containing any keys that are references (such as WeakMap keys) must be passed as an array, such as `['foo', 'bar', weakMapKey]`
    *   Paths containing any keys with periods or brackets must also be passed as an array, such as `['foo.bar', 'baz[qux]']` (unless a custom match regex is supplied).

##### Type:

*   Array.<[deep-props.set~Key](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Key)> | string

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 141](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L141)

##### Examples

```js
[ 'foo', 'bar', 'baz' ]
```

```js
'foo.bar.baz'
```

```js
'foo[0][0]'
```

<a name="~ResultGenerator"></a>
#### ResultGenerator

Generator object which yields stepwise operation results. While exploring existing structures, yields each value found along the way. During structure creation operations, yields Host after each modification.

##### Type:

*   Object

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 46](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L46)

<a name="~SetCustomizer"></a>
#### SetCustomizer(target, key, depth, data) → \{boolean|undefined}

Function used for custom handling of setting values within a data structure.

*   Allows for extraction from container objects that are not directly supported.
*   Returns true if successful.
*   Returns undefined if Target is not compatible with the filter.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `target` | [deep-props.set~Target](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Target) | Current data being analyzed. |
| `key` | [deep-props.set~Key](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Key) | Next key along the path. |
| `depth` | number | Current level of depth within the data structure (used for further customization). |
| `data` | * | Data to set. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 90](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L90)

##### Returns:

True if successful, undefined if not applicable.

Type

boolean | undefined

##### Example

```js
(target, key, depth, data) => {
  if (target instanceof ArrayBuffer && target.byteLength === 16) {
    new Int16Array(target)[key] = data
    return true
  }
}
```

<a name="~Target"></a>
#### Target

Current reference to a given level of the path; parent to the next key along the path.

*   For the host `{ foo: { bar: 'baz' } }` and a path `['foo', 'bar']`, the Target value will change during the operation as follows:
    *   `{ bar: 'baz' }`
    *   `'baz'`
*   Unless Target is a primitive type, or has been extracted from within a primitive type (such as a JSON string), Target will be a reference to the host object.
    *   In this case, if any of its nested parents are mutable, modifications of a mutable object returned or yielded by set will result in changes to the host object.

##### Type:

*   [deep-props.set~Container](https://github.com/jpcx/deep-props.set/blob/0.1.1/docs/global.md#~Container) | string | undefined

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js), [line 53](https://github.com/jpcx/deep-props.set/blob/0.1.1/index.js#L53)

<hr>

## [Home](https://github.com/jpcx/deep-props.set/blob/0.1.1/README.md)