/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.10
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
    instance = new JavascriptMsxSdk.ServiceElementPrice();
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

  describe('ServiceElementPrice', function() {
    it('should create an instance of ServiceElementPrice', function() {
      // uncomment below and update the code to test ServiceElementPrice
      //var instance = new JavascriptMsxSdk.ServiceElementPrice();
      //expect(instance).to.be.a(JavascriptMsxSdk.ServiceElementPrice);
    });

    it('should have the property oneTimePrice (base name: "oneTimePrice")', function() {
      // uncomment below and update the code to test the property oneTimePrice
      //var instance = new JavascriptMsxSdk.ServiceElementPrice();
      //expect(instance).to.be();
    });

    it('should have the property periodicPrice (base name: "periodicPrice")', function() {
      // uncomment below and update the code to test the property periodicPrice
      //var instance = new JavascriptMsxSdk.ServiceElementPrice();
      //expect(instance).to.be();
    });

    it('should have the property timePeriod (base name: "timePeriod")', function() {
      // uncomment below and update the code to test the property timePeriod
      //var instance = new JavascriptMsxSdk.ServiceElementPrice();
      //expect(instance).to.be();
    });

    it('should have the property unitOfMeasure (base name: "unitOfMeasure")', function() {
      // uncomment below and update the code to test the property unitOfMeasure
      //var instance = new JavascriptMsxSdk.ServiceElementPrice();
      //expect(instance).to.be();
    });

    it('should have the property includedQuantity (base name: "includedQuantity")', function() {
      // uncomment below and update the code to test the property includedQuantity
      //var instance = new JavascriptMsxSdk.ServiceElementPrice();
      //expect(instance).to.be();
    });

    it('should have the property additionalOneTimePrice (base name: "additionalOneTimePrice")', function() {
      // uncomment below and update the code to test the property additionalOneTimePrice
      //var instance = new JavascriptMsxSdk.ServiceElementPrice();
      //expect(instance).to.be();
    });

    it('should have the property additionalPeriodicPrice (base name: "additionalPeriodicPrice")', function() {
      // uncomment below and update the code to test the property additionalPeriodicPrice
      //var instance = new JavascriptMsxSdk.ServiceElementPrice();
      //expect(instance).to.be();
    });

    it('should have the property additionalQuantity (base name: "additionalQuantity")', function() {
      // uncomment below and update the code to test the property additionalQuantity
      //var instance = new JavascriptMsxSdk.ServiceElementPrice();
      //expect(instance).to.be();
    });

  });

}));
