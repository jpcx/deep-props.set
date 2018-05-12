'use strict'

/**
 * @author Justin Collier <jpcxme@gmail.com>
 * @see {@link http://github.com/jpcx/deepget|GitHub}
 * @license MIT
 */

/**
 * Wrapper for console.dir for maximum depth and coloring.
 *
 * @private
 * @param {*} x - Value to long to console.
 * @example
 * // prints { foo: 'bar' }
 * dirDeep({ foo: 'bar' })
 */
const dirDeep = x => console.dir(x, { depth: null, colors: true })

let set = require('./')

const assert = require('assert')

const ANSI_RED = '\x1b[31m'
const ANSI_GREEN = '\x1b[32m'
const ANSI_CYAN = '\x1b[36m'
const ANSI_RESET = '\x1b[0m'

const tests = []

// --- Test 1: --- //

tests.push(() => {
  const description = `Testing setting within existing Object structure...${
    '\n\nData Preparation:'
  }
    const data = {
      foo: {
        bar: {
          baz: {
            beh: 'qux'
          }
        }
      }
    }`
  const operations = []
  const data = {
    foo: {
      bar: {
        baz: {
          beh: 'qux'
        }
      }
    }
  }

  operations.push({
    expect: {
      foo: {
        bar: {
          baz: {
            beh: 'quux'
          }
        }
      }
    },
    result: () => {
      set(data, [ 'foo', 'bar', 'baz', 'beh' ], 'quux')
      return data
    }
  })
  return { data, description, operations }
})

// --- Test 2: --- //

tests.push(() => {
  const description = `Testing setting within existing Array structure...${
    '\n\nData Preparation:'
  }
    const data = [
      [
        [
          [
            'foo'
          ]
        ]
      ]
    ]`
  const operations = []
  const data = [
    [
      [
        [
          'foo'
        ]
      ]
    ]
  ]

  operations.push({
    expect: [
      [
        [
          [
            'bar'
          ]
        ]
      ]
    ],
    result: () => {
      set(data, [ 0, 0, 0, 0 ], 'bar')
      return data
    }
  })
  return { data, description, operations }
})

// --- Test 3: --- //

tests.push(() => {
  const description = `Testing setting within new Object structure...${
    '\n\nData Preparation:'
  }
    const data = {}`
  const operations = []
  const data = {}

  operations.push({
    expect: {
      foo: {
        bar: {
          baz: {
            beh: 'qux'
          }
        }
      }
    },
    result: () => {
      set(data, [ 'foo', 'bar', 'baz', 'beh' ], 'qux')
      return data
    }
  })
  return { data, description, operations }
})

// --- Test 4: --- //

tests.push(() => {
  const description = `Testing setting within new Array structure...${
    '\n\nData Preparation:'
  }
    const data = []`
  const operations = []
  const data = []

  operations.push({
    expect: [
      [
        [
          [
            'foo'
          ]
        ]
      ]
    ],
    result: () => {
      set(data, [ 0, 0, 0, 0 ], 'foo')
      return data
    }
  })
  return { data, description, operations }
})

/**
 * Output of the run function for use in external testing scripts.
 *
 * @private
 * @typedef  {Object} TestResults
 * @property {number} TotalTestsAttempt - Total test groups attempted.
 * @property {number} numFailed - Total number of operational failures.
 * @property {Array}  errors - Errors encountered.
 */

/**
 * Runs each test, counts errors, and logs results to the console.
 *
 * @private
 * @exports run
 * @param   {deep-props.set} module - Module to use for testing. Used when testing entire deep-props package.
 * @returns {TestResults} Results of tests.
 */
const run = module => {
  if (module !== undefined) set = module
  console.log('Performing tests...')

  const errors = []
  let numFailed = 0
  let totalTestsAttempt = 0

  for (let i = 0; i < tests.length; i++) {
    totalTestsAttempt++
    console.log(`\n---\n\nTest ${i + 1}`)
    let reported = false
    try {
      const test = tests[i]()
      console.log(test.description)
      console.log('\nData:')
      dirDeep(test.data)
      for (let op of test.operations) {
        const result = op.result()
        let assertion
        try {
          assert.deepStrictEqual(op.expect, result)
          assertion = true
        } catch (err) {
          assertion = err
        }
        const resultString = op.result.toString()
        let formattedResult = ANSI_CYAN
        if (
          resultString.match(/\(\) => [^{(]/) !== null &&
          resultString.match(/\(\) => [^{(]/).index === 0
        ) {
          formattedResult += resultString.replace(/\(\) => /, '')
        } else {
          formattedResult += resultString.replace(/\(\) => [{(\s]*/, '')
            .slice(0, -1)
            .trim()
        }
        formattedResult += ANSI_RESET
        const operation = '\nOperation:\n      ' + formattedResult
        console.log(operation)
        process.stdout.write('\nExpected:\n')
        dirDeep(op.expect)
        process.stdout.write('\nResult:\n')
        dirDeep(op.result())
        if (assertion === true) {
          console.log(ANSI_GREEN + '[OK]' + ANSI_RESET)
        } else {
          console.log(ANSI_RED + '[FAIL]' + ANSI_RESET)
          errors.push({
            test_num: i + 1,
            descr: test.description,
            assertion,
            operation
          })
          numFailed++
          reported = true
        }
      }
    } catch (err) {
      console.log(ANSI_RED + '[FAIL]' + ANSI_RESET)
      errors.push({ test_num: i + 1, err })
      if (reported === false) numFailed++
    }
  }

  console.log(
    `\n========================================${
      '========================================'
    }\n`
  )

  if (errors.length > 0) {
    console.log(ANSI_RED + '[FAIL]' + ANSI_RESET)
    for (let e of errors) {
      console.log(`\nFailed test ${e.test_num}! `)
      if (e.err) {
        console.log()
        dirDeep(e.err)
      } else {
        console.log(`Description: ${e.descr}`)
        if (e.operation) console.log(e.operation)
        if (e.assertion) {
          const err = Error()
          Object.keys(e.assertion).forEach(x => {
            err[x] = e.assertion[x]
          })
          console.log('\nError:')
          dirDeep(err)
        }
      }
    }
  } else {
    console.log(ANSI_GREEN + '[PASS]' + ANSI_RESET)
  }

  console.log()

  console.log('Total Tests Attempted: ' + totalTestsAttempt)
  console.log('Total Operational Failures: ' + numFailed)

  if (process.argv[2] === 'standalone') {
    if (numFailed > 0) throw Error('Failed tests!')
  } else {
    return {
      totalTestsAttempt,
      numFailed,
      errors
    }
  }
}

if (process.argv[2] === 'standalone') {
  run()
}

module.exports = { run }
