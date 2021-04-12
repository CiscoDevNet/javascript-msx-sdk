/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.2
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
    instance = new JavascriptMsxSdk.LegacySite();
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

  describe('LegacySite', function() {
    it('should create an instance of LegacySite', function() {
      // uncomment below and update the code to test LegacySite
      //var instane = new JavascriptMsxSdk.LegacySite();
      //expect(instance).to.be.a(JavascriptMsxSdk.LegacySite);
    });

    it('should have the property siteId (base name: "siteId")', function() {
      // uncomment below and update the code to test the property siteId
      //var instance = new JavascriptMsxSdk.LegacySite();
      //expect(instance).to.be();
    });

    it('should have the property siteName (base name: "siteName")', function() {
      // uncomment below and update the code to test the property siteName
      //var instance = new JavascriptMsxSdk.LegacySite();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new JavascriptMsxSdk.LegacySite();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new JavascriptMsxSdk.LegacySite();
      //expect(instance).to.be();
    });

    it('should have the property devices (base name: "devices")', function() {
      // uncomment below and update the code to test the property devices
      //var instance = new JavascriptMsxSdk.LegacySite();
      //expect(instance).to.be();
    });

    it('should have the property siteAttributes (base name: "siteAttributes")', function() {
      // uncomment below and update the code to test the property siteAttributes
      //var instance = new JavascriptMsxSdk.LegacySite();
      //expect(instance).to.be();
    });

    it('should have the property _delete (base name: "delete")', function() {
      // uncomment below and update the code to test the property _delete
      //var instance = new JavascriptMsxSdk.LegacySite();
      //expect(instance).to.be();
    });

    it('should have the property operationalStatus (base name: "operationalStatus")', function() {
      // uncomment below and update the code to test the property operationalStatus
      //var instance = new JavascriptMsxSdk.LegacySite();
      //expect(instance).to.be();
    });

  });

}));
