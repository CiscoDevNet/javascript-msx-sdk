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
    instance = new JavascriptMsxSdk.WorkflowStartConfig();
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

  describe('WorkflowStartConfig', function() {
    it('should create an instance of WorkflowStartConfig', function() {
      // uncomment below and update the code to test WorkflowStartConfig
      //var instance = new JavascriptMsxSdk.WorkflowStartConfig();
      //expect(instance).to.be.a(JavascriptMsxSdk.WorkflowStartConfig);
    });

    it('should have the property inputVariables (base name: "input_variables")', function() {
      // uncomment below and update the code to test the property inputVariables
      //var instance = new JavascriptMsxSdk.WorkflowStartConfig();
      //expect(instance).to.be();
    });

    it('should have the property typeOfTargetNeeded (base name: "type_of_target_needed")', function() {
      // uncomment below and update the code to test the property typeOfTargetNeeded
      //var instance = new JavascriptMsxSdk.WorkflowStartConfig();
      //expect(instance).to.be();
    });

    it('should have the property targetId (base name: "target_id")', function() {
      // uncomment below and update the code to test the property targetId
      //var instance = new JavascriptMsxSdk.WorkflowStartConfig();
      //expect(instance).to.be();
    });

  });

}));
