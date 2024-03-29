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
import WorkflowSchema from '../model/WorkflowSchema';
import WorkflowSchemaByTypeResponse from '../model/WorkflowSchemaByTypeResponse';

/**
* WorkflowSchemas service.
* @module api/WorkflowSchemasApi
* @version 1.0.10
*/
export default class WorkflowSchemasApi {

    /**
    * Constructs a new WorkflowSchemasApi. 
    * @alias module:api/WorkflowSchemasApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a workflow schema.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.schemaType  (default to 'view')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkflowSchemaByTypeResponse} and HTTP response
     */
    getWorkflowSchemaWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getWorkflowSchema");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'schemaType': opts['schemaType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WorkflowSchemaByTypeResponse;
      return this.apiClient.callApi(
        '/workflow/api/v8/schemas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a workflow schema.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.schemaType  (default to 'view')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkflowSchemaByTypeResponse}
     */
    getWorkflowSchema(id, opts) {
      return this.getWorkflowSchemaWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of workflow schemas.
     * @param {String} baseType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.schemaType  (default to 'view')
     * @param {Boolean} opts.variableType  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkflowSchema>} and HTTP response
     */
    getWorkflowSchemasListWithHttpInfo(baseType, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'baseType' is set
      if (baseType === undefined || baseType === null) {
        throw new Error("Missing the required parameter 'baseType' when calling getWorkflowSchemasList");
      }

      let pathParams = {
      };
      let queryParams = {
        'baseType': baseType,
        'schemaType': opts['schemaType'],
        'variableType': opts['variableType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [WorkflowSchema];
      return this.apiClient.callApi(
        '/workflow/api/v8/schemas/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of workflow schemas.
     * @param {String} baseType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.schemaType  (default to 'view')
     * @param {Boolean} opts.variableType  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkflowSchema>}
     */
    getWorkflowSchemasList(baseType, opts) {
      return this.getWorkflowSchemasListWithHttpInfo(baseType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
