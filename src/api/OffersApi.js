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
import CatalogAssignment from '../model/CatalogAssignment';
import Error from '../model/Error';
import Offer from '../model/Offer';
import OfferCreate from '../model/OfferCreate';
import OfferUpdate from '../model/OfferUpdate';
import OffersPage from '../model/OffersPage';

/**
* Offers service.
* @module api/OffersApi
* @version 1.0.2
*/
export default class OffersApi {

    /**
    * Constructs a new OffersApi. 
    * @alias module:api/OffersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a product offer.
     * @param {module:model/OfferCreate} offerCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Offer} and HTTP response
     */
    createOfferWithHttpInfo(offerCreate) {
      let postBody = offerCreate;
      // verify the required parameter 'offerCreate' is set
      if (offerCreate === undefined || offerCreate === null) {
        throw new Error("Missing the required parameter 'offerCreate' when calling createOffer");
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
      let returnType = Offer;
      return this.apiClient.callApi(
        '/consume/api/v8/offers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a product offer.
     * @param {module:model/OfferCreate} offerCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Offer}
     */
    createOffer(offerCreate) {
      return this.createOfferWithHttpInfo(offerCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a product offer
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteOfferWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOffer");
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
        '/consume/api/v8/offers/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a product offer
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteOffer(id) {
      return this.deleteOfferWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a product offer.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Offer} and HTTP response
     */
    getOfferWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOffer");
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
      let returnType = Offer;
      return this.apiClient.callApi(
        '/consume/api/v8/offers/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a product offer.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Offer}
     */
    getOffer(id) {
      return this.getOfferWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of tenant assignments for a product offer.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CatalogAssignment>} and HTTP response
     */
    getOfferAssignmentsListWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOfferAssignmentsList");
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
      let returnType = [CatalogAssignment];
      return this.apiClient.callApi(
        '/consume/api/v8/offers/{id}/assignments/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of tenant assignments for a product offer.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CatalogAssignment>}
     */
    getOfferAssignmentsList(id) {
      return this.getOfferAssignmentsListWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the number of product offers.
     * @param {Object} opts Optional parameters
     * @param {String} opts.productId 
     * @param {String} opts.tenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    getOffersCountWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'productId': opts['productId'],
        'tenantId': opts['tenantId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/consume/api/v8/offers/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the number of product offers.
     * @param {Object} opts Optional parameters
     * @param {String} opts.productId 
     * @param {String} opts.tenantId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    getOffersCount(opts) {
      return this.getOffersCountWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a page of product offers.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.productId 
     * @param {Array.<String>} opts.tenantIds 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OffersPage} and HTTP response
     */
    getOffersPageWithHttpInfo(page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getOffersPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getOffersPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'productId': opts['productId'],
        'tenantIds': this.apiClient.buildCollectionParam(opts['tenantIds'], 'multi'),
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
      let returnType = OffersPage;
      return this.apiClient.callApi(
        '/consume/api/v8/offers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a page of product offers.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.productId 
     * @param {Array.<String>} opts.tenantIds 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OffersPage}
     */
    getOffersPage(page, pageSize, opts) {
      return this.getOffersPageWithHttpInfo(page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a product offer.
     * @param {String} id 
     * @param {module:model/OfferUpdate} offerUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Offer} and HTTP response
     */
    updateOfferWithHttpInfo(id, offerUpdate) {
      let postBody = offerUpdate;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateOffer");
      }
      // verify the required parameter 'offerUpdate' is set
      if (offerUpdate === undefined || offerUpdate === null) {
        throw new Error("Missing the required parameter 'offerUpdate' when calling updateOffer");
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
      let returnType = Offer;
      return this.apiClient.callApi(
        '/consume/api/v8/offers/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a product offer.
     * @param {String} id 
     * @param {module:model/OfferUpdate} offerUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Offer}
     */
    updateOffer(id, offerUpdate) {
      return this.updateOfferWithHttpInfo(id, offerUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the tenant assignemnts for a product offer.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CatalogAssignment>} and HTTP response
     */
    updateOfferAssignmentsWithHttpInfo(id, requestBody) {
      let postBody = requestBody;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateOfferAssignments");
      }
      // verify the required parameter 'requestBody' is set
      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling updateOfferAssignments");
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
      let returnType = [CatalogAssignment];
      return this.apiClient.callApi(
        '/consume/api/v8/offers/{id}/assignments', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates the tenant assignemnts for a product offer.
     * @param {String} id 
     * @param {Array.<String>} requestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CatalogAssignment>}
     */
    updateOfferAssignments(id, requestBody) {
      return this.updateOfferAssignmentsWithHttpInfo(id, requestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
