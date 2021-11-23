/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.8
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
    instance = new JavascriptMsxSdk.DeviceTemplateHistory();
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

  describe('DeviceTemplateHistory', function() {
    it('should create an instance of DeviceTemplateHistory', function() {
      // uncomment below and update the code to test DeviceTemplateHistory
      //var instane = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be.a(JavascriptMsxSdk.DeviceTemplateHistory);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instance = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be();
    });

    it('should have the property instanceId (base name: "instanceId")', function() {
      // uncomment below and update the code to test the property instanceId
      //var instance = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "templateId")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be();
    });

    it('should have the property statusError (base name: "statusError")', function() {
      // uncomment below and update the code to test the property statusError
      //var instance = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be();
    });

    it('should have the property templateParams (base name: "templateParams")', function() {
      // uncomment below and update the code to test the property templateParams
      //var instance = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdated (base name: "lastUpdated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instance = new JavascriptMsxSdk.DeviceTemplateHistory();
      //expect(instance).to.be();
    });

  });

}));
