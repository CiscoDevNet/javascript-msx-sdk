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
import AccessToken from '../model/AccessToken';

/**
* Security service.
* @module api/SecurityApi
* @version 1.0.10
*/
export default class SecurityApi {

    /**
    * Constructs a new SecurityApi. 
    * @alias module:api/SecurityApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns an access token.
     * @param {String} authorization 
     * @param {String} grantType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.username 
     * @param {String} opts.password 
     * @param {String} opts.accessToken 
     * @param {String} opts.switchUsername 
     * @param {String} opts.tenantId 
     * @param {String} opts.scope 
     * @param {String} opts.nonce 
     * @param {String} opts.tenantName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccessToken} and HTTP response
     */
    getAccessTokenWithHttpInfo(authorization, grantType, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling getAccessToken");
      }
      // verify the required parameter 'grantType' is set
      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling getAccessToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
        'grant_type': grantType,
        'username': opts['username'],
        'password': opts['password'],
        'access_token': opts['accessToken'],
        'switch_username': opts['switchUsername'],
        'tenant_id': opts['tenantId'],
        'scope': opts['scope'],
        'nonce': opts['nonce'],
        'tenant_name': opts['tenantName']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = AccessToken;
      return this.apiClient.callApi(
        '/idm/v2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns an access token.
     * @param {String} authorization 
     * @param {String} grantType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.username 
     * @param {String} opts.password 
     * @param {String} opts.accessToken 
     * @param {String} opts.switchUsername 
     * @param {String} opts.tenantId 
     * @param {String} opts.scope 
     * @param {String} opts.nonce 
     * @param {String} opts.tenantName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessToken}
     */
    getAccessToken(authorization, grantType, opts) {
      return this.getAccessTokenWithHttpInfo(authorization, grantType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
