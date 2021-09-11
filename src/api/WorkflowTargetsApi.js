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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import WorkflowTarget from '../model/WorkflowTarget';
import WorkflowTargetCreate from '../model/WorkflowTargetCreate';
import WorkflowTargetUpdate from '../model/WorkflowTargetUpdate';

/**
* WorkflowTargets service.
* @module api/WorkflowTargetsApi
* @version 1.0.5
*/
export default class WorkflowTargetsApi {

    /**
    * Constructs a new WorkflowTargetsApi. 
    * @alias module:api/WorkflowTargetsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a new workflow target.
     * @param {module:model/WorkflowTargetCreate} workflowTargetCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowTarget} and HTTP response
     */
    createWorkflowTargetWithHttpInfo(workflowTargetCreate) {
      let postBody = workflowTargetCreate;
      // verify the required parameter 'workflowTargetCreate' is set
      if (workflowTargetCreate === undefined || workflowTargetCreate === null) {
        throw new Error("Missing the required parameter 'workflowTargetCreate' when calling createWorkflowTarget");
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
      let returnType = WorkflowTarget;
      return this.apiClient.callApi(
        '/workflow/api/v8/targets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new workflow target.
     * @param {module:model/WorkflowTargetCreate} workflowTargetCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowTarget}
     */
    createWorkflowTarget(workflowTargetCreate) {
      return this.createWorkflowTargetWithHttpInfo(workflowTargetCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a workflow target.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWorkflowTargetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWorkflowTarget");
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
        '/workflow/api/v8/targets/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a workflow target.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWorkflowTarget(id) {
      return this.deleteWorkflowTargetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a workflow target.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowTarget} and HTTP response
     */
    getWorkflowTargetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWorkflowTarget");
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
      let returnType = WorkflowTarget;
      return this.apiClient.callApi(
        '/workflow/api/v8/targets/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a workflow target.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowTarget}
     */
    getWorkflowTarget(id) {
      return this.getWorkflowTargetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of workflow targets.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.internal 
     * @param {String} opts.type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkflowTarget>} and HTTP response
     */
    getWorkflowTargetsListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'internal': opts['internal'],
        'type': opts['type']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [WorkflowTarget];
      return this.apiClient.callApi(
        '/workflow/api/v8/targets/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of workflow targets.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.internal 
     * @param {String} opts.type 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkflowTarget>}
     */
    getWorkflowTargetsList(opts) {
      return this.getWorkflowTargetsListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a workflow target.
     * @param {String} id 
     * @param {module:model/WorkflowTargetUpdate} workflowTargetUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowTarget} and HTTP response
     */
    updateWorkflowTargetWithHttpInfo(id, workflowTargetUpdate) {
      let postBody = workflowTargetUpdate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateWorkflowTarget");
      }
      // verify the required parameter 'workflowTargetUpdate' is set
      if (workflowTargetUpdate === undefined || workflowTargetUpdate === null) {
        throw new Error("Missing the required parameter 'workflowTargetUpdate' when calling updateWorkflowTarget");
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
      let returnType = WorkflowTarget;
      return this.apiClient.callApi(
        '/workflow/api/v8/targets/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a workflow target.
     * @param {String} id 
     * @param {module:model/WorkflowTargetUpdate} workflowTargetUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowTarget}
     */
    updateWorkflowTarget(id, workflowTargetUpdate) {
      return this.updateWorkflowTargetWithHttpInfo(id, workflowTargetUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
