Module: set
===========

Sets values within nested objects; creates structure if not found. Supports setting within Objects, Arrays, Maps, Sets, WeakMaps, and WeakSets; supports creation of Objects, Arrays, and Maps.

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `host` | [deep-props.set~Host](https://github.com/jpcx/deep-props.set/blob/0.1.2/docs/global.md#~Host) |  |  | Container to search within. |
| `path` | [deep-props.set~Path](https://github.com/jpcx/deep-props.set/blob/0.1.2/docs/global.md#~Path) |  |  | Path to desired property. |
| `data` | * |  |  | Data to set at endpoint of path. |
| `opt` | [deep-props.set~Options](https://github.com/jpcx/deep-props.set/blob/0.1.2/docs/global.md#~Options) | \<optional> | {} | Execution settings. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.2/index.js), [line 365](https://github.com/jpcx/deep-props.set/blob/0.1.2/index.js#L365)

##### Returns:

True if successful, false if not. If `opt.gen === true`, returns a generator that yields each search step.

Type

boolean | [deep-props.set~ResultGenerator](https://github.com/jpcx/deep-props.set/blob/0.1.2/docs/global.md#~ResultGenerator)

##### Examples

```js
const data = { foo: { bar: { baz: 'beh' } } }

// Both return { foo: { bar: { baz: 'qux' } } }
set(data, 'foo.bar.baz', 'qux')
data
```

```js
const data = {}

// Both return { foo: { bar: { baz: 'qux' } } }
set(data, 'foo.bar.baz', 'qux')
data
```

<hr>

## [Home](https://github.com/jpcx/deep-props.set/blob/0.1.2/README.md)