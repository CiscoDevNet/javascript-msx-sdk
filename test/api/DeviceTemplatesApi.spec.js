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
    instance = new JavascriptMsxSdk.DeviceTemplatesApi();
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

  describe('DeviceTemplatesApi', function() {
    describe('createDeviceTemplate', function() {
      it('should call createDeviceTemplate successfully', function(done) {
        //uncomment below and update the code to test createDeviceTemplate
        //instance.createDeviceTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDeviceTemplateVersion', function() {
      it('should call createDeviceTemplateVersion successfully', function(done) {
        //uncomment below and update the code to test createDeviceTemplateVersion
        //instance.createDeviceTemplateVersion(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDeviceTemplate', function() {
      it('should call deleteDeviceTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteDeviceTemplate
        //instance.deleteDeviceTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceTemplate', function() {
      it('should call getDeviceTemplate successfully', function(done) {
        //uncomment below and update the code to test getDeviceTemplate
        //instance.getDeviceTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDeviceTemplatesList', function() {
      it('should call getDeviceTemplatesList successfully', function(done) {
        //uncomment below and update the code to test getDeviceTemplatesList
        //instance.getDeviceTemplatesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('scanDeviceTemplateParameters', function() {
      it('should call scanDeviceTemplateParameters successfully', function(done) {
        //uncomment below and update the code to test scanDeviceTemplateParameters
        //instance.scanDeviceTemplateParameters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDeviceTemplateAccess', function() {
      it('should call updateDeviceTemplateAccess successfully', function(done) {
        //uncomment below and update the code to test updateDeviceTemplateAccess
        //instance.updateDeviceTemplateAccess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
