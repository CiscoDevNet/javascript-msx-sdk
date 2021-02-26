/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: somecontact@cisco.com
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
    instance = new JavascriptMsxSdk.WorkflowTargetsApi();
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

  describe('WorkflowTargetsApi', function() {
    describe('createWorkflowTarget', function() {
      it('should call createWorkflowTarget successfully', function(done) {
        //uncomment below and update the code to test createWorkflowTarget
        //instance.createWorkflowTarget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWorkflowTarget', function() {
      it('should call deleteWorkflowTarget successfully', function(done) {
        //uncomment below and update the code to test deleteWorkflowTarget
        //instance.deleteWorkflowTarget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkflowTarget', function() {
      it('should call getWorkflowTarget successfully', function(done) {
        //uncomment below and update the code to test getWorkflowTarget
        //instance.getWorkflowTarget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkflowTargetsList', function() {
      it('should call getWorkflowTargetsList successfully', function(done) {
        //uncomment below and update the code to test getWorkflowTargetsList
        //instance.getWorkflowTargetsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWorkflowTarget', function() {
      it('should call updateWorkflowTarget successfully', function(done) {
        //uncomment below and update the code to test updateWorkflowTarget
        //instance.updateWorkflowTarget(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
