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
    instance = new JavascriptMsxSdk.IncidentConfigurationsApi();
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

  describe('IncidentConfigurationsApi', function() {
    describe('createServiceNowConfiguration', function() {
      it('should call createServiceNowConfiguration successfully', function(done) {
        //uncomment below and update the code to test createServiceNowConfiguration
        //instance.createServiceNowConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteServiceNowConfiguration', function() {
      it('should call deleteServiceNowConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteServiceNowConfiguration
        //instance.deleteServiceNowConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getConfiguration', function() {
      it('should call getConfiguration successfully', function(done) {
        //uncomment below and update the code to test getConfiguration
        //instance.getConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServiceNowConfiguration', function() {
      it('should call getServiceNowConfiguration successfully', function(done) {
        //uncomment below and update the code to test getServiceNowConfiguration
        //instance.getServiceNowConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getServiceNowConfigurationsPage', function() {
      it('should call getServiceNowConfigurationsPage successfully', function(done) {
        //uncomment below and update the code to test getServiceNowConfigurationsPage
        //instance.getServiceNowConfigurationsPage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchConfiguration', function() {
      it('should call patchConfiguration successfully', function(done) {
        //uncomment below and update the code to test patchConfiguration
        //instance.patchConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateConfiguration', function() {
      it('should call updateConfiguration successfully', function(done) {
        //uncomment below and update the code to test updateConfiguration
        //instance.updateConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));