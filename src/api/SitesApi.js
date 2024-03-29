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
import Error from '../model/Error';
import Site from '../model/Site';
import SiteCreate from '../model/SiteCreate';
import SiteUpdate from '../model/SiteUpdate';
import SitesPage from '../model/SitesPage';

/**
* Sites service.
* @module api/SitesApi
* @version 1.0.10
*/
export default class SitesApi {

    /**
    * Constructs a new SitesApi. 
    * @alias module:api/SitesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add devices to a site.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Site} and HTTP response
     */
    addDevicesToSiteWithHttpInfo(id, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addDevicesToSite");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling addDevicesToSite");
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
      let returnType = Site;
      return this.apiClient.callApi(
        '/manage/api/v8/sites/{id}/devices/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add devices to a site.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Site}
     */
    addDevicesToSite(id, requestBody) {
      return this.addDevicesToSiteWithHttpInfo(id, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add services to a site.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Site} and HTTP response
     */
    addServicesToSiteWithHttpInfo(id, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling addServicesToSite");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling addServicesToSite");
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
      let returnType = Site;
      return this.apiClient.callApi(
        '/manage/api/v8/sites/{id}/services/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add services to a site.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Site}
     */
    addServicesToSite(id, requestBody) {
      return this.addServicesToSiteWithHttpInfo(id, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a new site.
     * @param {module:model/SiteCreate} siteCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Site} and HTTP response
     */
    createSiteWithHttpInfo(siteCreate) {
      let postBody = siteCreate;
      // verify the required parameter 'siteCreate' is set
      if (siteCreate === undefined || siteCreate === null) {
        throw new Error("Missing the required parameter 'siteCreate' when calling createSite");
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
      let returnType = Site;
      return this.apiClient.callApi(
        '/manage/api/v8/sites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new site.
     * @param {module:model/SiteCreate} siteCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Site}
     */
    createSite(siteCreate) {
      return this.createSiteWithHttpInfo(siteCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a site.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSiteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteSite");
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
        '/manage/api/v8/sites/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a site.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSite(id) {
      return this.deleteSiteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a site.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showImage  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Site} and HTTP response
     */
    getSiteWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSite");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'showImage': opts['showImage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Site;
      return this.apiClient.callApi(
        '/manage/api/v8/sites/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a site.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showImage  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Site}
     */
    getSite(id, opts) {
      return this.getSiteWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of Sites. Only one filter is supported at a time.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId 
     * @param {Boolean} opts.includeSubtenants  (default to false)
     * @param {String} opts.serviceId 
     * @param {String} opts.serviceType 
     * @param {String} opts.deviceId 
     * @param {String} opts.parentId 
     * @param {String} opts.type 
     * @param {String} opts.managingControlPlaneId 
     * @param {Boolean} opts.showImage  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SitesPage} and HTTP response
     */
    getSitesPageWithHttpInfo(page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getSitesPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getSitesPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'tenantId': opts['tenantId'],
        'includeSubtenants': opts['includeSubtenants'],
        'serviceId': opts['serviceId'],
        'serviceType': opts['serviceType'],
        'deviceId': opts['deviceId'],
        'parentId': opts['parentId'],
        'type': opts['type'],
        'managingControlPlaneId': opts['managingControlPlaneId'],
        'showImage': opts['showImage'],
        'page': page,
        'pageSize': pageSize
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SitesPage;
      return this.apiClient.callApi(
        '/manage/api/v8/sites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a page of Sites. Only one filter is supported at a time.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId 
     * @param {Boolean} opts.includeSubtenants  (default to false)
     * @param {String} opts.serviceId 
     * @param {String} opts.serviceType 
     * @param {String} opts.deviceId 
     * @param {String} opts.parentId 
     * @param {String} opts.type 
     * @param {String} opts.managingControlPlaneId 
     * @param {Boolean} opts.showImage  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SitesPage}
     */
    getSitesPage(page, pageSize, opts) {
      return this.getSitesPageWithHttpInfo(page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Removes devices from a site.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Site} and HTTP response
     */
    removeDevicesFromSiteWithHttpInfo(id, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeDevicesFromSite");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling removeDevicesFromSite");
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
      let returnType = Site;
      return this.apiClient.callApi(
        '/manage/api/v8/sites/{id}/devices/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Removes devices from a site.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Site}
     */
    removeDevicesFromSite(id, requestBody) {
      return this.removeDevicesFromSiteWithHttpInfo(id, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove services from a site.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Site} and HTTP response
     */
    removeServicesFromSiteWithHttpInfo(id, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeServicesFromSite");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling removeServicesFromSite");
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
      let returnType = Site;
      return this.apiClient.callApi(
        '/manage/api/v8/sites/{id}/services/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove services from a site.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Site}
     */
    removeServicesFromSite(id, requestBody) {
      return this.removeServicesFromSiteWithHttpInfo(id, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a site.
     * @param {String} id 
     * @param {module:model/SiteUpdate} siteUpdate 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sendNotification  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Site} and HTTP response
     */
    updateSiteWithHttpInfo(id, siteUpdate, opts) {
      opts = opts || {};
      let postBody = siteUpdate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSite");
      }
      // verify the required parameter 'siteUpdate' is set
      if (siteUpdate === undefined || siteUpdate === null) {
        throw new Error("Missing the required parameter 'siteUpdate' when calling updateSite");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'sendNotification': opts['sendNotification']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Site;
      return this.apiClient.callApi(
        '/manage/api/v8/sites/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a site.
     * @param {String} id 
     * @param {module:model/SiteUpdate} siteUpdate 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sendNotification  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Site}
     */
    updateSite(id, siteUpdate, opts) {
      return this.updateSiteWithHttpInfo(id, siteUpdate, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
