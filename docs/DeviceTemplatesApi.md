# JavascriptMsxSdk.DeviceTemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeviceTemplate**](DeviceTemplatesApi.md#createDeviceTemplate) | **POST** /manage/api/v8/devicetemplates | Creates a device template.
[**createDeviceTemplateVersion**](DeviceTemplatesApi.md#createDeviceTemplateVersion) | **POST** /manage/api/v8/devicetemplates/versions | Creates a new version of an existing device template.
[**deleteDeviceTemplate**](DeviceTemplatesApi.md#deleteDeviceTemplate) | **DELETE** /manage/api/v8/devicetemplates/{id} | Deletes a device template.
[**getDeviceTemplate**](DeviceTemplatesApi.md#getDeviceTemplate) | **GET** /manage/api/v8/devicetemplates/{id} | Returns a device template.
[**getDeviceTemplatesList**](DeviceTemplatesApi.md#getDeviceTemplatesList) | **GET** /manage/api/v8/devicetemplates/list | Returns a list of device templates.
[**scanDeviceTemplateParameters**](DeviceTemplatesApi.md#scanDeviceTemplateParameters) | **POST** /manage/api/v8/devicetemplates/parameters/scan | API to scan parameters from the device template XML.
[**updateDeviceTemplateAccess**](DeviceTemplatesApi.md#updateDeviceTemplateAccess) | **PUT** /manage/api/v8/devicetemplates/{id}/access | Updates device template access.



## createDeviceTemplate

> DeviceTemplate createDeviceTemplate(deviceTemplateCreate)

Creates a device template.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DeviceTemplatesApi();
let deviceTemplateCreate = {"name":"name-8d4a2628-06c0-436b-8a90-d90027917405","serviceType":"manageddevice","configContent":"string","templateStandard":"nso","tenantAccess":{"global":true}}; // DeviceTemplateCreate | 
apiInstance.createDeviceTemplate(deviceTemplateCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTemplateCreate** | [**DeviceTemplateCreate**](DeviceTemplateCreate.md)|  | 

### Return type

[**DeviceTemplate**](DeviceTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDeviceTemplateVersion

> DeviceTemplate createDeviceTemplateVersion(deviceTemplateVersionCreate)

Creates a new version of an existing device template.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DeviceTemplatesApi();
let deviceTemplateVersionCreate = {"name":"string","configContent":"string"}; // DeviceTemplateVersionCreate | 
apiInstance.createDeviceTemplateVersion(deviceTemplateVersionCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTemplateVersionCreate** | [**DeviceTemplateVersionCreate**](DeviceTemplateVersionCreate.md)|  | 

### Return type

[**DeviceTemplate**](DeviceTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDeviceTemplate

> deleteDeviceTemplate(id)

Deletes a device template.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DeviceTemplatesApi();
let id = null; // String | 
apiInstance.deleteDeviceTemplate(id).then(() => {
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


## getDeviceTemplate

> DeviceTemplate getDeviceTemplate(id)

Returns a device template.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DeviceTemplatesApi();
let id = null; // String | 
apiInstance.getDeviceTemplate(id).then((data) => {
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

[**DeviceTemplate**](DeviceTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeviceTemplatesList

> [DeviceTemplate] getDeviceTemplatesList(opts)

Returns a list of device templates.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DeviceTemplatesApi();
let opts = {
  'allVersions': false, // Boolean | 
  'serviceType': manageddevice, // String | 
  'tenantId': 2664f157-18d8-4ecd-8c78-66b7cb7e1e25 // String | 
};
apiInstance.getDeviceTemplatesList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allVersions** | **Boolean**|  | [optional] [default to false]
 **serviceType** | **String**|  | [optional] 
 **tenantId** | [**String**](.md)|  | [optional] 

### Return type

[**[DeviceTemplate]**](DeviceTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scanDeviceTemplateParameters

> [String] scanDeviceTemplateParameters(opts)

API to scan parameters from the device template XML.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DeviceTemplatesApi();
let opts = {
  'file': "/path/to/file" // File | The XML template file of a device template
};
apiInstance.scanDeviceTemplateParameters(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The XML template file of a device template | [optional] 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateDeviceTemplateAccess

> DeviceTemplateAccessResponse updateDeviceTemplateAccess(id, deviceTemplateAccess)

Updates device template access.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DeviceTemplatesApi();
let id = null; // String | 
let deviceTemplateAccess = {"templateId":"49baa22e-9c25-4adc-ae30-21153965ea66","tenantIds":["e6d0e662-ed66-43ab-977a-35efc6cafe10"]}; // DeviceTemplateAccess | 
apiInstance.updateDeviceTemplateAccess(id, deviceTemplateAccess).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **deviceTemplateAccess** | [**DeviceTemplateAccess**](DeviceTemplateAccess.md)|  | 

### Return type

[**DeviceTemplateAccessResponse**](DeviceTemplateAccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

