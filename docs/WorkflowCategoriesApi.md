# JavascriptMsxSdk.WorkflowCategoriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkflowCategory**](WorkflowCategoriesApi.md#createWorkflowCategory) | **POST** /workflow/api/v8/categories | Creates a new workflow category.
[**deleteWorkflowCategory**](WorkflowCategoriesApi.md#deleteWorkflowCategory) | **DELETE** /workflow/api/v8/categories/{id} | Deletes a workflow category.
[**getWorkflowCategoriesList**](WorkflowCategoriesApi.md#getWorkflowCategoriesList) | **GET** /workflow/api/v8/categories/list | Returns a list of workflow categories.
[**getWorkflowCategory**](WorkflowCategoriesApi.md#getWorkflowCategory) | **GET** /workflow/api/v8/categories/{id} | Returns a workflow category.
[**updateWorkflowCategory**](WorkflowCategoriesApi.md#updateWorkflowCategory) | **PUT** /workflow/api/v8/categories/{id} | Updates a workflow category.



## createWorkflowCategory

> WorkflowCategory createWorkflowCategory(tenantId, workflowCategoryCreate)

Creates a new workflow category.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowCategoriesApi();
let tenantId = "tenantId_example"; // String | 
let workflowCategoryCreate = {"name":"Category One","title":"Category One","description":"A description of category one.","schema_id":"01HQR4T0U6YBE7USwHQiUhXogAACos2iac6"}; // WorkflowCategoryCreate | 
apiInstance.createWorkflowCategory(tenantId, workflowCategoryCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **workflowCategoryCreate** | [**WorkflowCategoryCreate**](WorkflowCategoryCreate.md)|  | 

### Return type

[**WorkflowCategory**](WorkflowCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWorkflowCategory

> deleteWorkflowCategory(id)

Deletes a workflow category.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowCategoriesApi();
let id = "id_example"; // String | 
apiInstance.deleteWorkflowCategory(id).then(() => {
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


## getWorkflowCategoriesList

> [WorkflowCategory] getWorkflowCategoriesList(opts)

Returns a list of workflow categories.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowCategoriesApi();
let opts = {
  'tenantId': "tenantId_example" // String | 
};
apiInstance.getWorkflowCategoriesList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | [optional] 

### Return type

[**[WorkflowCategory]**](WorkflowCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkflowCategory

> WorkflowCategory getWorkflowCategory(id)

Returns a workflow category.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowCategoriesApi();
let id = "id_example"; // String | 
apiInstance.getWorkflowCategory(id).then((data) => {
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

[**WorkflowCategory**](WorkflowCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWorkflowCategory

> WorkflowCategory updateWorkflowCategory(id, workflowCategoryUpdate)

Updates a workflow category.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.WorkflowCategoriesApi();
let id = "id_example"; // String | 
let workflowCategoryUpdate = {"name":"New Category Name","title":"New Category Title","description":"A much better description than before.","schema_id":"01HQR4T0U6YBE7USwHQiUhXogAACos2iac6"}; // WorkflowCategoryUpdate | 
apiInstance.updateWorkflowCategory(id, workflowCategoryUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **workflowCategoryUpdate** | [**WorkflowCategoryUpdate**](WorkflowCategoryUpdate.md)|  | 

### Return type

[**WorkflowCategory**](WorkflowCategory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

