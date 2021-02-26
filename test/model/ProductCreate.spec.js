/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: somecontact@cisco.com
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
    instance = new JavascriptMsxSdk.ProductCreate();
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

  describe('ProductCreate', function() {
    it('should create an instance of ProductCreate', function() {
      // uncomment below and update the code to test ProductCreate
      //var instane = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be.a(JavascriptMsxSdk.ProductCreate);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property multipleInstanceAllowed (base name: "multipleInstanceAllowed")', function() {
      // uncomment below and update the code to test the property multipleInstanceAllowed
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property displayOrder (base name: "displayOrder")', function() {
      // uncomment below and update the code to test the property displayOrder
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property orderLimit (base name: "orderLimit")', function() {
      // uncomment below and update the code to test the property orderLimit
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property configuration (base name: "configuration")', function() {
      // uncomment below and update the code to test the property configuration
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property isResource (base name: "isResource")', function() {
      // uncomment below and update the code to test the property isResource
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property hasChildren (base name: "hasChildren")', function() {
      // uncomment below and update the code to test the property hasChildren
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property parentId (base name: "parentId")', function() {
      // uncomment below and update the code to test the property parentId
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property serviceExtensions (base name: "serviceExtensions")', function() {
      // uncomment below and update the code to test the property serviceExtensions
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property serviceConfigQueryRootXPaths (base name: "serviceConfigQueryRootXPaths")', function() {
      // uncomment below and update the code to test the property serviceConfigQueryRootXPaths
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

    it('should have the property uiConfig (base name: "uiConfig")', function() {
      // uncomment below and update the code to test the property uiConfig
      //var instance = new JavascriptMsxSdk.ProductCreate();
      //expect(instance).to.be();
    });

  });

}));
