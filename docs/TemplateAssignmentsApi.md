# JavascriptMsxSdk.TemplateAssignmentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchAssignTemplate**](TemplateAssignmentsApi.md#batchAssignTemplate) | **POST** /template/api/v8/templates/{id}/assignments/add | Assigns a template to one or more tenants.
[**batchUnassignTemplate**](TemplateAssignmentsApi.md#batchUnassignTemplate) | **POST** /template/api/v8/templates/{id}/assignments/remove | Unassigns a template from one or more tenants.
[**getAssignment**](TemplateAssignmentsApi.md#getAssignment) | **GET** /template/api/v8/templates/assignments/{id} | Gets a template assignment.
[**getAssignmentHistory**](TemplateAssignmentsApi.md#getAssignmentHistory) | **GET** /template/api/v8/templates/assignments/{id}/history | Gets a template assignment history.
[**getTemplateAssignmentsPage**](TemplateAssignmentsApi.md#getTemplateAssignmentsPage) | **GET** /template/api/v8/templates/assignments | Returns a page of template assignments.
[**updateAssignmentStatus**](TemplateAssignmentsApi.md#updateAssignmentStatus) | **PATCH** /template/api/v8/templates/assignments/{id} | Updates a template assignment status.



## batchAssignTemplate

> [TemplateAssignmentResponse] batchAssignTemplate(id, requestBody, opts)

Assigns a template to one or more tenants.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateAssignmentsApi();
let id = null; // String | 
let requestBody = ["null"]; // [String] | 
let opts = {
  'inheritable': true // Boolean | 
};
apiInstance.batchAssignTemplate(id, requestBody, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **requestBody** | [**[String]**](String.md)|  | 
 **inheritable** | **Boolean**|  | [optional] 

### Return type

[**[TemplateAssignmentResponse]**](TemplateAssignmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchUnassignTemplate

> [TemplateAssignmentResponse] batchUnassignTemplate(id, requestBody)

Unassigns a template from one or more tenants.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateAssignmentsApi();
let id = null; // String | 
let requestBody = ["null"]; // [String] | 
apiInstance.batchUnassignTemplate(id, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **requestBody** | [**[String]**](String.md)|  | 

### Return type

[**[TemplateAssignmentResponse]**](TemplateAssignmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAssignment

> TemplateAssignment getAssignment(id)

Gets a template assignment.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateAssignmentsApi();
let id = null; // String | ID of template assignment record.
apiInstance.getAssignment(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of template assignment record. | 

### Return type

[**TemplateAssignment**](TemplateAssignment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssignmentHistory

> [TemplateAssignment] getAssignmentHistory(id)

Gets a template assignment history.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateAssignmentsApi();
let id = null; // String | 
apiInstance.getAssignmentHistory(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

[**[TemplateAssignment]**](TemplateAssignment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateAssignmentsPage

> TemplateAssignmentsPage getTemplateAssignmentsPage(page, pageSize, opts)

Returns a page of template assignments.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateAssignmentsApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'templateId': null, // String | 
  'tenantId': null, // String | 
  'calculateTotalItems': true // Boolean | 
};
apiInstance.getTemplateAssignmentsPage(page, pageSize, opts).then((data) => {
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
 **templateId** | [**String**](.md)|  | [optional] 
 **tenantId** | [**String**](.md)|  | [optional] 
 **calculateTotalItems** | **Boolean**|  | [optional] 

### Return type

[**TemplateAssignmentsPage**](TemplateAssignmentsPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAssignmentStatus

> TemplateAssignment updateAssignmentStatus(id, templateAssignmentStatusPatch)

Updates a template assignment status.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateAssignmentsApi();
let id = null; // String | ID of template assignment record.
let templateAssignmentStatusPatch = new JavascriptMsxSdk.TemplateAssignmentStatusPatch(); // TemplateAssignmentStatusPatch | 
apiInstance.updateAssignmentStatus(id, templateAssignmentStatusPatch).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| ID of template assignment record. | 
 **templateAssignmentStatusPatch** | [**TemplateAssignmentStatusPatch**](TemplateAssignmentStatusPatch.md)|  | 

### Return type

[**TemplateAssignment**](TemplateAssignment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

