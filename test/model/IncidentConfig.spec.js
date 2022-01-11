/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.9
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
    instance = new JavascriptMsxSdk.IncidentConfig();
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

  describe('IncidentConfig', function() {
    it('should create an instance of IncidentConfig', function() {
      // uncomment below and update the code to test IncidentConfig
      //var instane = new JavascriptMsxSdk.IncidentConfig();
      //expect(instance).to.be.a(JavascriptMsxSdk.IncidentConfig);
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instance = new JavascriptMsxSdk.IncidentConfig();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "clientSecret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instance = new JavascriptMsxSdk.IncidentConfig();
      //expect(instance).to.be();
    });

    it('should have the property criticalEvent (base name: "criticalEvent")', function() {
      // uncomment below and update the code to test the property criticalEvent
      //var instance = new JavascriptMsxSdk.IncidentConfig();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instance = new JavascriptMsxSdk.IncidentConfig();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new JavascriptMsxSdk.IncidentConfig();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instance = new JavascriptMsxSdk.IncidentConfig();
      //expect(instance).to.be();
    });

    it('should have the property proxy (base name: "proxy")', function() {
      // uncomment below and update the code to test the property proxy
      //var instance = new JavascriptMsxSdk.IncidentConfig();
      //expect(instance).to.be();
    });

  });

}));
