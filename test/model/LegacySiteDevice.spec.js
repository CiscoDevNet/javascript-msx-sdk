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
    instance = new JavascriptMsxSdk.LegacySiteDevice();
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

  describe('LegacySiteDevice', function() {
    it('should create an instance of LegacySiteDevice', function() {
      // uncomment below and update the code to test LegacySiteDevice
      //var instane = new JavascriptMsxSdk.LegacySiteDevice();
      //expect(instance).to.be.a(JavascriptMsxSdk.LegacySiteDevice);
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instance = new JavascriptMsxSdk.LegacySiteDevice();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JavascriptMsxSdk.LegacySiteDevice();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instance = new JavascriptMsxSdk.LegacySiteDevice();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new JavascriptMsxSdk.LegacySiteDevice();
      //expect(instance).to.be();
    });

    it('should have the property deviceAttributes (base name: "deviceAttributes")', function() {
      // uncomment below and update the code to test the property deviceAttributes
      //var instance = new JavascriptMsxSdk.LegacySiteDevice();
      //expect(instance).to.be();
    });

    it('should have the property deviceOnboarding (base name: "deviceOnboarding")', function() {
      // uncomment below and update the code to test the property deviceOnboarding
      //var instance = new JavascriptMsxSdk.LegacySiteDevice();
      //expect(instance).to.be();
    });

    it('should have the property _delete (base name: "delete")', function() {
      // uncomment below and update the code to test the property _delete
      //var instance = new JavascriptMsxSdk.LegacySiteDevice();
      //expect(instance).to.be();
    });

  });

}));