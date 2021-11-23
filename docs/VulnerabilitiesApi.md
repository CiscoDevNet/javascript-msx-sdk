# JavascriptMsxSdk.VulnerabilitiesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIngestVulnerabilitiesTasksPage**](VulnerabilitiesApi.md#getIngestVulnerabilitiesTasksPage) | **GET** /vulnerability/api/v8/vulnerabilities/ingests | Returns a filtered page of ingest tasks.
[**getVulnerabilitiesPage**](VulnerabilitiesApi.md#getVulnerabilitiesPage) | **GET** /vulnerability/api/v8/vulnerabilities | Returns a filtered page of vulnerabilities.
[**ingestVulnerabilities**](VulnerabilitiesApi.md#ingestVulnerabilities) | **POST** /vulnerability/api/v8/vulnerabilities/ingests | Ingests a CVE JSON feed into the Vulnerability Service datastore.



## getIngestVulnerabilitiesTasksPage

> VulnerabilityIngestPage getIngestVulnerabilitiesTasksPage(page, pageSize, opts)

Returns a filtered page of ingest tasks.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.VulnerabilitiesApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'startDate': 2020-01-15T18:15Z, // Date | Start date for date range filter on validation execution date.
  'endDate': 2021-01-15T18:15Z // Date | End date for date range filter on validation execution date.
};
apiInstance.getIngestVulnerabilitiesTasksPage(page, pageSize, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | 
 **pageSize** | **Number**|  | 
 **startDate** | **Date**| Start date for date range filter on validation execution date. | [optional] 
 **endDate** | **Date**| End date for date range filter on validation execution date. | [optional] 

### Return type

[**VulnerabilityIngestPage**](VulnerabilityIngestPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVulnerabilitiesPage

> VulnerabilitiesPage getVulnerabilitiesPage(page, pageSize, opts)

Returns a filtered page of vulnerabilities.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.VulnerabilitiesApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'cveId': CVE-2021-0202, // String | CVE identifer (https://www.cvedetails.com/cve-help.php) to filter by.
  'vendor': cisco, // String | Vendor identifier (as defined in NIST's CPE dictionary) to filter by.
  'product': ios_xe, // String | Product identifier (as defined in NIST's CPE dictionary) to filter by.
  'version': 12.3, // String | Product version (as defined in NIST's CPE dictionary) filter to filter by.
  'severity': new JavascriptMsxSdk.VulnerabilitySeverity(), // VulnerabilitySeverity | A CVSS severity level (https://nvd.nist.gov/vuln-metrics/cvss) to filter by.
  'startDate': 2020-01-15T18:15Z, // Date | Start date for date range filter on CVE published date.
  'endDate': 2021-01-15T18:15Z, // Date | End date for date range filter on CVE published date.
  'year': 2019, // Number | Year CVE published filter.
  'sortBy': "'publishedOn'", // String | 
  'sortOrder': "'asc'" // String | 
};
apiInstance.getVulnerabilitiesPage(page, pageSize, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**|  | 
 **pageSize** | **Number**|  | 
 **cveId** | **String**| CVE identifer (https://www.cvedetails.com/cve-help.php) to filter by. | [optional] 
 **vendor** | **String**| Vendor identifier (as defined in NIST&#39;s CPE dictionary) to filter by. | [optional] 
 **product** | **String**| Product identifier (as defined in NIST&#39;s CPE dictionary) to filter by. | [optional] 
 **version** | **String**| Product version (as defined in NIST&#39;s CPE dictionary) filter to filter by. | [optional] 
 **severity** | [**VulnerabilitySeverity**](.md)| A CVSS severity level (https://nvd.nist.gov/vuln-metrics/cvss) to filter by. | [optional] 
 **startDate** | **Date**| Start date for date range filter on CVE published date. | [optional] 
 **endDate** | **Date**| End date for date range filter on CVE published date. | [optional] 
 **year** | **Number**| Year CVE published filter. | [optional] 
 **sortBy** | **String**|  | [optional] [default to &#39;publishedOn&#39;]
 **sortOrder** | **String**|  | [optional] [default to &#39;asc&#39;]

### Return type

[**VulnerabilitiesPage**](VulnerabilitiesPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ingestVulnerabilities

> VulnerabilityIngestion ingestVulnerabilities(vulnerabilityFeed)

Ingests a CVE JSON feed into the Vulnerability Service datastore.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.VulnerabilitiesApi();
let vulnerabilityFeed = new JavascriptMsxSdk.VulnerabilityFeed(); // VulnerabilityFeed | 
apiInstance.ingestVulnerabilities(vulnerabilityFeed).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vulnerabilityFeed** | [**VulnerabilityFeed**](VulnerabilityFeed.md)|  | 

### Return type

[**VulnerabilityIngestion**](VulnerabilityIngestion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

