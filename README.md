# [deep-props](https://github.com/jpcx/deep-props/blob/master/README.md).set

[![NPM](https://nodei.co/npm/deep-props.set.png)](https://nodei.co/npm/deep-props.set/)

Sets values within nested objects; creates structure if not found. Supports setting within Objects, Arrays, Maps, Sets, WeakMaps, and WeakSets; supports creation of Objects, Arrays, and Maps.

See the [usage examples](#usage) for an overview of different types of data structures.

## Getting Started

The following installation, testing, and deployment instructions assume that deep-props.set will be installed as a standalone module. For instructions on how to install and test all deep-props modules, please [refer to the main README](https://github.com/jpcx/deep-props/blob/master/README.md). Functionality of the module remains the same in both cases.

### Prerequisites

Node.JS version 8.7.0 or above.

### Installing

```console
npm install deep-props.set
```

### Testing

The following command will test the package for errors. It prints a large selection of examples to the console; scroll through its output if you want to learn more about the utility.

```console
npm test --prefix /path/to/node_modules/deep-props.set
```

### Deployment

```js
const set = require('deep-props.set')
```

<a name="usage"></a>

### Usage

***Note:*** For string paths using standard settings, '.' is considered the same as '[' and ']'. See [<code>Options</code>](https://github.com/jpcx/deep-props.set/blob/0.1.0/docs/global.md#~Options) for instructions for customizing this behavior.

**Setting within existing Object structure**
```js
const nest = { foo: { bar: { baz: 'beh' } } }

// Both return: { foo: { bar: { baz: 'qux' } } }
set(nest, 'foo.bar.baz', 'qux')
nest
```

**Setting within existing Array structure**
```js
const nest = [[['foo']]]

// Both return: [[['bar']]]
set(nest, '0.0.0', 'bar')
nest
```

**Setting within existing Map structure**
```js
const nest = new Map().set(
  'foo', new Map().set(
    'bar', new Map().set(
      'baz', 'beh'
    )
  )
)

// Both return: Map { 'foo' => Map { 'bar' => Map { 'baz' => 'qux' } } }
set(nest, 'foo.bar.baz', 'qux')
nest
```

**Setting within existing Set structure**
```js
const nest = new Set([
  new Set([
    new Set([
      'foo'
    ])
  ])
])

// Both return: Set { Set { Set { 'bar' } } }
set(nest, '0.0.0', 'bar')
nest

// Both return: Set { Set { Set { 'bar', 'baz' } } }
set(nest, '0.0.1', 'baz')
nest
```

**Creation of new Object structure**
```js
const nest = {}

// Both return: { foo: { bar: { baz: 'qux' } } }
set(nest, 'foo.bar.baz', 'qux')
nest
```

**Creation of new Array structure**
```js
const nest = []

// Both return: [[['foo']]]
set(nest, '0.0.0', 'foo')
nest
```

**Creation of new Map structure**
```js
const nest = new Map()

// Both return: Map { ['foo'] => Map { ['bar'] => Map { ['baz'] => 'beh' } } }
set(nest, [['foo'], ['bar'], ['baz']], 'beh')
nest
```

## Documentation

### See:
  + [API Docs](https://github.com/jpcx/deep-props.set/blob/0.1.0/docs/API.md)
  + [Global Docs](https://github.com/jpcx/deep-props.set/blob/0.1.0/docs/global.md)

### Module: set

Sets values within nested objects; creates structure if not found. Supports setting within Objects, Arrays, Maps, Sets, WeakMaps, and WeakSets; supports creation of Objects, Arrays, and Maps.

##### Parameters:

| Name | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| `host` | [deep-props.set~Host](https://github.com/jpcx/deep-props.set/blob/0.1.0/docs/global.md#~Host) |  |  | Container to search within. |
| `path` | [deep-props.set~Path](https://github.com/jpcx/deep-props.set/blob/0.1.0/docs/global.md#~Path) |  |  | Path to desired property. |
| `data` | * |  |  | Data to set at endpoint of path. |
| `opt` | [deep-props.set~Options](https://github.com/jpcx/deep-props.set/blob/0.1.0/docs/global.md#~Options) | \<optional> | {} | Execution settings. |

Source:

*   [deep-props.set/index.js](https://github.com/jpcx/deep-props.set/blob/0.1.0/index.js), [line 365](https://github.com/jpcx/deep-props.set/blob/0.1.0/index.js#L365)

##### Returns:

True if successful, false if not. If `opt.gen === true`, returns a generator that yields each search step.

Type

boolean | [deep-props.set~ResultGenerator](https://github.com/jpcx/deep-props.set/blob/0.1.0/docs/global.md#~ResultGenerator)

#

## Versioning

Versioned using [SemVer](http://semver.org/). For available versions, see the [Changelog](https://github.com/jpcx/deep-props.set/blob/0.1.0/CHANGELOG.md).

## Contribution

Please raise an issue if you find any. Pull requests are welcome!

## Author

  + **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jpcx/deep-props.set/blob/0.1.0/LICENSE) file for details
