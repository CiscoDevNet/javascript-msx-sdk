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
    instance = new JavascriptMsxSdk.WorkflowFooter();
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

  describe('WorkflowFooter', function() {
    it('should create an instance of WorkflowFooter', function() {
      // uncomment below and update the code to test WorkflowFooter
      //var instane = new JavascriptMsxSdk.WorkflowFooter();
      //expect(instance).to.be.a(JavascriptMsxSdk.WorkflowFooter);
    });

    it('should have the property createdOn (base name: "created_on")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new JavascriptMsxSdk.WorkflowFooter();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "created_by")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new JavascriptMsxSdk.WorkflowFooter();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updated_on")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instance = new JavascriptMsxSdk.WorkflowFooter();
      //expect(instance).to.be();
    });

    it('should have the property updatedBy (base name: "updated_by")', function() {
      // uncomment below and update the code to test the property updatedBy
      //var instance = new JavascriptMsxSdk.WorkflowFooter();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new JavascriptMsxSdk.WorkflowFooter();
      //expect(instance).to.be();
    });

    it('should have the property uniqueName (base name: "unique_name")', function() {
      // uncomment below and update the code to test the property uniqueName
      //var instance = new JavascriptMsxSdk.WorkflowFooter();
      //expect(instance).to.be();
    });

  });

}));
