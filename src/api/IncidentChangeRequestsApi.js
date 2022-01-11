/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ChangeRequest from '../model/ChangeRequest';
import ChangeRequestCreate from '../model/ChangeRequestCreate';
import ChangeRequestUpdate from '../model/ChangeRequestUpdate';
import ChangeRequestsPage from '../model/ChangeRequestsPage';
import Error from '../model/Error';

/**
* IncidentChangeRequests service.
* @module api/IncidentChangeRequestsApi
* @version 1.0.9
*/
export default class IncidentChangeRequestsApi {

    /**
    * Constructs a new IncidentChangeRequestsApi. 
    * @alias module:api/IncidentChangeRequestsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a change request.
     * @param {module:model/ChangeRequestCreate} changeRequestCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChangeRequest} and HTTP response
     */
    createChangeRequestWithHttpInfo(changeRequestCreate) {
      let postBody = changeRequestCreate;
      // verify the required parameter 'changeRequestCreate' is set
      if (changeRequestCreate === undefined || changeRequestCreate === null) {
        throw new Error("Missing the required parameter 'changeRequestCreate' when calling createChangeRequest");
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
      let returnType = ChangeRequest;
      return this.apiClient.callApi(
        '/incident/api/v8/changerequests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a change request.
     * @param {module:model/ChangeRequestCreate} changeRequestCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChangeRequest}
     */
    createChangeRequest(changeRequestCreate) {
      return this.createChangeRequestWithHttpInfo(changeRequestCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a change request.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId Required for bi-directional scenario
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteChangeRequestWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteChangeRequest");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'tenantId': opts['tenantId']
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
        '/incident/api/v8/changerequests/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a change request.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId Required for bi-directional scenario
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteChangeRequest(id, opts) {
      return this.deleteChangeRequestWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a change request.
     * @param {String} id Change Request Number  CHG0030022
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId Required for bi-directional scenario
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChangeRequest} and HTTP response
     */
    getChangeRequestWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getChangeRequest");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'tenantId': opts['tenantId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ChangeRequest;
      return this.apiClient.callApi(
        '/incident/api/v8/changerequests/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a change request.
     * @param {String} id Change Request Number  CHG0030022
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId Required for bi-directional scenario
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChangeRequest}
     */
    getChangeRequest(id, opts) {
      return this.getChangeRequestWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a filtered list of change requests.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChangeRequestsPage} and HTTP response
     */
    getChangeRequestsPageWithHttpInfo(page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getChangeRequestsPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getChangeRequestsPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'tenantId': opts['tenantId'],
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
      let returnType = ChangeRequestsPage;
      return this.apiClient.callApi(
        '/incident/api/v8/changerequests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a filtered list of change requests.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChangeRequestsPage}
     */
    getChangeRequestsPage(page, pageSize, opts) {
      return this.getChangeRequestsPageWithHttpInfo(page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a change request.
     * Update change requests. Returns not found, if passed in tenant's serviceNow instance does not hold the record.
     * @param {String} id 
     * @param {module:model/ChangeRequestUpdate} changeRequestUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChangeRequest} and HTTP response
     */
    updateChangeRequestWithHttpInfo(id, changeRequestUpdate) {
      let postBody = changeRequestUpdate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateChangeRequest");
      }
      // verify the required parameter 'changeRequestUpdate' is set
      if (changeRequestUpdate === undefined || changeRequestUpdate === null) {
        throw new Error("Missing the required parameter 'changeRequestUpdate' when calling updateChangeRequest");
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
      let returnType = ChangeRequest;
      return this.apiClient.callApi(
        '/incident/api/v8/changerequests/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a change request.
     * Update change requests. Returns not found, if passed in tenant's serviceNow instance does not hold the record.
     * @param {String} id 
     * @param {module:model/ChangeRequestUpdate} changeRequestUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChangeRequest}
     */
    updateChangeRequest(id, changeRequestUpdate) {
      return this.updateChangeRequestWithHttpInfo(id, changeRequestUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
