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
    instance = new JavascriptMsxSdk.GenericEventCreate();
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

  describe('GenericEventCreate', function() {
    it('should create an instance of GenericEventCreate', function() {
      // uncomment below and update the code to test GenericEventCreate
      //var instane = new JavascriptMsxSdk.GenericEventCreate();
      //expect(instance).to.be.a(JavascriptMsxSdk.GenericEventCreate);
    });

    it('should have the property severity (base name: "severity")', function() {
      // uncomment below and update the code to test the property severity
      //var instance = new JavascriptMsxSdk.GenericEventCreate();
      //expect(instance).to.be();
    });

    it('should have the property subtype (base name: "subtype")', function() {
      // uncomment below and update the code to test the property subtype
      //var instance = new JavascriptMsxSdk.GenericEventCreate();
      //expect(instance).to.be();
    });

    it('should have the property service (base name: "service")', function() {
      // uncomment below and update the code to test the property service
      //var instance = new JavascriptMsxSdk.GenericEventCreate();
      //expect(instance).to.be();
    });

    it('should have the property keywords (base name: "keywords")', function() {
      // uncomment below and update the code to test the property keywords
      //var instance = new JavascriptMsxSdk.GenericEventCreate();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new JavascriptMsxSdk.GenericEventCreate();
      //expect(instance).to.be();
    });

    it('should have the property trace (base name: "trace")', function() {
      // uncomment below and update the code to test the property trace
      //var instance = new JavascriptMsxSdk.GenericEventCreate();
      //expect(instance).to.be();
    });

    it('should have the property security (base name: "security")', function() {
      // uncomment below and update the code to test the property security
      //var instance = new JavascriptMsxSdk.GenericEventCreate();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new JavascriptMsxSdk.GenericEventCreate();
      //expect(instance).to.be();
    });

  });

}));
