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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import TemplateApplication from '../model/TemplateApplication';
import TemplateApplicationCreate from '../model/TemplateApplicationCreate';
import TemplateApplicationStatusPatch from '../model/TemplateApplicationStatusPatch';
import TemplateApplicationsPage from '../model/TemplateApplicationsPage';

/**
* TemplateApplications service.
* @module api/TemplateApplicationsApi
* @version 1.0.8
*/
export default class TemplateApplicationsApi {

    /**
    * Constructs a new TemplateApplicationsApi. 
    * @alias module:api/TemplateApplicationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Applies a template to a target.
     * @param {String} id 
     * @param {module:model/TemplateApplicationCreate} templateApplicationCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateApplication} and HTTP response
     */
    applyTemplateWithHttpInfo(id, templateApplicationCreate) {
      let postBody = templateApplicationCreate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling applyTemplate");
      }
      // verify the required parameter 'templateApplicationCreate' is set
      if (templateApplicationCreate === undefined || templateApplicationCreate === null) {
        throw new Error("Missing the required parameter 'templateApplicationCreate' when calling applyTemplate");
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
      let returnType = TemplateApplication;
      return this.apiClient.callApi(
        '/template/api/v8/templates/{id}/applications', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Applies a template to a target.
     * @param {String} id 
     * @param {module:model/TemplateApplicationCreate} templateApplicationCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateApplication}
     */
    applyTemplate(id, templateApplicationCreate) {
      return this.applyTemplateWithHttpInfo(id, templateApplicationCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a template application.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTemplateApplicationWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTemplateApplication");
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
        '/template/api/v8/templates/applications/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a template application.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTemplateApplication(id) {
      return this.deleteTemplateApplicationWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets a template application.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateApplication} and HTTP response
     */
    getTemplateApplicationWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTemplateApplication");
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
      let returnType = TemplateApplication;
      return this.apiClient.callApi(
        '/template/api/v8/templates/applications/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a template application.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateApplication}
     */
    getTemplateApplication(id) {
      return this.getTemplateApplicationWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets a template application history.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TemplateApplication>} and HTTP response
     */
    getTemplateApplicationHistoryWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTemplateApplicationHistory");
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
      let returnType = [TemplateApplication];
      return this.apiClient.callApi(
        '/template/api/v8/templates/applications/{id}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a template application history.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TemplateApplication>}
     */
    getTemplateApplicationHistory(id) {
      return this.getTemplateApplicationHistoryWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a page of template applications.
     * @param {String} tenantId 
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.templateId 
     * @param {String} opts.targetId 
     * @param {String} opts.targetType 
     * @param {Boolean} opts.calculateTotalItems 
     * @param {module:model/String} opts.sortBy  (default to 'createdOn')
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateApplicationsPage} and HTTP response
     */
    getTemplateApplicationsPageWithHttpInfo(tenantId, page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getTemplateApplicationsPage");
      }
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getTemplateApplicationsPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getTemplateApplicationsPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'templateId': opts['templateId'],
        'tenantId': tenantId,
        'targetId': opts['targetId'],
        'targetType': opts['targetType'],
        'page': page,
        'pageSize': pageSize,
        'calculateTotalItems': opts['calculateTotalItems'],
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
      let returnType = TemplateApplicationsPage;
      return this.apiClient.callApi(
        '/template/api/v8/templates/applications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a page of template applications.
     * @param {String} tenantId 
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.templateId 
     * @param {String} opts.targetId 
     * @param {String} opts.targetType 
     * @param {Boolean} opts.calculateTotalItems 
     * @param {module:model/String} opts.sortBy  (default to 'createdOn')
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateApplicationsPage}
     */
    getTemplateApplicationsPage(tenantId, page, pageSize, opts) {
      return this.getTemplateApplicationsPageWithHttpInfo(tenantId, page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates an application status.
     * @param {String} id 
     * @param {module:model/TemplateApplicationStatusPatch} templateApplicationStatusPatch 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateApplication} and HTTP response
     */
    updateApplicationStatusWithHttpInfo(id, templateApplicationStatusPatch) {
      let postBody = templateApplicationStatusPatch;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateApplicationStatus");
      }
      // verify the required parameter 'templateApplicationStatusPatch' is set
      if (templateApplicationStatusPatch === undefined || templateApplicationStatusPatch === null) {
        throw new Error("Missing the required parameter 'templateApplicationStatusPatch' when calling updateApplicationStatus");
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
      let returnType = TemplateApplication;
      return this.apiClient.callApi(
        '/template/api/v8/templates/applications/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates an application status.
     * @param {String} id 
     * @param {module:model/TemplateApplicationStatusPatch} templateApplicationStatusPatch 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateApplication}
     */
    updateApplicationStatus(id, templateApplicationStatusPatch) {
      return this.updateApplicationStatusWithHttpInfo(id, templateApplicationStatusPatch)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}