# JavascriptMsxSdk.WorkflowTargetsApi

All URIs are relative to *http://localhost:8765*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkflowTarget**](WorkflowTargetsApi.md#createWorkflowTarget) | **POST** /workflow/api/v8/targets | Creates a new workflow target.
[**deleteWorkflowTarget**](WorkflowTargetsApi.md#deleteWorkflowTarget) | **DELETE** /workflow/api/v8/targets/{id} | Deletes a workflow target.
[**getWorkflowTarget**](WorkflowTargetsApi.md#getWorkflowTarget) | **GET** /workflow/api/v8/targets/{id} | Returns a workflow target.
[**getWorkflowTargetsList**](WorkflowTargetsApi.md#getWorkflowTargetsList) | **GET** /workflow/api/v8/targets/list | Returns a list of workflow targets.
[**updateWorkflowTarget**](WorkflowTargetsApi.md#updateWorkflowTarget) | **PUT** /workflow/api/v8/targets/{id} | Updates a workflow target.



## createWorkflowTarget

> WorkflowTarget createWorkflowTarget(workflowTargetCreate)

Creates a new workflow target.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowTargetsApi();
let workflowTargetCreate = {"name":"MSX Kafka","description":"A most excellent description.","title":"Target One","type":"kafka.endpoint","properties":{"disable_certificate_validation":false,"display_name":"MSX Kafka","host":"kafka.vms.svc.cluster.local","no_runtime_user":true,"port":9092,"ssl_enable":false}}; // WorkflowTargetCreate | 
apiInstance.createWorkflowTarget(workflowTargetCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowTargetCreate** | [**WorkflowTargetCreate**](WorkflowTargetCreate.md)|  | 

### Return type

[**WorkflowTarget**](WorkflowTarget.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWorkflowTarget

> deleteWorkflowTarget(id)

Deletes a workflow target.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowTargetsApi();
let id = "id_example"; // String | 
apiInstance.deleteWorkflowTarget(id).then(() => {
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


## getWorkflowTarget

> WorkflowTarget getWorkflowTarget(id)

Returns a workflow target.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowTargetsApi();
let id = "id_example"; // String | 
apiInstance.getWorkflowTarget(id).then((data) => {
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

[**WorkflowTarget**](WorkflowTarget.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowTargetsList

> [WorkflowTarget] getWorkflowTargetsList(opts)

Returns a list of workflow targets.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowTargetsApi();
let opts = {
  'internal': true, // Boolean | 
  'type': "type_example" // String | 
};
apiInstance.getWorkflowTargetsList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **internal** | **Boolean**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**[WorkflowTarget]**](WorkflowTarget.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWorkflowTarget

> WorkflowTarget updateWorkflowTarget(id, workflowTargetUpdate)

Updates a workflow target.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowTargetsApi();
let id = "id_example"; // String | 
let workflowTargetUpdate = {"name":"MSX Kafka","description":"A most excellent description.","type":"kafka.endpoint","properties":{"disable_certificate_validation":false,"display_name":"MSX Kafka","host":"kafka.vms.svc.cluster.local","no_runtime_user":true,"port":9092,"ssl_enable":false}}; // WorkflowTargetUpdate | 
apiInstance.updateWorkflowTarget(id, workflowTargetUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **workflowTargetUpdate** | [**WorkflowTargetUpdate**](WorkflowTargetUpdate.md)|  | 

### Return type

[**WorkflowTarget**](WorkflowTarget.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

