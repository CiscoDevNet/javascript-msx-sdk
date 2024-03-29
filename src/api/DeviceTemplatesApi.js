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


import ApiClient from "../ApiClient";
import DeviceTemplate from '../model/DeviceTemplate';
import DeviceTemplateAccess from '../model/DeviceTemplateAccess';
import DeviceTemplateAccessResponse from '../model/DeviceTemplateAccessResponse';
import DeviceTemplateCreate from '../model/DeviceTemplateCreate';
import DeviceTemplateVersionCreate from '../model/DeviceTemplateVersionCreate';
import Error from '../model/Error';

/**
* DeviceTemplates service.
* @module api/DeviceTemplatesApi
* @version 1.0.10
*/
export default class DeviceTemplatesApi {

    /**
    * Constructs a new DeviceTemplatesApi. 
    * @alias module:api/DeviceTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a device template.
     * @param {module:model/DeviceTemplateCreate} deviceTemplateCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceTemplate} and HTTP response
     */
    createDeviceTemplateWithHttpInfo(deviceTemplateCreate) {
      let postBody = deviceTemplateCreate;
      // verify the required parameter 'deviceTemplateCreate' is set
      if (deviceTemplateCreate === undefined || deviceTemplateCreate === null) {
        throw new Error("Missing the required parameter 'deviceTemplateCreate' when calling createDeviceTemplate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeviceTemplate;
      return this.apiClient.callApi(
        '/manage/api/v8/devicetemplates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a device template.
     * @param {module:model/DeviceTemplateCreate} deviceTemplateCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceTemplate}
     */
    createDeviceTemplate(deviceTemplateCreate) {
      return this.createDeviceTemplateWithHttpInfo(deviceTemplateCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a new version of an existing device template.
     * @param {module:model/DeviceTemplateVersionCreate} deviceTemplateVersionCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceTemplate} and HTTP response
     */
    createDeviceTemplateVersionWithHttpInfo(deviceTemplateVersionCreate) {
      let postBody = deviceTemplateVersionCreate;
      // verify the required parameter 'deviceTemplateVersionCreate' is set
      if (deviceTemplateVersionCreate === undefined || deviceTemplateVersionCreate === null) {
        throw new Error("Missing the required parameter 'deviceTemplateVersionCreate' when calling createDeviceTemplateVersion");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeviceTemplate;
      return this.apiClient.callApi(
        '/manage/api/v8/devicetemplates/versions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new version of an existing device template.
     * @param {module:model/DeviceTemplateVersionCreate} deviceTemplateVersionCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceTemplate}
     */
    createDeviceTemplateVersion(deviceTemplateVersionCreate) {
      return this.createDeviceTemplateVersionWithHttpInfo(deviceTemplateVersionCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a device template.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDeviceTemplateWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDeviceTemplate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/manage/api/v8/devicetemplates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a device template.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDeviceTemplate(id) {
      return this.deleteDeviceTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a device template.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceTemplate} and HTTP response
     */
    getDeviceTemplateWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDeviceTemplate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeviceTemplate;
      return this.apiClient.callApi(
        '/manage/api/v8/devicetemplates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a device template.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceTemplate}
     */
    getDeviceTemplate(id) {
      return this.getDeviceTemplateWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of device templates.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allVersions  (default to false)
     * @param {String} opts.serviceType 
     * @param {String} opts.tenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DeviceTemplate>} and HTTP response
     */
    getDeviceTemplatesListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'allVersions': opts['allVersions'],
        'serviceType': opts['serviceType'],
        'tenantId': opts['tenantId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DeviceTemplate];
      return this.apiClient.callApi(
        '/manage/api/v8/devicetemplates/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of device templates.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allVersions  (default to false)
     * @param {String} opts.serviceType 
     * @param {String} opts.tenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DeviceTemplate>}
     */
    getDeviceTemplatesList(opts) {
      return this.getDeviceTemplatesListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * API to scan parameters from the device template XML.
     * @param {Object} opts Optional parameters
     * @param {File} opts.file The XML template file of a device template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    scanDeviceTemplateParametersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/manage/api/v8/devicetemplates/parameters/scan', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * API to scan parameters from the device template XML.
     * @param {Object} opts Optional parameters
     * @param {File} opts.file The XML template file of a device template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    scanDeviceTemplateParameters(opts) {
      return this.scanDeviceTemplateParametersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates device template access.
     * @param {String} id 
     * @param {module:model/DeviceTemplateAccess} deviceTemplateAccess 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceTemplateAccessResponse} and HTTP response
     */
    updateDeviceTemplateAccessWithHttpInfo(id, deviceTemplateAccess) {
      let postBody = deviceTemplateAccess;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDeviceTemplateAccess");
      }
      // verify the required parameter 'deviceTemplateAccess' is set
      if (deviceTemplateAccess === undefined || deviceTemplateAccess === null) {
        throw new Error("Missing the required parameter 'deviceTemplateAccess' when calling updateDeviceTemplateAccess");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = DeviceTemplateAccessResponse;
      return this.apiClient.callApi(
        '/manage/api/v8/devicetemplates/{id}/access', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates device template access.
     * @param {String} id 
     * @param {module:model/DeviceTemplateAccess} deviceTemplateAccess 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceTemplateAccessResponse}
     */
    updateDeviceTemplateAccess(id, deviceTemplateAccess) {
      return this.updateDeviceTemplateAccessWithHttpInfo(id, deviceTemplateAccess)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
