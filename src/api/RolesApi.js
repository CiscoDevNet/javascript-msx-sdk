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
import Role from '../model/Role';

/**
* Roles service.
* @module api/RolesApi
* @version 1.0.10
*/
export default class RolesApi {

    /**
    * Constructs a new RolesApi. 
    * @alias module:api/RolesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a role by name.
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Role} and HTTP response
     */
    getRoleByNameWithHttpInfo(name) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getRoleByName");
      }

      let pathParams = {
        'name': name
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
      let returnType = Role;
      return this.apiClient.callApi(
        '/idm/api/v8/roles/name/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a role by name.
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Role}
     */
    getRoleByName(name) {
      return this.getRoleByNameWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of roles.
     * @param {Array.<String>} ids 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Role>} and HTTP response
     */
    getRolesListWithHttpInfo(ids) {
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getRolesList");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Role];
      return this.apiClient.callApi(
        '/idm/api/v8/roles/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of roles.
     * @param {Array.<String>} ids 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Role>}
     */
    getRolesList(ids) {
      return this.getRolesListWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
