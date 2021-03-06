/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.2
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
    instance = new JavascriptMsxSdk.DeviceBilling();
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

  describe('DeviceBilling', function() {
    it('should create an instance of DeviceBilling', function() {
      // uncomment below and update the code to test DeviceBilling
      //var instane = new JavascriptMsxSdk.DeviceBilling();
      //expect(instance).to.be.a(JavascriptMsxSdk.DeviceBilling);
    });

    it('should have the property deviceSpeedGrade (base name: "deviceSpeedGrade")', function() {
      // uncomment below and update the code to test the property deviceSpeedGrade
      //var instance = new JavascriptMsxSdk.DeviceBilling();
      //expect(instance).to.be();
    });

    it('should have the property deviceVnfSource (base name: "deviceVnfSource")', function() {
      // uncomment below and update the code to test the property deviceVnfSource
      //var instance = new JavascriptMsxSdk.DeviceBilling();
      //expect(instance).to.be();
    });

    it('should have the property vnfFlavor (base name: "vnfFlavor")', function() {
      // uncomment below and update the code to test the property vnfFlavor
      //var instance = new JavascriptMsxSdk.DeviceBilling();
      //expect(instance).to.be();
    });

    it('should have the property vnfImage (base name: "vnfImage")', function() {
      // uncomment below and update the code to test the property vnfImage
      //var instance = new JavascriptMsxSdk.DeviceBilling();
      //expect(instance).to.be();
    });

    it('should have the property vnfName (base name: "vnfName")', function() {
      // uncomment below and update the code to test the property vnfName
      //var instance = new JavascriptMsxSdk.DeviceBilling();
      //expect(instance).to.be();
    });

    it('should have the property vnfValue (base name: "vnfValue")', function() {
      // uncomment below and update the code to test the property vnfValue
      //var instance = new JavascriptMsxSdk.DeviceBilling();
      //expect(instance).to.be();
    });

  });

}));
