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
    instance = new JavascriptMsxSdk.ManageChangeRequestPending();
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

  describe('ManageChangeRequestPending', function() {
    it('should create an instance of ManageChangeRequestPending', function() {
      // uncomment below and update the code to test ManageChangeRequestPending
      //var instance = new JavascriptMsxSdk.ManageChangeRequestPending();
      //expect(instance).to.be.a(JavascriptMsxSdk.ManageChangeRequestPending);
    });

    it('should have the property changeRequestId (base name: "changeRequestId")', function() {
      // uncomment below and update the code to test the property changeRequestId
      //var instance = new JavascriptMsxSdk.ManageChangeRequestPending();
      //expect(instance).to.be();
    });

    it('should have the property changeRequestUrl (base name: "changeRequestUrl")', function() {
      // uncomment below and update the code to test the property changeRequestUrl
      //var instance = new JavascriptMsxSdk.ManageChangeRequestPending();
      //expect(instance).to.be();
    });

  });

}));
