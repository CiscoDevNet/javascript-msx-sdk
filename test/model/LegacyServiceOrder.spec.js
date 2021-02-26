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
    instance = new JavascriptMsxSdk.LegacyServiceOrder();
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

  describe('LegacyServiceOrder', function() {
    it('should create an instance of LegacyServiceOrder', function() {
      // uncomment below and update the code to test LegacyServiceOrder
      //var instane = new JavascriptMsxSdk.LegacyServiceOrder();
      //expect(instance).to.be.a(JavascriptMsxSdk.LegacyServiceOrder);
    });

    it('should have the property messageId (base name: "messageId")', function() {
      // uncomment below and update the code to test the property messageId
      //var instance = new JavascriptMsxSdk.LegacyServiceOrder();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new JavascriptMsxSdk.LegacyServiceOrder();
      //expect(instance).to.be();
    });

    it('should have the property serviceType (base name: "serviceType")', function() {
      // uncomment below and update the code to test the property serviceType
      //var instance = new JavascriptMsxSdk.LegacyServiceOrder();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new JavascriptMsxSdk.LegacyServiceOrder();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instance = new JavascriptMsxSdk.LegacyServiceOrder();
      //expect(instance).to.be();
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instance = new JavascriptMsxSdk.LegacyServiceOrder();
      //expect(instance).to.be();
    });

    it('should have the property transactionUUID (base name: "transactionUUID")', function() {
      // uncomment below and update the code to test the property transactionUUID
      //var instance = new JavascriptMsxSdk.LegacyServiceOrder();
      //expect(instance).to.be();
    });

  });

}));