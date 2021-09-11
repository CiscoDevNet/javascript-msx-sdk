/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.5
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
    instance = new JavascriptMsxSdk.WorkflowMetadataGitInfo();
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

  describe('WorkflowMetadataGitInfo', function() {
    it('should create an instance of WorkflowMetadataGitInfo', function() {
      // uncomment below and update the code to test WorkflowMetadataGitInfo
      //var instane = new JavascriptMsxSdk.WorkflowMetadataGitInfo();
      //expect(instance).to.be.a(JavascriptMsxSdk.WorkflowMetadataGitInfo);
    });

    it('should have the property targetId (base name: "target_id")', function() {
      // uncomment below and update the code to test the property targetId
      //var instance = new JavascriptMsxSdk.WorkflowMetadataGitInfo();
      //expect(instance).to.be();
    });

    it('should have the property commitHash (base name: "commit_hash")', function() {
      // uncomment below and update the code to test the property commitHash
      //var instance = new JavascriptMsxSdk.WorkflowMetadataGitInfo();
      //expect(instance).to.be();
    });

    it('should have the property committedBy (base name: "committed_by")', function() {
      // uncomment below and update the code to test the property committedBy
      //var instance = new JavascriptMsxSdk.WorkflowMetadataGitInfo();
      //expect(instance).to.be();
    });

    it('should have the property commitedOn (base name: "commited_on")', function() {
      // uncomment below and update the code to test the property commitedOn
      //var instance = new JavascriptMsxSdk.WorkflowMetadataGitInfo();
      //expect(instance).to.be();
    });

    it('should have the property committedOn (base name: "committed_on")', function() {
      // uncomment below and update the code to test the property committedOn
      //var instance = new JavascriptMsxSdk.WorkflowMetadataGitInfo();
      //expect(instance).to.be();
    });

    it('should have the property commitMessage (base name: "commit_message")', function() {
      // uncomment below and update the code to test the property commitMessage
      //var instance = new JavascriptMsxSdk.WorkflowMetadataGitInfo();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "file_name")', function() {
      // uncomment below and update the code to test the property fileName
      //var instance = new JavascriptMsxSdk.WorkflowMetadataGitInfo();
      //expect(instance).to.be();
    });

  });

}));
