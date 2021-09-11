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
import GenericEvent from '../model/GenericEvent';
import GenericEventCreate from '../model/GenericEventCreate';

/**
* AuditingGenericEvents service.
* @module api/AuditingGenericEventsApi
* @version 1.0.5
*/
export default class AuditingGenericEventsApi {

    /**
    * Constructs a new AuditingGenericEventsApi. 
    * @alias module:api/AuditingGenericEventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Generic Event
     * Needs CREATE_AUDIT_GENERIC_EVENT_PERMISSION to create a Generic Event.
     * @param {module:model/GenericEventCreate} genericEventCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericEvent} and HTTP response
     */
    createGenericEventWithHttpInfo(genericEventCreate) {
      let postBody = genericEventCreate;
      // verify the required parameter 'genericEventCreate' is set
      if (genericEventCreate === undefined || genericEventCreate === null) {
        throw new Error("Missing the required parameter 'genericEventCreate' when calling createGenericEvent");
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
      let returnType = GenericEvent;
      return this.apiClient.callApi(
        '/auditing/api/v8/genericevents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Generic Event
     * Needs CREATE_AUDIT_GENERIC_EVENT_PERMISSION to create a Generic Event.
     * @param {module:model/GenericEventCreate} genericEventCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericEvent}
     */
    createGenericEvent(genericEventCreate) {
      return this.createGenericEventWithHttpInfo(genericEventCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}