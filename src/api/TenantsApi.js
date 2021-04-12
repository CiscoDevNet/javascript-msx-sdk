/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Tenant from '../model/Tenant';
import TenantCreate from '../model/TenantCreate';
import TenantUpdate from '../model/TenantUpdate';
import TenantsPage from '../model/TenantsPage';

/**
* Tenants service.
* @module api/TenantsApi
* @version 1.0.2
*/
export default class TenantsApi {

    /**
    * Constructs a new TenantsApi. 
    * @alias module:api/TenantsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a new tenant.
     * @param {module:model/TenantCreate} tenantCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Tenant} and HTTP response
     */
    createTenantWithHttpInfo(tenantCreate) {
      let postBody = tenantCreate;
      // verify the required parameter 'tenantCreate' is set
      if (tenantCreate === undefined || tenantCreate === null) {
        throw new Error("Missing the required parameter 'tenantCreate' when calling createTenant");
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
      let returnType = Tenant;
      return this.apiClient.callApi(
        '/idm/api/v8/tenants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new tenant.
     * @param {module:model/TenantCreate} tenantCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Tenant}
     */
    createTenant(tenantCreate) {
      return this.createTenantWithHttpInfo(tenantCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a tenant by id.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTenantWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTenant");
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
        '/idm/api/v8/tenants/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a tenant by id.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTenant(id) {
      return this.deleteTenantWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a tenant by id.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Tenant} and HTTP response
     */
    getTenantWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTenant");
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
      let returnType = Tenant;
      return this.apiClient.callApi(
        '/idm/api/v8/tenants/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a tenant by id.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Tenant}
     */
    getTenant(id) {
      return this.getTenantWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of tenants.
     * @param {Array.<String>} ids 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showImage  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Tenant>} and HTTP response
     */
    getTenantsListWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getTenantsList");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'multi'),
        'showImage': opts['showImage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Tenant];
      return this.apiClient.callApi(
        '/idm/api/v8/tenants/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of tenants.
     * @param {Array.<String>} ids 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showImage  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Tenant>}
     */
    getTenantsList(ids, opts) {
      return this.getTenantsListWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of tenants.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.parentId 
     * @param {Boolean} opts.showImage  (default to false)
     * @param {String} opts.sortBy 
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TenantsPage} and HTTP response
     */
    getTenantsPageWithHttpInfo(page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getTenantsPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getTenantsPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'parentId': opts['parentId'],
        'showImage': opts['showImage'],
        'page': page,
        'pageSize': pageSize,
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TenantsPage;
      return this.apiClient.callApi(
        '/idm/api/v8/tenants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a page of tenants.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.parentId 
     * @param {Boolean} opts.showImage  (default to false)
     * @param {String} opts.sortBy 
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TenantsPage}
     */
    getTenantsPage(page, pageSize, opts) {
      return this.getTenantsPageWithHttpInfo(page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a tenant by id.
     * @param {String} id 
     * @param {module:model/TenantUpdate} tenantUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Tenant} and HTTP response
     */
    updateTenantWithHttpInfo(id, tenantUpdate) {
      let postBody = tenantUpdate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateTenant");
      }
      // verify the required parameter 'tenantUpdate' is set
      if (tenantUpdate === undefined || tenantUpdate === null) {
        throw new Error("Missing the required parameter 'tenantUpdate' when calling updateTenant");
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
      let returnType = Tenant;
      return this.apiClient.callApi(
        '/idm/api/v8/tenants/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a tenant by id.
     * @param {String} id 
     * @param {module:model/TenantUpdate} tenantUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Tenant}
     */
    updateTenant(id, tenantUpdate) {
      return this.updateTenantWithHttpInfo(id, tenantUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
