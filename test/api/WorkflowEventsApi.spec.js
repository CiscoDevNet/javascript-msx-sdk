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
    instance = new JavascriptMsxSdk.WorkflowEventsApi();
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

  describe('WorkflowEventsApi', function() {
    describe('createWorkflowEvent', function() {
      it('should call createWorkflowEvent successfully', function(done) {
        //uncomment below and update the code to test createWorkflowEvent
        //instance.createWorkflowEvent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWorkflowEvent', function() {
      it('should call deleteWorkflowEvent successfully', function(done) {
        //uncomment below and update the code to test deleteWorkflowEvent
        //instance.deleteWorkflowEvent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkflowEvent', function() {
      it('should call getWorkflowEvent successfully', function(done) {
        //uncomment below and update the code to test getWorkflowEvent
        //instance.getWorkflowEvent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkflowEventsList', function() {
      it('should call getWorkflowEventsList successfully', function(done) {
        //uncomment below and update the code to test getWorkflowEventsList
        //instance.getWorkflowEventsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWorkflowEvent', function() {
      it('should call updateWorkflowEvent successfully', function(done) {
        //uncomment below and update the code to test updateWorkflowEvent
        //instance.updateWorkflowEvent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
