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
    instance = new JavascriptMsxSdk.WorkflowAccessMeta();
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

  describe('WorkflowAccessMeta', function() {
    it('should create an instance of WorkflowAccessMeta', function() {
      // uncomment below and update the code to test WorkflowAccessMeta
      //var instane = new JavascriptMsxSdk.WorkflowAccessMeta();
      //expect(instance).to.be.a(JavascriptMsxSdk.WorkflowAccessMeta);
    });

    it('should have the property adapter (base name: "adapter")', function() {
      // uncomment below and update the code to test the property adapter
      //var instance = new JavascriptMsxSdk.WorkflowAccessMeta();
      //expect(instance).to.be();
    });

    it('should have the property runtimeUsers (base name: "runtime_users")', function() {
      // uncomment below and update the code to test the property runtimeUsers
      //var instance = new JavascriptMsxSdk.WorkflowAccessMeta();
      //expect(instance).to.be();
    });

    it('should have the property targets (base name: "targets")', function() {
      // uncomment below and update the code to test the property targets
      //var instance = new JavascriptMsxSdk.WorkflowAccessMeta();
      //expect(instance).to.be();
    });

    it('should have the property isIntegration (base name: "is_integration")', function() {
      // uncomment below and update the code to test the property isIntegration
      //var instance = new JavascriptMsxSdk.WorkflowAccessMeta();
      //expect(instance).to.be();
    });

    it('should have the property isInternal (base name: "is_internal")', function() {
      // uncomment below and update the code to test the property isInternal
      //var instance = new JavascriptMsxSdk.WorkflowAccessMeta();
      //expect(instance).to.be();
    });

  });

}));
