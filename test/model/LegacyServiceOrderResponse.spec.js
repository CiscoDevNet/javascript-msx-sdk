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
    instance = new JavascriptMsxSdk.LegacyServiceOrderResponse();
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

  describe('LegacyServiceOrderResponse', function() {
    it('should create an instance of LegacyServiceOrderResponse', function() {
      // uncomment below and update the code to test LegacyServiceOrderResponse
      //var instane = new JavascriptMsxSdk.LegacyServiceOrderResponse();
      //expect(instance).to.be.a(JavascriptMsxSdk.LegacyServiceOrderResponse);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new JavascriptMsxSdk.LegacyServiceOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionUUID (base name: "transactionUUID")', function() {
      // uncomment below and update the code to test the property transactionUUID
      //var instance = new JavascriptMsxSdk.LegacyServiceOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instance = new JavascriptMsxSdk.LegacyServiceOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new JavascriptMsxSdk.LegacyServiceOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new JavascriptMsxSdk.LegacyServiceOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property serviceInstanceIds (base name: "serviceInstanceIds")', function() {
      // uncomment below and update the code to test the property serviceInstanceIds
      //var instance = new JavascriptMsxSdk.LegacyServiceOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property sites (base name: "sites")', function() {
      // uncomment below and update the code to test the property sites
      //var instance = new JavascriptMsxSdk.LegacyServiceOrderResponse();
      //expect(instance).to.be();
    });

    it('should have the property devices (base name: "devices")', function() {
      // uncomment below and update the code to test the property devices
      //var instance = new JavascriptMsxSdk.LegacyServiceOrderResponse();
      //expect(instance).to.be();
    });

  });

}));
