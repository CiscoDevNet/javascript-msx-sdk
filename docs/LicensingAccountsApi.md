# JavascriptMsxSdk.LicensingAccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserAccountsList**](LicensingAccountsApi.md#getUserAccountsList) | **GET** /licensing/api/v8/accounts/smart/list | Returns a filtered page of smart accounts.



## getUserAccountsList

> SmartUserAccounts getUserAccountsList(userId, opts)

Returns a filtered page of smart accounts.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.LicensingAccountsApi();
let userId = bdavis; // String | User Id
let opts = {
  'domain': abhtest001.cisco.com, // String | Smart Account domain
  'roleName': AccountAdmin, // String | Role Name
  'type': new JavascriptMsxSdk.SmartAccountType() // SmartAccountType | 
};
apiInstance.getUserAccountsList(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User Id | 
 **domain** | **String**| Smart Account domain | [optional] 
 **roleName** | **String**| Role Name | [optional] 
 **type** | [**SmartAccountType**](.md)|  | [optional] 

### Return type

[**SmartUserAccounts**](SmartUserAccounts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

