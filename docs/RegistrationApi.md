# JavascriptMsxSdk.RegistrationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRegisteredProductVersion**](RegistrationApi.md#deleteRegisteredProductVersion) | **DELETE** /vulnerability/api/v8/vulnerabilities/registrations/{id} | Delete a registration.
[**getRegisteredProductVersionPage**](RegistrationApi.md#getRegisteredProductVersionPage) | **GET** /vulnerability/api/v8/vulnerabilities/registrations | Returns a filtered page of registered products / versions.
[**registerProductVersion**](RegistrationApi.md#registerProductVersion) | **POST** /vulnerability/api/v8/vulnerabilities/registrations | Register a product / verison combination for vulnerability inspection.



## deleteRegisteredProductVersion

> deleteRegisteredProductVersion(id)

Delete a registration.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.RegistrationApi();
let id = null; // String | 
apiInstance.deleteRegisteredProductVersion(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRegisteredProductVersionPage

> VulnerabilitiesRegistrationPage getRegisteredProductVersionPage(page, pageSize, opts)

Returns a filtered page of registered products / versions.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.RegistrationApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'product': ios_xe, // String | Product identifier (as defined in NIST's CPE dictionary) to filter by.
  'version': 12.3 // String | Product version (as defined in NIST's CPE dictionary) filter to filter by.
};
apiInstance.getRegisteredProductVersionPage(page, pageSize, opts).then((data) => {
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
 **product** | **String**| Product identifier (as defined in NIST&#39;s CPE dictionary) to filter by. | [optional] 
 **version** | **String**| Product version (as defined in NIST&#39;s CPE dictionary) filter to filter by. | [optional] 

### Return type

[**VulnerabilitiesRegistrationPage**](VulnerabilitiesRegistrationPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerProductVersion

> VulnerabilityRegistration registerProductVersion(vulnerabilityRegistrationCreate)

Register a product / verison combination for vulnerability inspection.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.RegistrationApi();
let vulnerabilityRegistrationCreate = new JavascriptMsxSdk.VulnerabilityRegistrationCreate(); // VulnerabilityRegistrationCreate | 
apiInstance.registerProductVersion(vulnerabilityRegistrationCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vulnerabilityRegistrationCreate** | [**VulnerabilityRegistrationCreate**](VulnerabilityRegistrationCreate.md)|  | 

### Return type

[**VulnerabilityRegistration**](VulnerabilityRegistration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

