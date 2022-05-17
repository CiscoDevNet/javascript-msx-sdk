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
import Incident from '../model/Incident';
import IncidentCancel from '../model/IncidentCancel';
import IncidentCreate from '../model/IncidentCreate';
import IncidentUpdate from '../model/IncidentUpdate';
import IncidentsPage from '../model/IncidentsPage';

/**
* Incidents service.
* @module api/IncidentsApi
* @version 1.0.10
*/
export default class IncidentsApi {

    /**
    * Constructs a new IncidentsApi. 
    * @alias module:api/IncidentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancels an incident.
     * @param {String} id 
     * @param {module:model/IncidentCancel} incidentCancel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Incident} and HTTP response
     */
    cancelIncidentWithHttpInfo(id, incidentCancel) {
      let postBody = incidentCancel;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelIncident");
      }
      // verify the required parameter 'incidentCancel' is set
      if (incidentCancel === undefined || incidentCancel === null) {
        throw new Error("Missing the required parameter 'incidentCancel' when calling cancelIncident");
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
      let returnType = Incident;
      return this.apiClient.callApi(
        '/incident/api/v1/incidents/{id}/cancel', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancels an incident.
     * @param {String} id 
     * @param {module:model/IncidentCancel} incidentCancel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Incident}
     */
    cancelIncident(id, incidentCancel) {
      return this.cancelIncidentWithHttpInfo(id, incidentCancel)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new Incident.
     * @param {module:model/IncidentCreate} incidentCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Incident} and HTTP response
     */
    createIncidentWithHttpInfo(incidentCreate) {
      let postBody = incidentCreate;
      // verify the required parameter 'incidentCreate' is set
      if (incidentCreate === undefined || incidentCreate === null) {
        throw new Error("Missing the required parameter 'incidentCreate' when calling createIncident");
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
      let returnType = Incident;
      return this.apiClient.callApi(
        '/incident/api/v1/incidents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new Incident.
     * @param {module:model/IncidentCreate} incidentCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Incident}
     */
    createIncident(incidentCreate) {
      return this.createIncidentWithHttpInfo(incidentCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes an incident.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteIncidentWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteIncident");
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
        '/incident/api/v1/incidents/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes an incident.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteIncident(id) {
      return this.deleteIncidentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get incident details.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Incident} and HTTP response
     */
    getIncidentWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getIncident");
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
      let returnType = Incident;
      return this.apiClient.callApi(
        '/incident/api/v1/incidents/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get incident details.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Incident}
     */
    getIncident(id) {
      return this.getIncidentWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Incidents by filter.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.id 
     * @param {String} opts.externalId 
     * @param {String} opts.tenantId 
     * @param {String} opts.category 
     * @param {String} opts.subcategory 
     * @param {String} opts.state New|InProgress|OnHold|Resolved|Canceled
     * @param {String} opts.priority Critical|Low|High|Moderate|Planning
     * @param {String} opts.severity High|Medium|Low
     * @param {String} opts.sortBy category|subcategory|priority|severity|state
     * @param {String} opts.sortOrder ASC/DESC
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IncidentsPage} and HTTP response
     */
    getIncidentsWithHttpInfo(page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getIncidents");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getIncidents");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id'],
        'externalId': opts['externalId'],
        'tenantId': opts['tenantId'],
        'category': opts['category'],
        'subcategory': opts['subcategory'],
        'state': opts['state'],
        'priority': opts['priority'],
        'severity': opts['severity'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
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
      let returnType = IncidentsPage;
      return this.apiClient.callApi(
        '/incident/api/v1/incidents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Incidents by filter.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.id 
     * @param {String} opts.externalId 
     * @param {String} opts.tenantId 
     * @param {String} opts.category 
     * @param {String} opts.subcategory 
     * @param {String} opts.state New|InProgress|OnHold|Resolved|Canceled
     * @param {String} opts.priority Critical|Low|High|Moderate|Planning
     * @param {String} opts.severity High|Medium|Low
     * @param {String} opts.sortBy category|subcategory|priority|severity|state
     * @param {String} opts.sortOrder ASC/DESC
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IncidentsPage}
     */
    getIncidents(page, pageSize, opts) {
      return this.getIncidentsWithHttpInfo(page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates an incident.
     * @param {String} id 
     * @param {module:model/IncidentUpdate} incidentUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Incident} and HTTP response
     */
    updateIncidentWithHttpInfo(id, incidentUpdate) {
      let postBody = incidentUpdate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateIncident");
      }
      // verify the required parameter 'incidentUpdate' is set
      if (incidentUpdate === undefined || incidentUpdate === null) {
        throw new Error("Missing the required parameter 'incidentUpdate' when calling updateIncident");
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
      let returnType = Incident;
      return this.apiClient.callApi(
        '/incident/api/v1/incidents/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates an incident.
     * @param {String} id 
     * @param {module:model/IncidentUpdate} incidentUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Incident}
     */
    updateIncident(id, incidentUpdate) {
      return this.updateIncidentWithHttpInfo(id, incidentUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
