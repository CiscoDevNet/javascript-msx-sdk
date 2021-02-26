/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: somecontact@cisco.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JavascriptMsxSdk);
  }
}(this, function(expect, JavascriptMsxSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JavascriptMsxSdk.LegacyScheduleConfig();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LegacyScheduleConfig', function() {
    it('should create an instance of LegacyScheduleConfig', function() {
      // uncomment below and update the code to test LegacyScheduleConfig
      //var instane = new JavascriptMsxSdk.LegacyScheduleConfig();
      //expect(instance).to.be.a(JavascriptMsxSdk.LegacyScheduleConfig);
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new JavascriptMsxSdk.LegacyScheduleConfig();
      //expect(instance).to.be();
    });

    it('should have the property relative (base name: "relative")', function() {
      // uncomment below and update the code to test the property relative
      //var instance = new JavascriptMsxSdk.LegacyScheduleConfig();
      //expect(instance).to.be();
    });

    it('should have the property absolute (base name: "absolute")', function() {
      // uncomment below and update the code to test the property absolute
      //var instance = new JavascriptMsxSdk.LegacyScheduleConfig();
      //expect(instance).to.be();
    });

  });

}));