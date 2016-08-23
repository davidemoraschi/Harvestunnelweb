/**
 * oDesk auth library for using with public API by OAuth
 *
 * @package     oDeskAPI
 * @since       09/23/2014
 * @copyright   Copyright 2014(c) oDesk.com
 * @author      Maksym Novozhylov <mnovozhilov@odesk.com>
 * @license     oDesk's API Terms of Use {@link https://developers.odesk.com/api-tos.html}
 */

/**
 * @module routes.metadata
 */

/**
 * @property entryPoint
 * @type String
 * @default api
 * @static
 * @final
 */
var entryPoint = 'api';

/**
 * @class Metadata
 * @constructor
 */
exports.Metadata = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get Categories (v2)
 *
 * @method getCategoriesV2
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getCategoriesV2 = function(callback) {
  debug('running request');
  this.api.client.get('profiles/v2/metadata/categories', {}, callback);
}

/**
 * Get Categories
 *
 * @method getCategories
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getCategories = function(callback) {
  debug('running request');
  this.api.client.get('profiles/v1/metadata/categories', {}, callback);
}

/**
 * Get Skills
 *
 * @method getSkills
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getSkills = function(callback) {
  debug('running request');
  this.api.client.get('profiles/v1/metadata/skills', {}, callback);
}

/**
 * Get Regions
 *
 * @method getRegions
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getRegions = function(callback) {
  debug('running request');
  this.api.client.get('profiles/v1/metadata/regions', {}, callback);
}

/**
 * Get Tests
 *
 * @method getTests
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getTests = function(callback) {
  debug('running request');
  this.api.client.get('profiles/v1/metadata/tests', {}, callback);
}

/**
 * Get Reasons
 *
 * @method getReasons
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Metadata.prototype.getReasons = function(params, callback) {
  debug('running request');
  this.api.client.get('profiles/v1/metadata/reasons', params, callback);
}
