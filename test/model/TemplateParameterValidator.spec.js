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
    instance = new JavascriptMsxSdk.TemplateParameterValidator();
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

  describe('TemplateParameterValidator', function() {
    it('should create an instance of TemplateParameterValidator', function() {
      // uncomment below and update the code to test TemplateParameterValidator
      //var instane = new JavascriptMsxSdk.TemplateParameterValidator();
      //expect(instance).to.be.a(JavascriptMsxSdk.TemplateParameterValidator);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JavascriptMsxSdk.TemplateParameterValidator();
      //expect(instance).to.be();
    });

    it('should have the property hintText (base name: "hintText")', function() {
      // uncomment below and update the code to test the property hintText
      //var instance = new JavascriptMsxSdk.TemplateParameterValidator();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new JavascriptMsxSdk.TemplateParameterValidator();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new JavascriptMsxSdk.TemplateParameterValidator();
      //expect(instance).to.be();
    });

    it('should have the property displayType (base name: "displayType")', function() {
      // uncomment below and update the code to test the property displayType
      //var instance = new JavascriptMsxSdk.TemplateParameterValidator();
      //expect(instance).to.be();
    });

    it('should have the property allowedValues (base name: "allowedValues")', function() {
      // uncomment below and update the code to test the property allowedValues
      //var instance = new JavascriptMsxSdk.TemplateParameterValidator();
      //expect(instance).to.be();
    });

    it('should have the property toolTipText (base name: "toolTipText")', function() {
      // uncomment below and update the code to test the property toolTipText
      //var instance = new JavascriptMsxSdk.TemplateParameterValidator();
      //expect(instance).to.be();
    });

  });

}));
