# JavascriptMsxSdk.RolesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRoleByName**](RolesApi.md#getRoleByName) | **GET** /idm/api/v8/roles/name/{name} | Returns a role by name.
[**getRolesList**](RolesApi.md#getRolesList) | **GET** /idm/api/v8/roles/list | Returns a list of roles.



## getRoleByName

> Role getRoleByName(name)

Returns a role by name.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.RolesApi();
let name = CONSUMER; // String | 
apiInstance.getRoleByName(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRolesList

> [Role] getRolesList(ids)

Returns a list of roles.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.RolesApi();
let ids = ["null"]; // [String] | 
apiInstance.getRolesList(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 

### Return type

[**[Role]**](Role.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

