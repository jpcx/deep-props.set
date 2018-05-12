/**
 * @author Justin Collier <jpcxme@gmail.com>
 * @see {@link http://github.com/jpcx/deep-props|GitHub}
 * @license MIT
 */

'use strict'

/** @namespace deep-props.set */

/**
 * Custom dataset for use as a <a href="#~Container">Container</a>. May be accessed via valid customizer functions.
 *
 * @typedef {*} deep-props.set~Custom
 * @example
 * (() => {
 *   class CustomDataStructure {
 *     constructor(array) {
 *       this.get = i => array[i]
 *       this.getValues = () => array
 *       this.push = x => array.push(x)
 *     }
 *   }
 *   return new CustomDataStructure([ 'foo', 'bar' ])
 * })()
 */

/**
 * Key used for accessing a child property within a container. When its value is <code>'__proto__'</code>, it is used as a stand-in for <code>Object.getPrototypeOf()</code>.
 *
 * @typedef {(string|deep-props.set~Container)} deep-props.set~Key
 */

/**
 * Container object used as a target for child property extraction.
 *
 * @typedef {(Object|Array|Map|WeakMap|Set|WeakSet|deep-props.set~Custom)} deep-props.set~Container
 */

/**
 * A non-primitive <a href="#~Container">Container</a> which represents the root of a given path.
 *
 * @typedef {deep-props.set~Container} deep-props.set~Host
 */

/**
 * Generator object which yields stepwise operation results.
 *
 * @typedef {Object} deep-props.set~ResultGenerator
 */

/**
 * Current reference to a given level of the path; parent to the next key along the path.
 * <ul>
 *   <li> For the host <code>{ foo: { bar: 'baz' } }</code> and a path <code>['foo', 'bar']</code>, the Target value will change during the search as follows:
 *   <ul>
 *     <li> <code>{ bar: 'baz' }</code>
 *     <li> <code>'baz'</code>
 *   </ul>
 *   <li> Unless Target is a primitive type, or has been extracted from within a primitive type (such as a JSON string), Target will be a reference to the host object.
 *   <ul>
 *     <li> In this case, if any of its nested parents are mutable, modifications of a mutable object returned or yielded by get will result in changes to the host object.
 *   </ul>
 * </ul>
 *
 * @typedef {(deep-props.set~Container|string|undefined)} deep-props.set~Target
 */

/**
 * Function used for custom handling of entry into next level of the dataset.
 * <ul>
 *   <li> Allows for extraction from container objects that are not directly supported.
 *   <li> Returns new value of Target based on key.
 *   <li> Returns undefined if Target is not compatible with the filter.
 * </ul>
 *
 * @typedef {function} deep-props.set~GetCustomizer
 * @param   {deep-props.set~Target} target - Current data being analyzed
 * @param   {deep-props.set~Key}    key    - Next key along the path
 * @returns {deep-props.set~Target} Value to pass along to the search function as the next Target. If undefined, will fall back on using standard extraction methods to find the next Target.
 * @example
 * (target, key) => {
 *   if (target instanceof ArrayBuffer && target.byteLength === 16) {
 *     return new Int16Array(target)[key]
 *   }
 * }
 */

/**
 * Settings for customizing behaviour.
 *
 * @typedef  {Object}  deep-props.set~Options
 * @property {Boolean} [gen] - If true, module returns a generator that yields each search step and returns the final value.
 * @property {deep-props.set~GetCustomizer} [getCustomizer] - Allows for custom extraction.
 * @property {RegExp} [match] - Regular expression used for custom key extraction from supplied path string. If supplied, it is used as the only argument for <code>path.match()</code>, which should return an array of key names.
 * @example
 * {
 *   gen: true,
 *   getCustomizer: (target, key) => {
 *     if (target instanceof ArrayBuffer && target.byteLength === 16) {
 *       return new Int16Array(target)[key]
 *     }
 *   },
 *   match: /[^/]+/g
 * }
 */

/**
 * Instructions that specify which keys should be accessed at each level of the dataset.
 * <ul>
 *   <li> A nested array <code>'arr'</code> with property <code>arr[0][0] === 'foo'</code> should be represented as <code>[0, 0]</code> or <code>'[0][0]'</code>, (or <code>'0.0'</code>, etc.) in order to retrieve <code>'foo'</code>.
 *   <li> A nested object <code>'nest'</code> with property <code>nest.foo.bar === 'baz'</code> should be represented as either <code>['foo', 'bar']</code> or <code>'foo.bar'</code> (or <code>'foo[bar]'</code>, etc.) in order to retrieve <code>'baz'</code>.
 *   <li> String paths will be converted to an array of keys based on matches of the following regex: <code>/[^.[\]]+/g</code>.
 *   <ul>
 *     <li> In other words, anything between periods or brackets will be interpreted as keys.
 *     <li> Paths containing any keys that are references (such as WeakMap keys) must be passed as an array, such as <code>['foo', 'bar', weakMapKey]</code>
 *     <li> Paths containing any keys with periods or brackets must also be passed as an array, such as <code>['foo.bar', 'baz[qux]']</code> (unless a custom match regex is supplied).
 *   </ul>
 * </ul>
 *
 * @typedef  {deep-props.set~Key[]|string} deep-props.set~Path
 * @example
 * [ 'foo', 'bar', 'baz' ]
 * @example
 * 'foo.bar.baz'
 * @example
 * 'foo[0][0]'
 */

/**
 *
 */
const set = (host, path, opt, data) => {

}
