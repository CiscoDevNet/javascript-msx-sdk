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
    instance = new JavascriptMsxSdk.OfferCreate();
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

  describe('OfferCreate', function() {
    it('should create an instance of OfferCreate', function() {
      // uncomment below and update the code to test OfferCreate
      //var instane = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be.a(JavascriptMsxSdk.OfferCreate);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property displayOrder (base name: "displayOrder")', function() {
      // uncomment below and update the code to test the property displayOrder
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property supportedProperties (base name: "supportedProperties")', function() {
      // uncomment below and update the code to test the property supportedProperties
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property supportedOptions (base name: "supportedOptions")', function() {
      // uncomment below and update the code to test the property supportedOptions
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

    it('should have the property approvals (base name: "approvals")', function() {
      // uncomment below and update the code to test the property approvals
      //var instance = new JavascriptMsxSdk.OfferCreate();
      //expect(instance).to.be();
    });

  });

}));
