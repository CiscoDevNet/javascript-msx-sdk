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
    instance = new JavascriptMsxSdk.TemplateAssignment();
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

  describe('TemplateAssignment', function() {
    it('should create an instance of TemplateAssignment', function() {
      // uncomment below and update the code to test TemplateAssignment
      //var instane = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be.a(JavascriptMsxSdk.TemplateAssignment);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "templateId")', function() {
      // uncomment below and update the code to test the property templateId
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property templateName (base name: "templateName")', function() {
      // uncomment below and update the code to test the property templateName
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property assignedTenantId (base name: "assignedTenantId")', function() {
      // uncomment below and update the code to test the property assignedTenantId
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property inheritable (base name: "inheritable")', function() {
      // uncomment below and update the code to test the property inheritable
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property statusDetails (base name: "statusDetails")', function() {
      // uncomment below and update the code to test the property statusDetails
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modifiedBy")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instance = new JavascriptMsxSdk.TemplateAssignment();
      //expect(instance).to.be();
    });

  });

}));
