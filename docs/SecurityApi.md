# JavascriptMsxSdk.SecurityApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccessToken**](SecurityApi.md#getAccessToken) | **POST** /idm/v2/token | Returns an access token.



## getAccessToken

> AccessToken getAccessToken(authorization, grantType, opts)

Returns an access token.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SecurityApi();
let authorization = "authorization_example"; // String | 
let grantType = "grantType_example"; // String | 
let opts = {
  'username': "username_example", // String | 
  'password': "password_example", // String | 
  'accessToken': "accessToken_example", // String | 
  'switchUsername': "switchUsername_example", // String | 
  'tenantId': "tenantId_example", // String | 
  'scope': "scope_example", // String | 
  'nonce': "nonce_example", // String | 
  'tenantName': "tenantName_example" // String | 
};
apiInstance.getAccessToken(authorization, grantType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **grantType** | **String**|  | 
 **username** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 
 **accessToken** | **String**|  | [optional] 
 **switchUsername** | **String**|  | [optional] 
 **tenantId** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] 
 **nonce** | **String**|  | [optional] 
 **tenantName** | **String**|  | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

