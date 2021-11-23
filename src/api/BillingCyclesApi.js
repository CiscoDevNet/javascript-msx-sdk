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
import BillingCycle from '../model/BillingCycle';
import BillingCycleCreate from '../model/BillingCycleCreate';
import BillingCycleProcess from '../model/BillingCycleProcess';
import BillingCycleProcessAccepted from '../model/BillingCycleProcessAccepted';
import BillingCycleUpdate from '../model/BillingCycleUpdate';
import BillingCyclesPage from '../model/BillingCyclesPage';
import Error from '../model/Error';

/**
* BillingCycles service.
* @module api/BillingCyclesApi
* @version 1.0.8
*/
export default class BillingCyclesApi {

    /**
    * Constructs a new BillingCyclesApi. 
    * @alias module:api/BillingCyclesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a billing cycle.
     * Needs MANAGE_BILLINGCYCLE permission to allow for the creation a billing cycle.
     * @param {module:model/BillingCycleCreate} billingCycleCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingCycle} and HTTP response
     */
    addBillingCycleWithHttpInfo(billingCycleCreate) {
      let postBody = billingCycleCreate;
      // verify the required parameter 'billingCycleCreate' is set
      if (billingCycleCreate === undefined || billingCycleCreate === null) {
        throw new Error("Missing the required parameter 'billingCycleCreate' when calling addBillingCycle");
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
      let returnType = BillingCycle;
      return this.apiClient.callApi(
        '/billing/api/v8/cycles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a billing cycle.
     * Needs MANAGE_BILLINGCYCLE permission to allow for the creation a billing cycle.
     * @param {module:model/BillingCycleCreate} billingCycleCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingCycle}
     */
    addBillingCycle(billingCycleCreate) {
      return this.addBillingCycleWithHttpInfo(billingCycleCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a billing cycle.
     * Needs MANAGE_BILLINGCYCLE permission to delete a billing cycle.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteBillingCycleWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteBillingCycle");
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
        '/billing/api/v8/cycles/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a billing cycle.
     * Needs MANAGE_BILLINGCYCLE permission to delete a billing cycle.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteBillingCycle(id) {
      return this.deleteBillingCycleWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a billing cycle.
     * Needs VIEW_BILLINGCYCLE permission to get billing cycle detail.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingCycle} and HTTP response
     */
    getBillingCycleWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBillingCycle");
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
      let returnType = BillingCycle;
      return this.apiClient.callApi(
        '/billing/api/v8/cycles/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a billing cycle.
     * Needs VIEW_BILLINGCYCLE permission to get billing cycle detail.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingCycle}
     */
    getBillingCycle(id) {
      return this.getBillingCycleWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a page of billing cycles.
     * Needs VIEW_BILLINGCYCLE permission to view the billing cycle details.
     * @param {String} tenantId 
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.nextBilledOn 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingCyclesPage} and HTTP response
     */
    getBillingCyclesPageWithHttpInfo(tenantId, page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling getBillingCyclesPage");
      }
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getBillingCyclesPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getBillingCyclesPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'nextBilledOn': opts['nextBilledOn'],
        'tenantId': tenantId,
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
      let returnType = BillingCyclesPage;
      return this.apiClient.callApi(
        '/billing/api/v8/cycles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a page of billing cycles.
     * Needs VIEW_BILLINGCYCLE permission to view the billing cycle details.
     * @param {String} tenantId 
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.nextBilledOn 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingCyclesPage}
     */
    getBillingCyclesPage(tenantId, page, pageSize, opts) {
      return this.getBillingCyclesPageWithHttpInfo(tenantId, page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Process a billing cycle.
     * Needs MANAGE_BILLINGCYCLE permission to allow for the creation a billing cycle.
     * @param {module:model/BillingCycleProcess} billingCycleProcess 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingCycleProcessAccepted} and HTTP response
     */
    processBillingCycleWithHttpInfo(billingCycleProcess) {
      let postBody = billingCycleProcess;
      // verify the required parameter 'billingCycleProcess' is set
      if (billingCycleProcess === undefined || billingCycleProcess === null) {
        throw new Error("Missing the required parameter 'billingCycleProcess' when calling processBillingCycle");
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
      let returnType = BillingCycleProcessAccepted;
      return this.apiClient.callApi(
        '/billing/api/v8/cycles/process', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Process a billing cycle.
     * Needs MANAGE_BILLINGCYCLE permission to allow for the creation a billing cycle.
     * @param {module:model/BillingCycleProcess} billingCycleProcess 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingCycleProcessAccepted}
     */
    processBillingCycle(billingCycleProcess) {
      return this.processBillingCycleWithHttpInfo(billingCycleProcess)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update billing cycle for an event type and tenant.
     * Needs MANAGE_BILLINGCYCLE permission to update a billing cycle detail.
     * @param {String} id 
     * @param {module:model/BillingCycleUpdate} billingCycleUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BillingCycle} and HTTP response
     */
    updateBillingCycleWithHttpInfo(id, billingCycleUpdate) {
      let postBody = billingCycleUpdate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateBillingCycle");
      }
      // verify the required parameter 'billingCycleUpdate' is set
      if (billingCycleUpdate === undefined || billingCycleUpdate === null) {
        throw new Error("Missing the required parameter 'billingCycleUpdate' when calling updateBillingCycle");
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
      let returnType = BillingCycle;
      return this.apiClient.callApi(
        '/billing/api/v8/cycles/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update billing cycle for an event type and tenant.
     * Needs MANAGE_BILLINGCYCLE permission to update a billing cycle detail.
     * @param {String} id 
     * @param {module:model/BillingCycleUpdate} billingCycleUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BillingCycle}
     */
    updateBillingCycle(id, billingCycleUpdate) {
      return this.updateBillingCycleWithHttpInfo(id, billingCycleUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
