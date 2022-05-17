# JavascriptMsxSdk.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /idm/api/v8/users | Creates a new user.
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /idm/api/v8/users/{id} | Deletes a user by id.
[**getCurrentUser**](UsersApi.md#getCurrentUser) | **GET** /idm/api/v8/users/current | Returns the current user.
[**getUser**](UsersApi.md#getUser) | **GET** /idm/api/v8/users/{id} | Returns an existing user.
[**getUsersPage**](UsersApi.md#getUsersPage) | **GET** /idm/api/v8/users | Returns a page of users.
[**updateUser**](UsersApi.md#updateUser) | **PUT** /idm/api/v8/users/{id} | Updates an existing user.
[**updateUserPassword**](UsersApi.md#updateUserPassword) | **PUT** /idm/api/v8/users/updatepassword | Update a user password.



## createUser

> User createUser(userCreate)

Creates a new user.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.UsersApi();
let userCreate = {"firstName":"Tom","lastName":"Baker","email":"noreply@cisco.com","roleIds":["c0895f00-d5d5-11ea-b88a-a7053c652ef4"],"tenantIds":["18992931-6ced-4133-9101-da6e4b83a5df"],"passwordPolicyName":"ppolicy_default","locale":"en_US","username":"TBaker","password":"Password@1"}; // UserCreate | 
apiInstance.createUser(userCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreate** | [**UserCreate**](UserCreate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUser

> deleteUser(id)

Deletes a user by id.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.UsersApi();
let id = "id_example"; // String | 
apiInstance.deleteUser(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentUser

> User getCurrentUser()

Returns the current user.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.UsersApi();
apiInstance.getCurrentUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> User getUser(id)

Returns an existing user.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.UsersApi();
let id = "id_example"; // String | 
apiInstance.getUser(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUsersPage

> UsersPage getUsersPage(page, pageSize, opts)

Returns a page of users.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.UsersApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'tenantId': "tenantId_example", // String | 
  'deleted': true // Boolean | 
};
apiInstance.getUsersPage(page, pageSize, opts).then((data) => {
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
 **tenantId** | **String**|  | [optional] 
 **deleted** | **Boolean**|  | [optional] 

### Return type

[**UsersPage**](UsersPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> User updateUser(id, userUpdate)

Updates an existing user.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.UsersApi();
let id = "id_example"; // String | 
let userUpdate = {"firstName":"Christopher","lastName":"Eccleston","email":"noreply@cisco.com","roleIds":["c0895f00-d5d5-11ea-b88a-a7053c652ef4"],"tenantIds":["39ed2f7a-baf9-48b0-ad96-7f7828dc8b38"],"passwordPolicyName":"ppolicy_default","locale":"en_US"}; // UserUpdate | 
apiInstance.updateUser(id, userUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **userUpdate** | [**UserUpdate**](UserUpdate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserPassword

> updateUserPassword(updatePassword)

Update a user password.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.UsersApi();
let updatePassword = {"username":"JWhittaker","oldPassword":"Password@1","newPassword":"Password@2"}; // UpdatePassword | 
apiInstance.updateUserPassword(updatePassword).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePassword** | [**UpdatePassword**](UpdatePassword.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

