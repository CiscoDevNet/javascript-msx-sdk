# JavascriptMsxSdk.WorkflowInstancesApi

All URIs are relative to *http://localhost:8765*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelWorkflowInstance**](WorkflowInstancesApi.md#cancelWorkflowInstance) | **POST** /workflow/api/v8/workflows/instances/{id}/cancel | Cancels a workflow instance.
[**deleteWorkflowInstance**](WorkflowInstancesApi.md#deleteWorkflowInstance) | **DELETE** /workflow/api/v8/workflows/instances/{id} | Deletes a workflow instance.
[**getWorkflowInstance**](WorkflowInstancesApi.md#getWorkflowInstance) | **GET** /workflow/api/v8/workflows/instances/{id} | Returns a workflow instance.
[**getWorkflowInstanceAction**](WorkflowInstancesApi.md#getWorkflowInstanceAction) | **GET** /workflow/api/v8/workflows/instances/{id}/actions/{actionId} | Returns a workflow instance action.
[**getWorkflowInstancesList**](WorkflowInstancesApi.md#getWorkflowInstancesList) | **GET** /workflow/api/v8/workflows/{id}/instances/list | Returns a list of workflow instances.



## cancelWorkflowInstance

> WorkflowInstance cancelWorkflowInstance(id)

Cancels a workflow instance.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowInstancesApi();
let id = "id_example"; // String | 
apiInstance.cancelWorkflowInstance(id).then((data) => {
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

[**WorkflowInstance**](WorkflowInstance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteWorkflowInstance

> WorkflowInstanceDeleteResponse deleteWorkflowInstance(id)

Deletes a workflow instance.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowInstancesApi();
let id = "id_example"; // String | 
apiInstance.deleteWorkflowInstance(id).then((data) => {
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

[**WorkflowInstanceDeleteResponse**](WorkflowInstanceDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowInstance

> WorkflowInstance getWorkflowInstance(id)

Returns a workflow instance.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowInstancesApi();
let id = "id_example"; // String | 
apiInstance.getWorkflowInstance(id).then((data) => {
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

[**WorkflowInstance**](WorkflowInstance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowInstanceAction

> WorkflowAction getWorkflowInstanceAction(id, actionId)

Returns a workflow instance action.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowInstancesApi();
let id = "id_example"; // String | 
let actionId = "actionId_example"; // String | 
apiInstance.getWorkflowInstanceAction(id, actionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **actionId** | **String**|  | 

### Return type

[**WorkflowAction**](WorkflowAction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowInstancesList

> [WorkflowInstance] getWorkflowInstancesList(id, page, pageSize, opts)

Returns a list of workflow instances.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowInstancesApi();
let id = "id_example"; // String | 
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'dateFrom': new Date("2013-10-20"), // Date | 
  'dateTo': new Date("2013-10-20") // Date | 
};
apiInstance.getWorkflowInstancesList(id, page, pageSize, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **page** | **Number**|  | 
 **pageSize** | **Number**|  | 
 **dateFrom** | **Date**|  | [optional] 
 **dateTo** | **Date**|  | [optional] 

### Return type

[**[WorkflowInstance]**](WorkflowInstance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

