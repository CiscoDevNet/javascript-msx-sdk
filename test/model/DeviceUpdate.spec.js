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
    instance = new JavascriptMsxSdk.DeviceUpdate();
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

  describe('DeviceUpdate', function() {
    it('should create an instance of DeviceUpdate', function() {
      // uncomment below and update the code to test DeviceUpdate
      //var instane = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be.a(JavascriptMsxSdk.DeviceUpdate);
    });

    it('should have the property serviceType (base name: "serviceType")', function() {
      // uncomment below and update the code to test the property serviceType
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property managed (base name: "managed")', function() {
      // uncomment below and update the code to test the property managed
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property onboardType (base name: "onboardType")', function() {
      // uncomment below and update the code to test the property onboardType
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property onboardInformation (base name: "onboardInformation")', function() {
      // uncomment below and update the code to test the property onboardInformation
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property subType (base name: "subType")', function() {
      // uncomment below and update the code to test the property subType
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property serialKey (base name: "serialKey")', function() {
      // uncomment below and update the code to test the property serialKey
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

    it('should have the property complianceState (base name: "complianceState")', function() {
      // uncomment below and update the code to test the property complianceState
      //var instance = new JavascriptMsxSdk.DeviceUpdate();
      //expect(instance).to.be();
    });

  });

}));
