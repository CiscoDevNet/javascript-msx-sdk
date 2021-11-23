# JavascriptMsxSdk.IncidentConfigurationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceNowConfiguration**](IncidentConfigurationsApi.md#createServiceNowConfiguration) | **POST** /incident/api/v8/configurations | Creates a ServiceNow configuration.
[**deleteServiceNowConfiguration**](IncidentConfigurationsApi.md#deleteServiceNowConfiguration) | **DELETE** /incident/api/v8/configurations/{id} | Deletes a ServiceNow configuration.
[**getConfiguration**](IncidentConfigurationsApi.md#getConfiguration) | **GET** /incident/api/v1/config | API to get configuration of encloud service.
[**getServiceNowConfiguration**](IncidentConfigurationsApi.md#getServiceNowConfiguration) | **GET** /incident/api/v8/configurations/{id} | Returns a ServiceNow configuration.
[**getServiceNowConfigurationsPage**](IncidentConfigurationsApi.md#getServiceNowConfigurationsPage) | **GET** /incident/api/v8/configurations | Returns a ServiceNow configurations.
[**patchConfiguration**](IncidentConfigurationsApi.md#patchConfiguration) | **PATCH** /incident/api/v1/config | API to patch configure encloud service
[**updateConfiguration**](IncidentConfigurationsApi.md#updateConfiguration) | **PUT** /incident/api/v1/config | API to configure encloud service.



## createServiceNowConfiguration

> ServiceNowConfiguration createServiceNowConfiguration(serviceNowConfigurationCreate)

Creates a ServiceNow configuration.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentConfigurationsApi();
let serviceNowConfigurationCreate = new JavascriptMsxSdk.ServiceNowConfigurationCreate(); // ServiceNowConfigurationCreate | 
apiInstance.createServiceNowConfiguration(serviceNowConfigurationCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceNowConfigurationCreate** | [**ServiceNowConfigurationCreate**](ServiceNowConfigurationCreate.md)|  | 

### Return type

[**ServiceNowConfiguration**](ServiceNowConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteServiceNowConfiguration

> deleteServiceNowConfiguration(id)

Deletes a ServiceNow configuration.

Delete service now configuration, only if no associated entities exists.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentConfigurationsApi();
let id = null; // String | 
apiInstance.deleteServiceNowConfiguration(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConfiguration

> IncidentConfig getConfiguration()

API to get configuration of encloud service.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentConfigurationsApi();
apiInstance.getConfiguration().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**IncidentConfig**](IncidentConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceNowConfiguration

> ServiceNowConfiguration getServiceNowConfiguration(id)

Returns a ServiceNow configuration.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentConfigurationsApi();
let id = null; // String | 
apiInstance.getServiceNowConfiguration(id).then((data) => {
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

[**ServiceNowConfiguration**](ServiceNowConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceNowConfigurationsPage

> ServiceNowConfigurationsPage getServiceNowConfigurationsPage(page, pageSize, opts)

Returns a ServiceNow configurations.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentConfigurationsApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'tenantId': null, // String | 
  'domain': "domain_example" // String | 
};
apiInstance.getServiceNowConfigurationsPage(page, pageSize, opts).then((data) => {
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
 **tenantId** | [**String**](.md)|  | [optional] 
 **domain** | **String**|  | [optional] 

### Return type

[**ServiceNowConfigurationsPage**](ServiceNowConfigurationsPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchConfiguration

> IncidentConfig patchConfiguration(incidentConfigPatch)

API to patch configure encloud service

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentConfigurationsApi();
let incidentConfigPatch = new JavascriptMsxSdk.IncidentConfigPatch(); // IncidentConfigPatch | 
apiInstance.patchConfiguration(incidentConfigPatch).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incidentConfigPatch** | [**IncidentConfigPatch**](IncidentConfigPatch.md)|  | 

### Return type

[**IncidentConfig**](IncidentConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConfiguration

> IncidentConfig updateConfiguration(incidentConfigUpdate)

API to configure encloud service.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentConfigurationsApi();
let incidentConfigUpdate = new JavascriptMsxSdk.IncidentConfigUpdate(); // IncidentConfigUpdate | 
apiInstance.updateConfiguration(incidentConfigUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incidentConfigUpdate** | [**IncidentConfigUpdate**](IncidentConfigUpdate.md)|  | 

### Return type

[**IncidentConfig**](IncidentConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

