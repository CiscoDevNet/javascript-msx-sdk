# JavascriptMsxSdk.WorkflowEventsApi

All URIs are relative to *http://localhost:8765*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkflowEvent**](WorkflowEventsApi.md#createWorkflowEvent) | **POST** /workflow/api/v8/events | Creates a new workflow event.
[**deleteWorkflowEvent**](WorkflowEventsApi.md#deleteWorkflowEvent) | **DELETE** /workflow/api/v8/events/{id} | Deletes a workflow event.
[**getWorkflowEvent**](WorkflowEventsApi.md#getWorkflowEvent) | **GET** /workflow/api/v8/events/{id} | Returns a workflow event.
[**getWorkflowEventsList**](WorkflowEventsApi.md#getWorkflowEventsList) | **GET** /workflow/api/v8/events/list | Returns a list of workflow events.
[**updateWorkflowEvent**](WorkflowEventsApi.md#updateWorkflowEvent) | **PUT** /workflow/api/v8/events/{id} | Updates a workflow event.



## createWorkflowEvent

> WorkflowEvent createWorkflowEvent(workflowEventCreate)

Creates a new workflow event.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowEventsApi();
let workflowEventCreate = {"title":"Event One","description":"This is not the description you are looking for.","target_id":"01HTUSVW1CT4X66ht5sueGVrOatrKeh8wkK","schema_id":"01HQR51UJFSML2CKLOFnnYq7YgGQIgzmvHx","properties":{"title":"Event One","target_id":"01HTUSVW1CT4X66ht5sueGVrOatrKeh8wkK","topic_name":"TEST_TOPIC"}}; // WorkflowEventCreate | 
apiInstance.createWorkflowEvent(workflowEventCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowEventCreate** | [**WorkflowEventCreate**](WorkflowEventCreate.md)|  | 

### Return type

[**WorkflowEvent**](WorkflowEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWorkflowEvent

> deleteWorkflowEvent(id)

Deletes a workflow event.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowEventsApi();
let id = "id_example"; // String | 
apiInstance.deleteWorkflowEvent(id).then(() => {
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


## getWorkflowEvent

> WorkflowEvent getWorkflowEvent(id)

Returns a workflow event.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowEventsApi();
let id = "id_example"; // String | 
apiInstance.getWorkflowEvent(id).then((data) => {
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

[**WorkflowEvent**](WorkflowEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowEventsList

> [WorkflowEvent] getWorkflowEventsList()

Returns a list of workflow events.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowEventsApi();
apiInstance.getWorkflowEventsList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[WorkflowEvent]**](WorkflowEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWorkflowEvent

> WorkflowEvent updateWorkflowEvent(id, workflowEventUpdate)

Updates a workflow event.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowEventsApi();
let id = "id_example"; // String | 
let workflowEventUpdate = {"title":"New Title","description":"All singing, all dancing event description.","target_id":"01HTV56F9BGYF7TPAc3p1WaP5ASSxPjvWkO","schema_id":"01HQR51UJFSML2CKLOFnnYq7YgGQIgzmvHx","properties":{"title":"New Title","target_id":"01HTV56F9BGYF7TPAc3p1WaP5ASSxPjvWkO","topic_name":"TEST_TOPIC"}}; // WorkflowEventUpdate | 
apiInstance.updateWorkflowEvent(id, workflowEventUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **workflowEventUpdate** | [**WorkflowEventUpdate**](WorkflowEventUpdate.md)|  | 

### Return type

[**WorkflowEvent**](WorkflowEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

