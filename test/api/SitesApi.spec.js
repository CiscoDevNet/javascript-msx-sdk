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
    instance = new JavascriptMsxSdk.SitesApi();
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

  describe('SitesApi', function() {
    describe('addDevicesToSite', function() {
      it('should call addDevicesToSite successfully', function(done) {
        //uncomment below and update the code to test addDevicesToSite
        //instance.addDevicesToSite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addServicesToSite', function() {
      it('should call addServicesToSite successfully', function(done) {
        //uncomment below and update the code to test addServicesToSite
        //instance.addServicesToSite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSite', function() {
      it('should call createSite successfully', function(done) {
        //uncomment below and update the code to test createSite
        //instance.createSite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSite', function() {
      it('should call deleteSite successfully', function(done) {
        //uncomment below and update the code to test deleteSite
        //instance.deleteSite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSite', function() {
      it('should call getSite successfully', function(done) {
        //uncomment below and update the code to test getSite
        //instance.getSite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSitesPage', function() {
      it('should call getSitesPage successfully', function(done) {
        //uncomment below and update the code to test getSitesPage
        //instance.getSitesPage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeDevicesFromSite', function() {
      it('should call removeDevicesFromSite successfully', function(done) {
        //uncomment below and update the code to test removeDevicesFromSite
        //instance.removeDevicesFromSite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeServicesFromSite', function() {
      it('should call removeServicesFromSite successfully', function(done) {
        //uncomment below and update the code to test removeServicesFromSite
        //instance.removeServicesFromSite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSite', function() {
      it('should call updateSite successfully', function(done) {
        //uncomment below and update the code to test updateSite
        //instance.updateSite(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
