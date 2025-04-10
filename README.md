# isotropic-console

[![npm version](https://img.shields.io/npm/v/isotropic-console.svg)](https://www.npmjs.com/package/isotropic-console)
[![License](https://img.shields.io/npm/l/isotropic-console.svg)](https://github.com/ibi-group/isotropic-console/blob/main/LICENSE)
![](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

A pre-configured Node.js console object with enhanced inspection settings and natural sorting of object properties.

## Why Use This?

- **Consistent Output**: Standardized console output formatting across your applications
- **Natural Sorting**: Object properties are sorted naturally (e.g., "item2" before "item10")
- **Unlimited Depth**: Full inspection of nested objects with unlimited depth
- **Improved Readability**: Non-compact format with unlimited line length for better log readability
- **Drop-in Replacement**: Works as a direct replacement for the standard Node.js console

## Installation

```bash
npm install isotropic-console
```

## Usage

```javascript
import _console from 'isotropic-console';

// Use just like the standard console
_console.log('Hello world');

// Complex objects are displayed with enhanced formatting
_console.log({
    deeply: {
        nested: {
            object: {
                with: [
                    'many',
                    'properties',
                    {
                        that: 'would normally be truncated'
                    }
                ]
            }
        }
    }
});

// Object properties are sorted naturally
_console.log({
    item10: 'value',
    item2: 'value',
    item1: 'value'
});
// Output order: item1, item2, item10
```

## Features

### Enhanced Object Inspection

The console is configured with the following inspection options:

- `breakLength: Infinity` - No arbitrary line breaks in output
- `colors: false` - No ANSI color codes in object inspection (colors still work for console.error, etc.)
- `compact: false` - Full, readable formatting rather than compressed
- `customInspect: true` - Respects custom [util.inspect.custom] implementations
- `depth: Infinity` - No depth limitation for nested objects
- `maxArrayLength: Infinity` - Arrays are not truncated
- `sorted: true` - Object properties are sorted using natural sort

### Natural Sorting

Object properties are sorted using the [isotropic-natural-sort](https://www.npmjs.com/package/isotropic-natural-sort) module, which ensures that:

- Properties are sorted alphabetically but in a human-friendly way
- Numeric parts of property names are sorted numerically (e.g., "prop2" before "prop10")
- Sorting is case-insensitive by default

### Standard Console API

All standard console methods are available:

- `console.log()`, `console.info()`, `console.debug()` - Output to stdout
- `console.error()`, `console.warn()` - Output to stderr
- `console.dir()` - Object inspection
- `console.table()` - Display objects in tabular format
- `console.time()`, `console.timeEnd()` - Timing operations
- And all other methods from Node.js Console

## Examples

### Logging Objects with Natural Property Order

```javascript
import _console from 'isotropic-console';

_console.log({
    z: 1,
    a: 2,
    item10: 3,
    item2: 4,
    item1: 5
});

// Output:
// {
//   a: 2,
//   item1: 5,
//   item2: 4,
//   item10: 3,
//   z: 1
// }
```

### Inspecting Deeply Nested Objects

```javascript
import _console from 'isotropic-console';

const _deepObject = {
    level1: {
        level2: {
            level3: {
                level4: {
                    data: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12
                    ]
                }
            }
        }
    }
};

_console.log(deepObject);
// Output will show the complete object with all nesting levels
// and the full array, unlike standard console which would truncate
```

## Integration with Logging Libraries

isotropic-console can be used as a replacement for the default console with many logging libraries:

```javascript
import _console from 'isotropic-console';
import _winston from 'winston';

// Configure winston to use isotropic-console for console transport
const _logger = _winston.createLogger({
    transports: [
        new winston.transports.Console({
            console: _console
        })
    ]
});
```

## Contributing

Please refer to [CONTRIBUTING.md](https://github.com/ibi-group/isotropic-console/blob/main/CONTRIBUTING.md) for contribution guidelines.

## Issues

If you encounter any issues, please file them at https://github.com/ibi-group/isotropic-console/issues
