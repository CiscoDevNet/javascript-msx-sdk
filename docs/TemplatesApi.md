# JavascriptMsxSdk.TemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTemplate**](TemplatesApi.md#deleteTemplate) | **DELETE** /template/api/v8/templates/{id} | Deletes a template.
[**getTemplate**](TemplatesApi.md#getTemplate) | **GET** /template/api/v8/templates/{id} | Returns a template by id.
[**getTemplateHistory**](TemplatesApi.md#getTemplateHistory) | **GET** /template/api/v8/templates/{id}/history | Returns a template history by id.
[**getTemplatesPage**](TemplatesApi.md#getTemplatesPage) | **GET** /template/api/v8/templates | Returns a page of templates.
[**importTemplate**](TemplatesApi.md#importTemplate) | **POST** /template/api/v8/templates | Imports a template.
[**updateTemplateStatus**](TemplatesApi.md#updateTemplateStatus) | **PATCH** /template/api/v8/templates/{id} | Updates a template status.



## deleteTemplate

> deleteTemplate(id)

Deletes a template.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplatesApi();
let id = "id_example"; // String | 
apiInstance.deleteTemplate(id).then(() => {
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


## getTemplate

> Template getTemplate(id)

Returns a template by id.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplatesApi();
let id = "id_example"; // String | 
apiInstance.getTemplate(id).then((data) => {
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

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplateHistory

> [Template] getTemplateHistory(id)

Returns a template history by id.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplatesApi();
let id = "id_example"; // String | 
apiInstance.getTemplateHistory(id).then((data) => {
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

[**[Template]**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTemplatesPage

> TemplatesPage getTemplatesPage(page, pageSize, opts)

Returns a page of templates.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplatesApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'calculateTotalItems': true, // Boolean | 
  'externalId': "externalId_example", // String | External ID to filter templates by.
  'service': "service_example", // String | Name of service to filter templates by.
  'tags': ["null"] // [String] | 
};
apiInstance.getTemplatesPage(page, pageSize, opts).then((data) => {
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
 **calculateTotalItems** | **Boolean**|  | [optional] 
 **externalId** | **String**| External ID to filter templates by. | [optional] 
 **service** | **String**| Name of service to filter templates by. | [optional] 
 **tags** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TemplatesPage**](TemplatesPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importTemplate

> Template importTemplate(templateCreate)

Imports a template.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplatesApi();
let templateCreate = new JavascriptMsxSdk.TemplateCreate(); // TemplateCreate | 
apiInstance.importTemplate(templateCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateCreate** | [**TemplateCreate**](TemplateCreate.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTemplateStatus

> Template updateTemplateStatus(id, templatePatch)

Updates a template status.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TemplatesApi();
let id = "id_example"; // String | 
let templatePatch = new JavascriptMsxSdk.TemplatePatch(); // TemplatePatch | 
apiInstance.updateTemplateStatus(id, templatePatch).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **templatePatch** | [**TemplatePatch**](TemplatePatch.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

