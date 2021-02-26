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
    instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
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

  describe('LegacySubscriptionDetail', function() {
    it('should create an instance of LegacySubscriptionDetail', function() {
      // uncomment below and update the code to test LegacySubscriptionDetail
      //var instane = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be.a(JavascriptMsxSdk.LegacySubscriptionDetail);
    });

    it('should have the property siteCount (base name: "siteCount")', function() {
      // uncomment below and update the code to test the property siteCount
      //var instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be();
    });

    it('should have the property sites (base name: "sites")', function() {
      // uncomment below and update the code to test the property sites
      //var instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be();
    });

    it('should have the property offerSelection (base name: "offerSelection")', function() {
      // uncomment below and update the code to test the property offerSelection
      //var instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be();
    });

    it('should have the property serviceInstanceDetail (base name: "serviceInstanceDetail")', function() {
      // uncomment below and update the code to test the property serviceInstanceDetail
      //var instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be();
    });

    it('should have the property priceDetail (base name: "priceDetail")', function() {
      // uncomment below and update the code to test the property priceDetail
      //var instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be();
    });

    it('should have the property dealerCode (base name: "dealerCode")', function() {
      // uncomment below and update the code to test the property dealerCode
      //var instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be();
    });

    it('should have the property pricePlanId (base name: "pricePlanId")', function() {
      // uncomment below and update the code to test the property pricePlanId
      //var instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be();
    });

    it('should have the property termsAndConditionId (base name: "termsAndConditionId")', function() {
      // uncomment below and update the code to test the property termsAndConditionId
      //var instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be();
    });

    it('should have the property configuration (base name: "configuration")', function() {
      // uncomment below and update the code to test the property configuration
      //var instance = new JavascriptMsxSdk.LegacySubscriptionDetail();
      //expect(instance).to.be();
    });

  });

}));
