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


import ApiClient from "../ApiClient";
import Device from '../model/Device';
import DeviceCreate from '../model/DeviceCreate';
import DeviceTemplateAttachRequest from '../model/DeviceTemplateAttachRequest';
import DeviceTemplateHistory from '../model/DeviceTemplateHistory';
import DeviceTemplateUpdateRequest from '../model/DeviceTemplateUpdateRequest';
import DevicesPage from '../model/DevicesPage';
import Error from '../model/Error';

/**
* Devices service.
* @module api/DevicesApi
* @version 1.0.2
*/
export default class DevicesApi {

    /**
    * Constructs a new DevicesApi. 
    * @alias module:api/DevicesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Attaches one or more device templates to a device instance.
     * @param {String} id 
     * @param {module:model/DeviceTemplateAttachRequest} deviceTemplateAttachRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DeviceTemplateHistory>} and HTTP response
     */
    attachDeviceTemplatesWithHttpInfo(id, deviceTemplateAttachRequest) {
      let postBody = deviceTemplateAttachRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling attachDeviceTemplates");
      }
      // verify the required parameter 'deviceTemplateAttachRequest' is set
      if (deviceTemplateAttachRequest === undefined || deviceTemplateAttachRequest === null) {
        throw new Error("Missing the required parameter 'deviceTemplateAttachRequest' when calling attachDeviceTemplates");
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
      let returnType = [DeviceTemplateHistory];
      return this.apiClient.callApi(
        '/manage/api/v8/devices/{id}/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Attaches one or more device templates to a device instance.
     * @param {String} id 
     * @param {module:model/DeviceTemplateAttachRequest} deviceTemplateAttachRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DeviceTemplateHistory>}
     */
    attachDeviceTemplates(id, deviceTemplateAttachRequest) {
      return this.attachDeviceTemplatesWithHttpInfo(id, deviceTemplateAttachRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a device.
     * @param {module:model/DeviceCreate} deviceCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Device} and HTTP response
     */
    createDeviceWithHttpInfo(deviceCreate) {
      let postBody = deviceCreate;
      // verify the required parameter 'deviceCreate' is set
      if (deviceCreate === undefined || deviceCreate === null) {
        throw new Error("Missing the required parameter 'deviceCreate' when calling createDevice");
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
      let returnType = Device;
      return this.apiClient.callApi(
        '/manage/api/v8/devices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a device.
     * @param {module:model/DeviceCreate} deviceCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Device}
     */
    createDevice(deviceCreate) {
      return this.createDeviceWithHttpInfo(deviceCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDeviceWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDevice");
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
        '/manage/api/v8/devices/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDevice(id) {
      return this.deleteDeviceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Detaches a template from a device.
     * @param {String} id 
     * @param {String} templateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DeviceTemplateHistory>} and HTTP response
     */
    detachDeviceTemplateWithHttpInfo(id, templateId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling detachDeviceTemplate");
      }
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling detachDeviceTemplate");
      }

      let pathParams = {
        'id': id,
        'templateId': templateId
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
      let returnType = [DeviceTemplateHistory];
      return this.apiClient.callApi(
        '/manage/api/v8/devices/{id}/templates/{templateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Detaches a template from a device.
     * @param {String} id 
     * @param {String} templateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DeviceTemplateHistory>}
     */
    detachDeviceTemplate(id, templateId) {
      return this.detachDeviceTemplateWithHttpInfo(id, templateId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Detach device templates that are already attached to a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DeviceTemplateHistory>} and HTTP response
     */
    detachDeviceTemplatesWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling detachDeviceTemplates");
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
      let returnType = [DeviceTemplateHistory];
      return this.apiClient.callApi(
        '/manage/api/v8/devices/{id}/templates', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Detach device templates that are already attached to a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DeviceTemplateHistory>}
     */
    detachDeviceTemplates(id) {
      return this.detachDeviceTemplatesWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Device} and HTTP response
     */
    getDeviceWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDevice");
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
      let returnType = Device;
      return this.apiClient.callApi(
        '/manage/api/v8/devices/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Device}
     */
    getDevice(id) {
      return this.getDeviceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the running configuration for a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    getDeviceConfigWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDeviceConfig");
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/manage/api/v8/devices/{id}/config', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the running configuration for a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    getDeviceConfig(id) {
      return this.getDeviceConfigWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns device template history.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.templateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DeviceTemplateHistory>} and HTTP response
     */
    getDeviceTemplateHistoryWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDeviceTemplateHistory");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'templateId': opts['templateId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DeviceTemplateHistory];
      return this.apiClient.callApi(
        '/manage/api/v8/devices/{id}/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns device template history.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.templateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DeviceTemplateHistory>}
     */
    getDeviceTemplateHistory(id, opts) {
      return this.getDeviceTemplateHistoryWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of devices.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.deviceIds 
     * @param {Array.<String>} opts.serviceIds 
     * @param {Array.<String>} opts.types 
     * @param {Array.<String>} opts.serialKeys 
     * @param {Array.<String>} opts.serviceTypes 
     * @param {Array.<String>} opts.models 
     * @param {Array.<String>} opts.subtypes 
     * @param {Array.<String>} opts.names 
     * @param {Array.<String>} opts.versions 
     * @param {Array.<String>} opts.tenantIds 
     * @param {Array.<String>} opts.severities 
     * @param {String} opts.sortBy 
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DevicesPage} and HTTP response
     */
    getDevicesPageWithHttpInfo(page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getDevicesPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getDevicesPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'deviceIds': this.apiClient.buildCollectionParam(opts['deviceIds'], 'multi'),
        'serviceIds': this.apiClient.buildCollectionParam(opts['serviceIds'], 'multi'),
        'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),
        'serialKeys': this.apiClient.buildCollectionParam(opts['serialKeys'], 'multi'),
        'serviceTypes': this.apiClient.buildCollectionParam(opts['serviceTypes'], 'multi'),
        'models': this.apiClient.buildCollectionParam(opts['models'], 'multi'),
        'subtypes': this.apiClient.buildCollectionParam(opts['subtypes'], 'multi'),
        'names': this.apiClient.buildCollectionParam(opts['names'], 'multi'),
        'versions': this.apiClient.buildCollectionParam(opts['versions'], 'multi'),
        'tenantIds': this.apiClient.buildCollectionParam(opts['tenantIds'], 'multi'),
        'severities': this.apiClient.buildCollectionParam(opts['severities'], 'multi'),
        'page': page,
        'pageSize': pageSize,
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DevicesPage;
      return this.apiClient.callApi(
        '/manage/api/v8/devices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a page of devices.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.deviceIds 
     * @param {Array.<String>} opts.serviceIds 
     * @param {Array.<String>} opts.types 
     * @param {Array.<String>} opts.serialKeys 
     * @param {Array.<String>} opts.serviceTypes 
     * @param {Array.<String>} opts.models 
     * @param {Array.<String>} opts.subtypes 
     * @param {Array.<String>} opts.names 
     * @param {Array.<String>} opts.versions 
     * @param {Array.<String>} opts.tenantIds 
     * @param {Array.<String>} opts.severities 
     * @param {String} opts.sortBy 
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DevicesPage}
     */
    getDevicesPage(page, pageSize, opts) {
      return this.getDevicesPageWithHttpInfo(page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Dedeploys a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    redeployDeviceWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling redeployDevice");
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
        '/manage/api/v8/devices/{id}/redeploy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Dedeploys a device.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    redeployDevice(id) {
      return this.redeployDeviceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update device templates that are already attached to a device.
     * @param {String} id 
     * @param {module:model/DeviceTemplateUpdateRequest} deviceTemplateUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DeviceTemplateHistory>} and HTTP response
     */
    updateDeviceTemplatesWithHttpInfo(id, deviceTemplateUpdateRequest) {
      let postBody = deviceTemplateUpdateRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateDeviceTemplates");
      }
      // verify the required parameter 'deviceTemplateUpdateRequest' is set
      if (deviceTemplateUpdateRequest === undefined || deviceTemplateUpdateRequest === null) {
        throw new Error("Missing the required parameter 'deviceTemplateUpdateRequest' when calling updateDeviceTemplates");
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
      let returnType = [DeviceTemplateHistory];
      return this.apiClient.callApi(
        '/manage/api/v8/devices/{id}/templates', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update device templates that are already attached to a device.
     * @param {String} id 
     * @param {module:model/DeviceTemplateUpdateRequest} deviceTemplateUpdateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DeviceTemplateHistory>}
     */
    updateDeviceTemplates(id, deviceTemplateUpdateRequest) {
      return this.updateDeviceTemplatesWithHttpInfo(id, deviceTemplateUpdateRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
