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
    instance = new JavascriptMsxSdk.TemplateAssignmentsPageAllOf();
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

  describe('TemplateAssignmentsPageAllOf', function() {
    it('should create an instance of TemplateAssignmentsPageAllOf', function() {
      // uncomment below and update the code to test TemplateAssignmentsPageAllOf
      //var instane = new JavascriptMsxSdk.TemplateAssignmentsPageAllOf();
      //expect(instance).to.be.a(JavascriptMsxSdk.TemplateAssignmentsPageAllOf);
    });

    it('should have the property contents (base name: "contents")', function() {
      // uncomment below and update the code to test the property contents
      //var instance = new JavascriptMsxSdk.TemplateAssignmentsPageAllOf();
      //expect(instance).to.be();
    });

  });

}));