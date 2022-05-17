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
    instance = new JavascriptMsxSdk.TemplatesApi();
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

  describe('TemplatesApi', function() {
    describe('deleteTemplate', function() {
      it('should call deleteTemplate successfully', function(done) {
        //uncomment below and update the code to test deleteTemplate
        //instance.deleteTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTemplate', function() {
      it('should call getTemplate successfully', function(done) {
        //uncomment below and update the code to test getTemplate
        //instance.getTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTemplateHistory', function() {
      it('should call getTemplateHistory successfully', function(done) {
        //uncomment below and update the code to test getTemplateHistory
        //instance.getTemplateHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTemplatesPage', function() {
      it('should call getTemplatesPage successfully', function(done) {
        //uncomment below and update the code to test getTemplatesPage
        //instance.getTemplatesPage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importTemplate', function() {
      it('should call importTemplate successfully', function(done) {
        //uncomment below and update the code to test importTemplate
        //instance.importTemplate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTemplateStatus', function() {
      it('should call updateTemplateStatus successfully', function(done) {
        //uncomment below and update the code to test updateTemplateStatus
        //instance.updateTemplateStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
