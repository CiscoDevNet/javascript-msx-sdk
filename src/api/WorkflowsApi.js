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
import StartWorkflowResponse from '../model/StartWorkflowResponse';
import ValidateWorkflowResponse from '../model/ValidateWorkflowResponse';
import Workflow from '../model/Workflow';
import WorkflowMapping from '../model/WorkflowMapping';
import WorkflowStartConfig from '../model/WorkflowStartConfig';

/**
* Workflows service.
* @module api/WorkflowsApi
* @version 1.0.10
*/
export default class WorkflowsApi {

    /**
    * Constructs a new WorkflowsApi. 
    * @alias module:api/WorkflowsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a workflow.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWorkflowWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWorkflow");
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
        '/workflow/api/v8/workflows/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a workflow.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWorkflow(id) {
      return this.deleteWorkflowWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Exports a workflow.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: Object}>} and HTTP response
     */
    exportWorkflowWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling exportWorkflow");
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
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/workflow/api/v8/workflows/{id}/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Exports a workflow.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: Object}>}
     */
    exportWorkflow(id) {
      return this.exportWorkflowWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a workflow.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Workflow} and HTTP response
     */
    getWorkflowWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWorkflow");
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
      let returnType = Workflow;
      return this.apiClient.callApi(
        '/workflow/api/v8/workflows/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a workflow.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Workflow}
     */
    getWorkflow(id) {
      return this.getWorkflowWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a workflow start config.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowStartConfig} and HTTP response
     */
    getWorkflowStartConfigWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWorkflowStartConfig");
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
      let returnType = WorkflowStartConfig;
      return this.apiClient.callApi(
        '/workflow/api/v8/workflows/{id}/startconfig', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a workflow start config.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowStartConfig}
     */
    getWorkflowStartConfig(id) {
      return this.getWorkflowStartConfigWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of workflows.
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId 
     * @param {Boolean} opts.atomic  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Workflow>} and HTTP response
     */
    getWorkflowsListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'tenantId': opts['tenantId'],
        'atomic': opts['atomic']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Workflow];
      return this.apiClient.callApi(
        '/workflow/api/v8/workflows/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of workflows.
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId 
     * @param {Boolean} opts.atomic  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Workflow>}
     */
    getWorkflowsList(opts) {
      return this.getWorkflowsListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Imports a workflow.
     * @param {Object.<String, {String: Object}>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tenantIds 
     * @param {Boolean} opts.global 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowMapping} and HTTP response
     */
    importWorkflowWithHttpInfo(requestBody, opts) {
      opts = opts || {};
      let postBody = requestBody;
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling importWorkflow");
      }

      let pathParams = {
      };
      let queryParams = {
        'tenantIds': this.apiClient.buildCollectionParam(opts['tenantIds'], 'multi'),
        'global': opts['global']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WorkflowMapping;
      return this.apiClient.callApi(
        '/workflow/api/v8/workflows', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Imports a workflow.
     * @param {Object.<String, {String: Object}>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tenantIds 
     * @param {Boolean} opts.global 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowMapping}
     */
    importWorkflow(requestBody, opts) {
      return this.importWorkflowWithHttpInfo(requestBody, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Starts a workflow.
     * @param {String} id 
     * @param {module:model/WorkflowStartConfig} workflowStartConfig 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sync 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StartWorkflowResponse>} and HTTP response
     */
    startWorkflowWithHttpInfo(id, workflowStartConfig, opts) {
      opts = opts || {};
      let postBody = workflowStartConfig;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling startWorkflow");
      }
      // verify the required parameter 'workflowStartConfig' is set
      if (workflowStartConfig === undefined || workflowStartConfig === null) {
        throw new Error("Missing the required parameter 'workflowStartConfig' when calling startWorkflow");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'sync': opts['sync']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [StartWorkflowResponse];
      return this.apiClient.callApi(
        '/workflow/api/v8/workflows/{id}/start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Starts a workflow.
     * @param {String} id 
     * @param {module:model/WorkflowStartConfig} workflowStartConfig 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.sync 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StartWorkflowResponse>}
     */
    startWorkflow(id, workflowStartConfig, opts) {
      return this.startWorkflowWithHttpInfo(id, workflowStartConfig, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a workflow.
     * @param {String} id 
     * @param {Object.<String, {String: Object}>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tenantIds 
     * @param {Boolean} opts.global 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowMapping} and HTTP response
     */
    updateWorkflowWithHttpInfo(id, requestBody, opts) {
      opts = opts || {};
      let postBody = requestBody;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateWorkflow");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling updateWorkflow");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'tenantIds': this.apiClient.buildCollectionParam(opts['tenantIds'], 'multi'),
        'global': opts['global']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WorkflowMapping;
      return this.apiClient.callApi(
        '/workflow/api/v8/workflows/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a workflow.
     * @param {String} id 
     * @param {Object.<String, {String: Object}>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tenantIds 
     * @param {Boolean} opts.global 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowMapping}
     */
    updateWorkflow(id, requestBody, opts) {
      return this.updateWorkflowWithHttpInfo(id, requestBody, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validates a workflow.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ValidateWorkflowResponse} and HTTP response
     */
    validateWorkflowWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling validateWorkflow");
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
      let returnType = ValidateWorkflowResponse;
      return this.apiClient.callApi(
        '/workflow/api/v8/workflows/{id}/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Validates a workflow.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ValidateWorkflowResponse}
     */
    validateWorkflow(id) {
      return this.validateWorkflowWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
