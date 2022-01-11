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
    instance = new JavascriptMsxSdk.WorkflowActionBlock();
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

  describe('WorkflowActionBlock', function() {
    it('should create an instance of WorkflowActionBlock', function() {
      // uncomment below and update the code to test WorkflowActionBlock
      //var instane = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be.a(JavascriptMsxSdk.WorkflowActionBlock);
    });

    it('should have the property uniqueName (base name: "unique_name")', function() {
      // uncomment below and update the code to test the property uniqueName
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property baseType (base name: "base_type")', function() {
      // uncomment below and update the code to test the property baseType
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property objectType (base name: "object_type")', function() {
      // uncomment below and update the code to test the property objectType
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property actions (base name: "actions")', function() {
      // uncomment below and update the code to test the property actions
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property subworkflowId (base name: "subworkflow_id")', function() {
      // uncomment below and update the code to test the property subworkflowId
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property workflowId (base name: "workflow_id")', function() {
      // uncomment below and update the code to test the property workflowId
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

    it('should have the property schemaId (base name: "schema_id")', function() {
      // uncomment below and update the code to test the property schemaId
      //var instance = new JavascriptMsxSdk.WorkflowActionBlock();
      //expect(instance).to.be();
    });

  });

}));
