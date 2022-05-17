# JavascriptMsxSdk.IncidentChangeRequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChangeRequest**](IncidentChangeRequestsApi.md#createChangeRequest) | **POST** /incident/api/v8/changerequests | Create a change request.
[**deleteChangeRequest**](IncidentChangeRequestsApi.md#deleteChangeRequest) | **DELETE** /incident/api/v8/changerequests/{id} | Deletes a change request.
[**getChangeRequest**](IncidentChangeRequestsApi.md#getChangeRequest) | **GET** /incident/api/v8/changerequests/{id} | Returns a change request.
[**getChangeRequestsPage**](IncidentChangeRequestsApi.md#getChangeRequestsPage) | **GET** /incident/api/v8/changerequests | Returns a filtered list of change requests.
[**updateChangeRequest**](IncidentChangeRequestsApi.md#updateChangeRequest) | **PUT** /incident/api/v8/changerequests/{id} | Updates a change request.



## createChangeRequest

> ChangeRequest createChangeRequest(changeRequestCreate)

Create a change request.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentChangeRequestsApi();
let changeRequestCreate = new JavascriptMsxSdk.ChangeRequestCreate(); // ChangeRequestCreate | 
apiInstance.createChangeRequest(changeRequestCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeRequestCreate** | [**ChangeRequestCreate**](ChangeRequestCreate.md)|  | 

### Return type

[**ChangeRequest**](ChangeRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteChangeRequest

> deleteChangeRequest(id, opts)

Deletes a change request.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentChangeRequestsApi();
let id = "id_example"; // String | 
let opts = {
  'tenantId': "tenantId_example" // String | Required for bi-directional scenario
};
apiInstance.deleteChangeRequest(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **tenantId** | **String**| Required for bi-directional scenario | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChangeRequest

> ChangeRequest getChangeRequest(id, opts)

Returns a change request.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentChangeRequestsApi();
let id = "id_example"; // String | Change Request Number  CHG0030022
let opts = {
  'tenantId': "tenantId_example" // String | Required for bi-directional scenario
};
apiInstance.getChangeRequest(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Change Request Number  CHG0030022 | 
 **tenantId** | **String**| Required for bi-directional scenario | [optional] 

### Return type

[**ChangeRequest**](ChangeRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChangeRequestsPage

> ChangeRequestsPage getChangeRequestsPage(page, pageSize, opts)

Returns a filtered list of change requests.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentChangeRequestsApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'tenantId': "tenantId_example" // String | 
};
apiInstance.getChangeRequestsPage(page, pageSize, opts).then((data) => {
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

### Return type

[**ChangeRequestsPage**](ChangeRequestsPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateChangeRequest

> ChangeRequest updateChangeRequest(id, changeRequestUpdate)

Updates a change request.

Update change requests. Returns not found, if passed in tenant&#39;s serviceNow instance does not hold the record.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentChangeRequestsApi();
let id = "id_example"; // String | 
let changeRequestUpdate = new JavascriptMsxSdk.ChangeRequestUpdate(); // ChangeRequestUpdate | 
apiInstance.updateChangeRequest(id, changeRequestUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **changeRequestUpdate** | [**ChangeRequestUpdate**](ChangeRequestUpdate.md)|  | 

### Return type

[**ChangeRequest**](ChangeRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

