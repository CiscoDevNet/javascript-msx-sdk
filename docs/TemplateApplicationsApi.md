# JavascriptMsxSdk.TemplateApplicationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applyTemplate**](TemplateApplicationsApi.md#applyTemplate) | **POST** /template/api/v8/templates/{id}/applications | Applies a template to a target.
[**deleteTemplateApplication**](TemplateApplicationsApi.md#deleteTemplateApplication) | **DELETE** /template/api/v8/templates/applications/{id} | Deletes a template application.
[**getTemplateApplication**](TemplateApplicationsApi.md#getTemplateApplication) | **GET** /template/api/v8/templates/applications/{id} | Gets a template application.
[**getTemplateApplicationHistory**](TemplateApplicationsApi.md#getTemplateApplicationHistory) | **GET** /template/api/v8/templates/applications/{id}/history | Gets a template application history.
[**getTemplateApplicationsPage**](TemplateApplicationsApi.md#getTemplateApplicationsPage) | **GET** /template/api/v8/templates/applications | Get a page of template applications.
[**updateApplicationStatus**](TemplateApplicationsApi.md#updateApplicationStatus) | **PATCH** /template/api/v8/templates/applications/{id} | Updates an application status.



## applyTemplate

> TemplateApplication applyTemplate(id, templateApplicationCreate)

Applies a template to a target.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateApplicationsApi();
let id = "id_example"; // String | 
let templateApplicationCreate = new JavascriptMsxSdk.TemplateApplicationCreate(); // TemplateApplicationCreate | 
apiInstance.applyTemplate(id, templateApplicationCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **templateApplicationCreate** | [**TemplateApplicationCreate**](TemplateApplicationCreate.md)|  | 

### Return type

[**TemplateApplication**](TemplateApplication.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTemplateApplication

> deleteTemplateApplication(id)

Deletes a template application.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateApplicationsApi();
let id = "id_example"; // String | 
apiInstance.deleteTemplateApplication(id).then(() => {
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


## getTemplateApplication

> TemplateApplication getTemplateApplication(id)

Gets a template application.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateApplicationsApi();
let id = "id_example"; // String | 
apiInstance.getTemplateApplication(id).then((data) => {
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

[**TemplateApplication**](TemplateApplication.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateApplicationHistory

> [TemplateApplication] getTemplateApplicationHistory(id)

Gets a template application history.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateApplicationsApi();
let id = "id_example"; // String | 
apiInstance.getTemplateApplicationHistory(id).then((data) => {
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

[**[TemplateApplication]**](TemplateApplication.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateApplicationsPage

> TemplateApplicationsPage getTemplateApplicationsPage(tenantId, page, pageSize, opts)

Get a page of template applications.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateApplicationsApi();
let tenantId = "tenantId_example"; // String | 
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'templateId': "templateId_example", // String | 
  'targetId': "targetId_example", // String | 
  'targetType': "targetType_example", // String | 
  'calculateTotalItems': true, // Boolean | 
  'sortBy': "'createdOn'", // String | 
  'sortOrder': "'asc'" // String | 
};
apiInstance.getTemplateApplicationsPage(tenantId, page, pageSize, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **page** | **Number**|  | 
 **pageSize** | **Number**|  | 
 **templateId** | **String**|  | [optional] 
 **targetId** | **String**|  | [optional] 
 **targetType** | **String**|  | [optional] 
 **calculateTotalItems** | **Boolean**|  | [optional] 
 **sortBy** | **String**|  | [optional] [default to &#39;createdOn&#39;]
 **sortOrder** | **String**|  | [optional] [default to &#39;asc&#39;]

### Return type

[**TemplateApplicationsPage**](TemplateApplicationsPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateApplicationStatus

> TemplateApplication updateApplicationStatus(id, templateApplicationStatusPatch)

Updates an application status.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplateApplicationsApi();
let id = "id_example"; // String | 
let templateApplicationStatusPatch = new JavascriptMsxSdk.TemplateApplicationStatusPatch(); // TemplateApplicationStatusPatch | 
apiInstance.updateApplicationStatus(id, templateApplicationStatusPatch).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **templateApplicationStatusPatch** | [**TemplateApplicationStatusPatch**](TemplateApplicationStatusPatch.md)|  | 

### Return type

[**TemplateApplication**](TemplateApplication.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

