# JavascriptMsxSdk.WorkflowSchemasApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWorkflowSchema**](WorkflowSchemasApi.md#getWorkflowSchema) | **GET** /workflow/api/v8/schemas/{id} | Returns a workflow schema.
[**getWorkflowSchemasList**](WorkflowSchemasApi.md#getWorkflowSchemasList) | **GET** /workflow/api/v8/schemas/list | Returns a list of workflow schemas.



## getWorkflowSchema

> WorkflowSchemaByTypeResponse getWorkflowSchema(id, opts)

Returns a workflow schema.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowSchemasApi();
let id = "id_example"; // String | 
let opts = {
  'schemaType': "'view'" // String | 
};
apiInstance.getWorkflowSchema(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **schemaType** | **String**|  | [optional] [default to &#39;view&#39;]

### Return type

[**WorkflowSchemaByTypeResponse**](WorkflowSchemaByTypeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowSchemasList

> [WorkflowSchema] getWorkflowSchemasList(baseType, opts)

Returns a list of workflow schemas.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowSchemasApi();
let baseType = "'category'"; // String | 
let opts = {
  'schemaType': "'view'", // String | 
  'variableType': false // Boolean | 
};
apiInstance.getWorkflowSchemasList(baseType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseType** | **String**|  | [default to &#39;category&#39;]
 **schemaType** | **String**|  | [optional] [default to &#39;view&#39;]
 **variableType** | **Boolean**|  | [optional] [default to false]

### Return type

[**[WorkflowSchema]**](WorkflowSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

