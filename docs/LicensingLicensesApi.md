# JavascriptMsxSdk.LicensingLicensesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLicensesList**](LicensingLicensesApi.md#getLicensesList) | **GET** /licensing/api/v8/licensing/api/v8/licenses/list | Returns a filtered list of licenses.



## getLicensesList

> [LicenseSummary] getLicensesList(smartAccountId, virtualAccountId)

Returns a filtered list of licenses.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.LicensingLicensesApi();
let smartAccountId = 295183; // String | Smart Account Identifier
let virtualAccountId = 123123; // String | Virtual Account Identifier
apiInstance.getLicensesList(smartAccountId, virtualAccountId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartAccountId** | **String**| Smart Account Identifier | 
 **virtualAccountId** | **String**| Virtual Account Identifier | 

### Return type

[**[LicenseSummary]**](LicenseSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

