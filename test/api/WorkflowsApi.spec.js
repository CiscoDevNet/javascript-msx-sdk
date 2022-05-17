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
    instance = new JavascriptMsxSdk.WorkflowsApi();
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

  describe('WorkflowsApi', function() {
    describe('deleteWorkflow', function() {
      it('should call deleteWorkflow successfully', function(done) {
        //uncomment below and update the code to test deleteWorkflow
        //instance.deleteWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportWorkflow', function() {
      it('should call exportWorkflow successfully', function(done) {
        //uncomment below and update the code to test exportWorkflow
        //instance.exportWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkflow', function() {
      it('should call getWorkflow successfully', function(done) {
        //uncomment below and update the code to test getWorkflow
        //instance.getWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkflowStartConfig', function() {
      it('should call getWorkflowStartConfig successfully', function(done) {
        //uncomment below and update the code to test getWorkflowStartConfig
        //instance.getWorkflowStartConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkflowsList', function() {
      it('should call getWorkflowsList successfully', function(done) {
        //uncomment below and update the code to test getWorkflowsList
        //instance.getWorkflowsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importWorkflow', function() {
      it('should call importWorkflow successfully', function(done) {
        //uncomment below and update the code to test importWorkflow
        //instance.importWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startWorkflow', function() {
      it('should call startWorkflow successfully', function(done) {
        //uncomment below and update the code to test startWorkflow
        //instance.startWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWorkflow', function() {
      it('should call updateWorkflow successfully', function(done) {
        //uncomment below and update the code to test updateWorkflow
        //instance.updateWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateWorkflow', function() {
      it('should call validateWorkflow successfully', function(done) {
        //uncomment below and update the code to test validateWorkflow
        //instance.validateWorkflow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
