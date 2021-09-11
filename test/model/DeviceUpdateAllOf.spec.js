/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.5
 * 
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
    instance = new JavascriptMsxSdk.DeviceUpdateAllOf();
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

  describe('DeviceUpdateAllOf', function() {
    it('should create an instance of DeviceUpdateAllOf', function() {
      // uncomment below and update the code to test DeviceUpdateAllOf
      //var instane = new JavascriptMsxSdk.DeviceUpdateAllOf();
      //expect(instance).to.be.a(JavascriptMsxSdk.DeviceUpdateAllOf);
    });

    it('should have the property serviceType (base name: "serviceType")', function() {
      // uncomment below and update the code to test the property serviceType
      //var instance = new JavascriptMsxSdk.DeviceUpdateAllOf();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new JavascriptMsxSdk.DeviceUpdateAllOf();
      //expect(instance).to.be();
    });

    it('should have the property managed (base name: "managed")', function() {
      // uncomment below and update the code to test the property managed
      //var instance = new JavascriptMsxSdk.DeviceUpdateAllOf();
      //expect(instance).to.be();
    });

    it('should have the property onboardType (base name: "onboardType")', function() {
      // uncomment below and update the code to test the property onboardType
      //var instance = new JavascriptMsxSdk.DeviceUpdateAllOf();
      //expect(instance).to.be();
    });

    it('should have the property onboardInformation (base name: "onboardInformation")', function() {
      // uncomment below and update the code to test the property onboardInformation
      //var instance = new JavascriptMsxSdk.DeviceUpdateAllOf();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instance = new JavascriptMsxSdk.DeviceUpdateAllOf();
      //expect(instance).to.be();
    });

  });

}));