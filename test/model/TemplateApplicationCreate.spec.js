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
    instance = new JavascriptMsxSdk.TemplateApplicationCreate();
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

  describe('TemplateApplicationCreate', function() {
    it('should create an instance of TemplateApplicationCreate', function() {
      // uncomment below and update the code to test TemplateApplicationCreate
      //var instane = new JavascriptMsxSdk.TemplateApplicationCreate();
      //expect(instance).to.be.a(JavascriptMsxSdk.TemplateApplicationCreate);
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new JavascriptMsxSdk.TemplateApplicationCreate();
      //expect(instance).to.be();
    });

    it('should have the property targetId (base name: "targetId")', function() {
      // uncomment below and update the code to test the property targetId
      //var instance = new JavascriptMsxSdk.TemplateApplicationCreate();
      //expect(instance).to.be();
    });

    it('should have the property targetType (base name: "targetType")', function() {
      // uncomment below and update the code to test the property targetType
      //var instance = new JavascriptMsxSdk.TemplateApplicationCreate();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instance = new JavascriptMsxSdk.TemplateApplicationCreate();
      //expect(instance).to.be();
    });

  });

}));