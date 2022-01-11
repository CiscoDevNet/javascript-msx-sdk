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
    instance = new JavascriptMsxSdk.IncidentsApi();
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

  describe('IncidentsApi', function() {
    describe('cancelIncident', function() {
      it('should call cancelIncident successfully', function(done) {
        //uncomment below and update the code to test cancelIncident
        //instance.cancelIncident(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createIncident', function() {
      it('should call createIncident successfully', function(done) {
        //uncomment below and update the code to test createIncident
        //instance.createIncident(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteIncident', function() {
      it('should call deleteIncident successfully', function(done) {
        //uncomment below and update the code to test deleteIncident
        //instance.deleteIncident(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIncident', function() {
      it('should call getIncident successfully', function(done) {
        //uncomment below and update the code to test getIncident
        //instance.getIncident(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIncidents', function() {
      it('should call getIncidents successfully', function(done) {
        //uncomment below and update the code to test getIncidents
        //instance.getIncidents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateIncident', function() {
      it('should call updateIncident successfully', function(done) {
        //uncomment below and update the code to test updateIncident
        //instance.updateIncident(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
