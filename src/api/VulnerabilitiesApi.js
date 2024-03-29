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
import VulnerabilitiesPage from '../model/VulnerabilitiesPage';
import VulnerabilityFeed from '../model/VulnerabilityFeed';
import VulnerabilityIngestPage from '../model/VulnerabilityIngestPage';
import VulnerabilityIngestion from '../model/VulnerabilityIngestion';
import VulnerabilitySeverity from '../model/VulnerabilitySeverity';

/**
* Vulnerabilities service.
* @module api/VulnerabilitiesApi
* @version 1.0.10
*/
export default class VulnerabilitiesApi {

    /**
    * Constructs a new VulnerabilitiesApi. 
    * @alias module:api/VulnerabilitiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a filtered page of ingest tasks.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Start date for date range filter on validation execution date.
     * @param {Date} opts.endDate End date for date range filter on validation execution date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VulnerabilityIngestPage} and HTTP response
     */
    getIngestVulnerabilitiesTasksPageWithHttpInfo(page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getIngestVulnerabilitiesTasksPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getIngestVulnerabilitiesTasksPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
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
      let returnType = VulnerabilityIngestPage;
      return this.apiClient.callApi(
        '/vulnerability/api/v8/vulnerabilities/ingests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a filtered page of ingest tasks.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Start date for date range filter on validation execution date.
     * @param {Date} opts.endDate End date for date range filter on validation execution date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VulnerabilityIngestPage}
     */
    getIngestVulnerabilitiesTasksPage(page, pageSize, opts) {
      return this.getIngestVulnerabilitiesTasksPageWithHttpInfo(page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a filtered page of vulnerabilities.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.cveId CVE identifer (https://www.cvedetails.com/cve-help.php) to filter by.
     * @param {String} opts.vendor Vendor identifier (as defined in NIST's CPE dictionary) to filter by.
     * @param {String} opts.product Product identifier (as defined in NIST's CPE dictionary) to filter by.
     * @param {String} opts.version Product version (as defined in NIST's CPE dictionary) filter to filter by.
     * @param {module:model/VulnerabilitySeverity} opts.severity A CVSS severity level (https://nvd.nist.gov/vuln-metrics/cvss) to filter by.
     * @param {Date} opts.startDate Start date for date range filter on CVE published date.
     * @param {Date} opts.endDate End date for date range filter on CVE published date.
     * @param {Number} opts.year Year CVE published filter.
     * @param {module:model/String} opts.sortBy  (default to 'publishedOn')
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VulnerabilitiesPage} and HTTP response
     */
    getVulnerabilitiesPageWithHttpInfo(page, pageSize, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getVulnerabilitiesPage");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getVulnerabilitiesPage");
      }

      let pathParams = {
      };
      let queryParams = {
        'cveId': opts['cveId'],
        'vendor': opts['vendor'],
        'product': opts['product'],
        'version': opts['version'],
        'severity': opts['severity'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'year': opts['year'],
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
      let returnType = VulnerabilitiesPage;
      return this.apiClient.callApi(
        '/vulnerability/api/v8/vulnerabilities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a filtered page of vulnerabilities.
     * @param {Number} page 
     * @param {Number} pageSize 
     * @param {Object} opts Optional parameters
     * @param {String} opts.cveId CVE identifer (https://www.cvedetails.com/cve-help.php) to filter by.
     * @param {String} opts.vendor Vendor identifier (as defined in NIST's CPE dictionary) to filter by.
     * @param {String} opts.product Product identifier (as defined in NIST's CPE dictionary) to filter by.
     * @param {String} opts.version Product version (as defined in NIST's CPE dictionary) filter to filter by.
     * @param {module:model/VulnerabilitySeverity} opts.severity A CVSS severity level (https://nvd.nist.gov/vuln-metrics/cvss) to filter by.
     * @param {Date} opts.startDate Start date for date range filter on CVE published date.
     * @param {Date} opts.endDate End date for date range filter on CVE published date.
     * @param {Number} opts.year Year CVE published filter.
     * @param {module:model/String} opts.sortBy  (default to 'publishedOn')
     * @param {module:model/String} opts.sortOrder  (default to 'asc')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VulnerabilitiesPage}
     */
    getVulnerabilitiesPage(page, pageSize, opts) {
      return this.getVulnerabilitiesPageWithHttpInfo(page, pageSize, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Ingests a CVE JSON feed into the Vulnerability Service datastore.
     * @param {module:model/VulnerabilityFeed} vulnerabilityFeed 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VulnerabilityIngestion} and HTTP response
     */
    ingestVulnerabilitiesWithHttpInfo(vulnerabilityFeed) {
      let postBody = vulnerabilityFeed;
      // verify the required parameter 'vulnerabilityFeed' is set
      if (vulnerabilityFeed === undefined || vulnerabilityFeed === null) {
        throw new Error("Missing the required parameter 'vulnerabilityFeed' when calling ingestVulnerabilities");
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
      let returnType = VulnerabilityIngestion;
      return this.apiClient.callApi(
        '/vulnerability/api/v8/vulnerabilities/ingests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Ingests a CVE JSON feed into the Vulnerability Service datastore.
     * @param {module:model/VulnerabilityFeed} vulnerabilityFeed 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VulnerabilityIngestion}
     */
    ingestVulnerabilities(vulnerabilityFeed) {
      return this.ingestVulnerabilitiesWithHttpInfo(vulnerabilityFeed)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
