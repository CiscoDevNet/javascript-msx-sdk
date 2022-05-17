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
    instance = new JavascriptMsxSdk.IncidentChangeRequestsApi();
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

  describe('IncidentChangeRequestsApi', function() {
    describe('createChangeRequest', function() {
      it('should call createChangeRequest successfully', function(done) {
        //uncomment below and update the code to test createChangeRequest
        //instance.createChangeRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteChangeRequest', function() {
      it('should call deleteChangeRequest successfully', function(done) {
        //uncomment below and update the code to test deleteChangeRequest
        //instance.deleteChangeRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChangeRequest', function() {
      it('should call getChangeRequest successfully', function(done) {
        //uncomment below and update the code to test getChangeRequest
        //instance.getChangeRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChangeRequestsPage', function() {
      it('should call getChangeRequestsPage successfully', function(done) {
        //uncomment below and update the code to test getChangeRequestsPage
        //instance.getChangeRequestsPage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChangeRequest', function() {
      it('should call updateChangeRequest successfully', function(done) {
        //uncomment below and update the code to test updateChangeRequest
        //instance.updateChangeRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
