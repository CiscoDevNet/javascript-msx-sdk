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
import WorkflowEvent from '../model/WorkflowEvent';
import WorkflowEventCreate from '../model/WorkflowEventCreate';
import WorkflowEventUpdate from '../model/WorkflowEventUpdate';

/**
* WorkflowEvents service.
* @module api/WorkflowEventsApi
* @version 1.0.8
*/
export default class WorkflowEventsApi {

    /**
    * Constructs a new WorkflowEventsApi. 
    * @alias module:api/WorkflowEventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a new workflow event.
     * @param {module:model/WorkflowEventCreate} workflowEventCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowEvent} and HTTP response
     */
    createWorkflowEventWithHttpInfo(workflowEventCreate) {
      let postBody = workflowEventCreate;
      // verify the required parameter 'workflowEventCreate' is set
      if (workflowEventCreate === undefined || workflowEventCreate === null) {
        throw new Error("Missing the required parameter 'workflowEventCreate' when calling createWorkflowEvent");
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
      let returnType = WorkflowEvent;
      return this.apiClient.callApi(
        '/workflow/api/v8/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new workflow event.
     * @param {module:model/WorkflowEventCreate} workflowEventCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowEvent}
     */
    createWorkflowEvent(workflowEventCreate) {
      return this.createWorkflowEventWithHttpInfo(workflowEventCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a workflow event.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWorkflowEventWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteWorkflowEvent");
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
        '/workflow/api/v8/events/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a workflow event.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWorkflowEvent(id) {
      return this.deleteWorkflowEventWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a workflow event.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowEvent} and HTTP response
     */
    getWorkflowEventWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWorkflowEvent");
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
      let returnType = WorkflowEvent;
      return this.apiClient.callApi(
        '/workflow/api/v8/events/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a workflow event.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowEvent}
     */
    getWorkflowEvent(id) {
      return this.getWorkflowEventWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of workflow events.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkflowEvent>} and HTTP response
     */
    getWorkflowEventsListWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = [WorkflowEvent];
      return this.apiClient.callApi(
        '/workflow/api/v8/events/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of workflow events.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkflowEvent>}
     */
    getWorkflowEventsList() {
      return this.getWorkflowEventsListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a workflow event.
     * @param {String} id 
     * @param {module:model/WorkflowEventUpdate} workflowEventUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowEvent} and HTTP response
     */
    updateWorkflowEventWithHttpInfo(id, workflowEventUpdate) {
      let postBody = workflowEventUpdate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateWorkflowEvent");
      }
      // verify the required parameter 'workflowEventUpdate' is set
      if (workflowEventUpdate === undefined || workflowEventUpdate === null) {
        throw new Error("Missing the required parameter 'workflowEventUpdate' when calling updateWorkflowEvent");
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
      let returnType = WorkflowEvent;
      return this.apiClient.callApi(
        '/workflow/api/v8/events/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a workflow event.
     * @param {String} id 
     * @param {module:model/WorkflowEventUpdate} workflowEventUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowEvent}
     */
    updateWorkflowEvent(id, workflowEventUpdate) {
      return this.updateWorkflowEventWithHttpInfo(id, workflowEventUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
