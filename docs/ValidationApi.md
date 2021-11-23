# JavascriptMsxSdk.ValidationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getValidateProductVersionPage**](ValidationApi.md#getValidateProductVersionPage) | **GET** /vulnerability/api/v8/vulnerabilities/validations | Returns a filtered page of validations.
[**validateProductVersion**](ValidationApi.md#validateProductVersion) | **POST** /vulnerability/api/v8/vulnerabilities/validations | Validate registered product / verison combinations for vulnerabilities.



## getValidateProductVersionPage

> VulnerabilityValidationPage getValidateProductVersionPage(page, pageSize, opts)

Returns a filtered page of validations.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ValidationApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'startDate': 2020-01-15T18:15Z, // Date | Start date for date range filter on validation execution date.
  'endDate': 2021-01-15T18:15Z // Date | End date for date range filter on validation execution date.
};
apiInstance.getValidateProductVersionPage(page, pageSize, opts).then((data) => {
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

[**VulnerabilityValidationPage**](VulnerabilityValidationPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateProductVersion

> VulnerabilityValidation validateProductVersion()

Validate registered product / verison combinations for vulnerabilities.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ValidationApi();
apiInstance.validateProductVersion().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**VulnerabilityValidation**](VulnerabilityValidation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

