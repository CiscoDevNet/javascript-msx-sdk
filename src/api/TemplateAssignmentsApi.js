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
import TemplateAssignment from '../model/TemplateAssignment';
import TemplateAssignmentResponse from '../model/TemplateAssignmentResponse';
import TemplateAssignmentStatusPatch from '../model/TemplateAssignmentStatusPatch';
import TemplateAssignmentsPage from '../model/TemplateAssignmentsPage';

/**
* TemplateAssignments service.
* @module api/TemplateAssignmentsApi
* @version 1.0.8
*/
export default class TemplateAssignmentsApi {

    /**
    * Constructs a new TemplateAssignmentsApi. 
    * @alias module:api/TemplateAssignmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Assigns a template to one or more tenants.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.inheritable 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TemplateAssignmentResponse>} and HTTP response
     */
    batchAssignTemplateWithHttpInfo(id, requestBody, opts) {
      opts = opts || {};
      let postBody = requestBody;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling batchAssignTemplate");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling batchAssignTemplate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'inheritable': opts['inheritable']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [TemplateAssignmentResponse];
      return this.apiClient.callApi(
        '/template/api/v8/templates/{id}/assignments/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Assigns a template to one or more tenants.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.inheritable 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TemplateAssignmentResponse>}
     */
    batchAssignTemplate(id, requestBody, opts) {
      return this.batchAssignTemplateWithHttpInfo(id, requestBody, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unassigns a template from one or more tenants.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TemplateAssignmentResponse>} and HTTP response
     */
    batchUnassignTemplateWithHttpInfo(id, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling batchUnassignTemplate");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling batchUnassignTemplate");
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
      let returnType = [TemplateAssignmentResponse];
      return this.apiClient.callApi(
        '/template/api/v8/templates/{id}/assignments/remove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Unassigns a template from one or more tenants.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TemplateAssignmentResponse>}
     */
    batchUnassignTemplate(id, requestBody) {
      return this.batchUnassignTemplateWithHttpInfo(id, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets a template assignment.
     * @param {String} id ID of template assignment record.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateAssignment} and HTTP response
     */
    getAssignmentWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAssignment");
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
      let returnType = TemplateAssignment;
      return this.apiClient.callApi(
        '/template/api/v8/templates/assignments/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a template assignment.
     * @param {String} id ID of template assignment record.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateAssignment}
     */
    getAssignment(id) {
      return this.getAssignmentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets a template assignment history.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TemplateAssignment>} and HTTP response
     */
    getAssignmentHistoryWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAssignmentHistory");
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
      let returnType = [TemplateAssignment];
      return this.apiClient.callApi(
        '/template/api/v8/templates/assignments/{id}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets a template assignment history.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TemplateAssignment>}
     */
    getAssignmentHistory(id) {
      return this.getAssignmentHistoryWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of template assignments.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.templateId 
     * @param {String} opts.tenantId 
     * @param {Boolean} opts.calculateTotalItems 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateAssignmentsPage} and HTTP response
     */
    getTemplateAssignmentsPageWithHttpInfo(page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getTemplateAssignmentsPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getTemplateAssignmentsPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'templateId': opts['templateId'],
        'tenantId': opts['tenantId'],
        'page': page,
        'pageSize': pageSize,
        'calculateTotalItems': opts['calculateTotalItems']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TemplateAssignmentsPage;
      return this.apiClient.callApi(
        '/template/api/v8/templates/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a page of template assignments.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.templateId 
     * @param {String} opts.tenantId 
     * @param {Boolean} opts.calculateTotalItems 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateAssignmentsPage}
     */
    getTemplateAssignmentsPage(page, pageSize, opts) {
      return this.getTemplateAssignmentsPageWithHttpInfo(page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a template assignment status.
     * @param {String} id ID of template assignment record.
     * @param {module:model/TemplateAssignmentStatusPatch} templateAssignmentStatusPatch 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateAssignment} and HTTP response
     */
    updateAssignmentStatusWithHttpInfo(id, templateAssignmentStatusPatch) {
      let postBody = templateAssignmentStatusPatch;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateAssignmentStatus");
      }
      // verify the required parameter 'templateAssignmentStatusPatch' is set
      if (templateAssignmentStatusPatch === undefined || templateAssignmentStatusPatch === null) {
        throw new Error("Missing the required parameter 'templateAssignmentStatusPatch' when calling updateAssignmentStatus");
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
      let returnType = TemplateAssignment;
      return this.apiClient.callApi(
        '/template/api/v8/templates/assignments/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a template assignment status.
     * @param {String} id ID of template assignment record.
     * @param {module:model/TemplateAssignmentStatusPatch} templateAssignmentStatusPatch 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateAssignment}
     */
    updateAssignmentStatus(id, templateAssignmentStatusPatch) {
      return this.updateAssignmentStatusWithHttpInfo(id, templateAssignmentStatusPatch)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
