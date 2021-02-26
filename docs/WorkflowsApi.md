# JavascriptMsxSdk.WorkflowsApi

All URIs are relative to *http://localhost:8765*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWorkflow**](WorkflowsApi.md#deleteWorkflow) | **DELETE** /workflow/api/v8/workflows/{id} | Delete a workflow.
[**exportWorkflow**](WorkflowsApi.md#exportWorkflow) | **GET** /workflow/api/v8/workflows/{id}/export | Exports a workflow.
[**getWorkflow**](WorkflowsApi.md#getWorkflow) | **GET** /workflow/api/v8/workflows/{id} | Returns a workflow.
[**getWorkflowStartConfig**](WorkflowsApi.md#getWorkflowStartConfig) | **GET** /workflow/api/v8/workflows/{id}/startconfig | Returns a workflow start config.
[**getWorkflowsList**](WorkflowsApi.md#getWorkflowsList) | **GET** /workflow/api/v8/workflows/list | Returns a list of workflows.
[**importWorkflow**](WorkflowsApi.md#importWorkflow) | **POST** /workflow/api/v8/workflows | Imports a workflow.
[**startWorkflow**](WorkflowsApi.md#startWorkflow) | **POST** /workflow/api/v8/workflows/{id}/start | Starts a workflow.
[**updateWorkflow**](WorkflowsApi.md#updateWorkflow) | **PUT** /workflow/api/v8/workflows/{id} | Updates a workflow.
[**validateWorkflow**](WorkflowsApi.md#validateWorkflow) | **POST** /workflow/api/v8/workflows/{id}/validate | Validates a workflow.



## deleteWorkflow

> deleteWorkflow(id)

Delete a workflow.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowsApi();
let id = "id_example"; // String | 
apiInstance.deleteWorkflow(id).then(() => {
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


## exportWorkflow

> String exportWorkflow(id)

Exports a workflow.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowsApi();
let id = "id_example"; // String | 
apiInstance.exportWorkflow(id).then((data) => {
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflow

> Workflow getWorkflow(id)

Returns a workflow.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowsApi();
let id = "id_example"; // String | 
apiInstance.getWorkflow(id).then((data) => {
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

[**Workflow**](Workflow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowStartConfig

> WorkflowStartConfig getWorkflowStartConfig(id)

Returns a workflow start config.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowsApi();
let id = "id_example"; // String | 
apiInstance.getWorkflowStartConfig(id).then((data) => {
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

[**WorkflowStartConfig**](WorkflowStartConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowsList

> [Workflow] getWorkflowsList(opts)

Returns a list of workflows.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowsApi();
let opts = {
  'tenantId': null, // String | 
  'atomic': false // Boolean | 
};
apiInstance.getWorkflowsList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**String**](.md)|  | [optional] 
 **atomic** | **Boolean**|  | [optional] [default to false]

### Return type

[**[Workflow]**](Workflow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importWorkflow

> WorkflowMapping importWorkflow(tenantIds, requestBody, opts)

Imports a workflow.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowsApi();
let tenantIds = ["null"]; // [String] | 
let requestBody = {"workflow":{"unique_name":"definition_workflow_1flwhkwsayquzQyyfgz6tdRoyK2","name":"Health Check Atomic","title":"Health Check Atomic","type":"generic.workflow","base_type":"workflow","variables":[{"schema_id":"1flwhm42MFVKT16QCVpnzTV3NDL","properties":{"value":"","scope":"input","name":"service_name","type":"datatype.string"},"unique_name":"variable_workflow_1flwhkauAJQe4uzBvUDvCBdY2HM","object_type":"variable_workflow"}],"properties":{"atomic":{"is_atomic":false},"delete_workflow_instance":false,"display_name":"Health Check Atomic","favorite":false,"target":{"target_type":"web-service.endpoint","target_id":"definition_target_1flwhpdkMV95YN7uSm2ygMYsVe2","execute_on_workflow_target":true}},"object_type":"definition_workflow","actions":[{"unique_name":"definition_activity_1flwhq819QYFkMjAfPWDcg4zliI","name":"HTTP Request","title":"HTTP Request","type":"web-service.http_request","base_type":"activity","properties":{"accept":"application/json","action_timeout":180,"allow_auto_redirect":true,"content_type":"application/json","continue_on_error_status_code":false,"continue_on_failure":false,"custom_headers":[{"name":"Content-type","value":"application/vnd.spring-boot.actuator.v1+json"}],"display_name":"HTTP Request","method":"GET","relative_url":"/$workflow.definition_workflow_1flwhkwsayquzQyyfgz6tdRoyK2.input.variable_workflow_1flwhkauAJQe4uzBvUDvCBdY2HM$/admin/health","runtime_user":{"override_target_runtime_user":false,"target_default":true},"target":{"override_workflow_target":false,"use_workflow_target":true}},"object_type":"definition_activity"}]},"targets":{"definition_target_1flwhpdkMV95YN7uSm2ygMYsVe2":{"unique_name":"definition_target_1flwhpdkMV95YN7uSm2ygMYsVe2","name":"Router Service","title":"Router Service","type":"web-service.endpoint","base_type":"target","object_type":"definition_target","properties":{"description":"Router Service","disable_certificate_validation":true,"display_name":"Router Service","host":"dev-plt-aio1.lab.ciscomsx.com","no_runtime_user":true,"port":-1,"protocol":"https"}}}}; // {String: Object} | 
let opts = {
  'global': true // Boolean | 
};
apiInstance.importWorkflow(tenantIds, requestBody, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantIds** | [**[String]**](String.md)|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | 
 **global** | **Boolean**|  | [optional] 

### Return type

[**WorkflowMapping**](WorkflowMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startWorkflow

> [StartWorkflowResponse] startWorkflow(id, workflowStartConfig, opts)

Starts a workflow.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowsApi();
let id = "id_example"; // String | 
let workflowStartConfig = {"input_variables":[{"id":"01HTU6QBKWSWC7cJcKEAKXek3cjLJoZGYLK","schema_id":"01HQR50TZJK3M3d09kDOqLnYSywRwovUhAW","properties":{"value":"","scope":"input","name":"service_name","type":"datatype.string","is_required":false},"created_on":"2020-08-07T13:26:36Z","created_by":"aoadmin","updated_on":"2020-08-07T13:26:38Z","updated_by":"aoadmin","unique_name":"variable_workflow_1fly6IL9DWN9dCwPA6W713ef62M"}]}; // WorkflowStartConfig | 
let opts = {
  'sync': true // Boolean | 
};
apiInstance.startWorkflow(id, workflowStartConfig, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **workflowStartConfig** | [**WorkflowStartConfig**](WorkflowStartConfig.md)|  | 
 **sync** | **Boolean**|  | [optional] 

### Return type

[**[StartWorkflowResponse]**](StartWorkflowResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateWorkflow

> WorkflowMapping updateWorkflow(id, requestBody, opts)

Updates a workflow.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowsApi();
let id = "id_example"; // String | 
let requestBody = {key: null}; // {String: Object} | 
let opts = {
  'tenantId': ["null"], // [String] | 
  'global': true // Boolean | 
};
apiInstance.updateWorkflow(id, requestBody, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | 
 **tenantId** | [**[String]**](String.md)|  | [optional] 
 **global** | **Boolean**|  | [optional] 

### Return type

[**WorkflowMapping**](WorkflowMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateWorkflow

> ValidateWorkflowResponse validateWorkflow(id)

Validates a workflow.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowsApi();
let id = "id_example"; // String | 
apiInstance.validateWorkflow(id).then((data) => {
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

[**ValidateWorkflowResponse**](ValidateWorkflowResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

