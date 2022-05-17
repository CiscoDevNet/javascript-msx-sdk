# JavascriptMsxSdk.DevicesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachDeviceTemplates**](DevicesApi.md#attachDeviceTemplates) | **POST** /manage/api/v8/devices/{id}/templates | Attaches one or more device templates to a device instance.
[**batchAttachDeviceTemplates**](DevicesApi.md#batchAttachDeviceTemplates) | **POST** /manage/api/v8/devices/templates/attach | Attaches one or more device templates to a batch of device instances.
[**createDevice**](DevicesApi.md#createDevice) | **POST** /manage/api/v8/devices | Creates a device.
[**deleteDevice**](DevicesApi.md#deleteDevice) | **DELETE** /manage/api/v8/devices/{id} | Deletes a device.
[**detachDeviceTemplate**](DevicesApi.md#detachDeviceTemplate) | **DELETE** /manage/api/v8/devices/{id}/templates/{templateId} | Detaches a template from a device.
[**detachDeviceTemplates**](DevicesApi.md#detachDeviceTemplates) | **DELETE** /manage/api/v8/devices/{id}/templates | Detach device templates that are already attached to a device.
[**getDevice**](DevicesApi.md#getDevice) | **GET** /manage/api/v8/devices/{id} | Returns a device.
[**getDeviceConfig**](DevicesApi.md#getDeviceConfig) | **GET** /manage/api/v8/devices/{id}/config | Returns the running configuration for a device.
[**getDeviceTemplateHistory**](DevicesApi.md#getDeviceTemplateHistory) | **GET** /manage/api/v8/devices/{id}/templates | Returns device template history.
[**getDevicesPage**](DevicesApi.md#getDevicesPage) | **GET** /manage/api/v8/devices | Returns a page of devices.
[**patchDevice**](DevicesApi.md#patchDevice) | **PATCH** /manage/api/v8/devices/{id} | Update a device.
[**redeployDevice**](DevicesApi.md#redeployDevice) | **POST** /manage/api/v8/devices/{id}/redeploy | Dedeploys a device.
[**updateDevice**](DevicesApi.md#updateDevice) | **PUT** /manage/api/v8/devices/{id} | Update a device.
[**updateDeviceConfig**](DevicesApi.md#updateDeviceConfig) | **POST** /manage/api/v8/devices/{id}/config/update | push device configuration to the actual device
[**updateDeviceTemplates**](DevicesApi.md#updateDeviceTemplates) | **PUT** /manage/api/v8/devices/{id}/templates | Update device templates that are already attached to a device.



## attachDeviceTemplates

> [DeviceTemplateHistory] attachDeviceTemplates(id, deviceTemplateAttachRequest)

Attaches one or more device templates to a device instance.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
let deviceTemplateAttachRequest = {"templateDetails":[{"templateId":"e7e20070-9d67-40a8-a21d-f655606b7421","templateParams":[{"name":"name1","value":"value10461b304-da18-42bd-a48b-502d8e5166a4"},{"name":"name2","value":"value217c83dd3-f732-4a36-ae27-d86599c7f513"}]},{"templateId":"87710499-3431-4c53-8ce2-c28170c261e7","templateParams":[{"name":"name1","value":"value1fc9ca565-8a74-401a-9dce-5fe35d203150"},{"name":"name2","value":"value2bfde5275-8d32-4e2c-b023-7b987cb9a1ff"}]}]}; // DeviceTemplateAttachRequest | 
apiInstance.attachDeviceTemplates(id, deviceTemplateAttachRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **deviceTemplateAttachRequest** | [**DeviceTemplateAttachRequest**](DeviceTemplateAttachRequest.md)|  | 

### Return type

[**[DeviceTemplateHistory]**](DeviceTemplateHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchAttachDeviceTemplates

> [Array] batchAttachDeviceTemplates(deviceTemplateBatchAttachRequest)

Attaches one or more device templates to a batch of device instances.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let deviceTemplateBatchAttachRequest = new JavascriptMsxSdk.DeviceTemplateBatchAttachRequest(); // DeviceTemplateBatchAttachRequest | 
apiInstance.batchAttachDeviceTemplates(deviceTemplateBatchAttachRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceTemplateBatchAttachRequest** | [**DeviceTemplateBatchAttachRequest**](DeviceTemplateBatchAttachRequest.md)|  | 

### Return type

**[Array]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDevice

> Device createDevice(deviceCreate)

Creates a device.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let deviceCreate = {"tenantId":"4ea8924b-fb40-43ae-ad10-de99139e7357","name":"device-name-5fb3c0fb-0bdf-485a-ad63-15106c6e3bed","model":"CISCO CSR 1000v","type":"CISCO CSR 1000v","serviceType":"manageddevice","serialKey":"CLctKw8azMR","version":"123","managed":true,"onboardType":"direct","onboardInformation":{"serviceType":"manageddevice","variables":"{\"ONBOARDING_INTERFACE\":\"GigabitEthernet1\",\"CUSTOMER_PASSWORD_MD5\":\"$8$/lH9SrDINF1YkYD7/x9FSYHnoxeAY4AEcncCGbe1ZWGOGx1nkn6+EdsPYacwXUdh\",\"CPE_SNMP_V3_AUTH_PASS\":\"$8$BnSiQUd4kW5VqGe/6jLziV59kU3n4DKKumlBgVGMCRIV6dcRzybuNJ16cGZE+G+A\",\"onboarding-template-id\":\"cisco-ios-secure-onboarding\",\"CPE_SNMP_V3_PRIV_PASS\":\"$8$Tx9ngrtcjB+l9ihlUJTAYFE10GhI+8IB43he/+SGbnr45Bi0ETyP9Wq90km3gbeh\",\"ENABLE_SECRET\":\"$8$maC3mSZ0hY4c25G7M6bWBsx9+b5ys1Ehin/SJFIuwNjh50BQpR0sSpGOXo0BvG0d\",\"CUSTOMER_USERNAME\":\"vmsmd33\"}","address":"10.254.0.3","always-allocate-ip":"true","ned-id":"cisco-ios","onboarding-template-done":"true","password":"$8$/lH9SrDINF1YkYD7/x9FSYHnoxeAY4AEcncCGbe1ZWGOGx1nkn6+EdsPYacwXUdh","port":"22","secondary-password":"$8$maC3mSZ0hY4c25G7M6bWBsx9+b5ys1Ehin/SJFIuwNjh50BQpR0sSpGOXo0BvG0d","device-type":"cli","original-address":"3.134.83.79","username":"vmsmd33"}}; // DeviceCreate | 
apiInstance.createDevice(deviceCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceCreate** | [**DeviceCreate**](DeviceCreate.md)|  | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDevice

> deleteDevice(id)

Deletes a device.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
apiInstance.deleteDevice(id).then(() => {
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


## detachDeviceTemplate

> [DeviceTemplateHistory] detachDeviceTemplate(id, templateId)

Detaches a template from a device.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
let templateId = "templateId_example"; // String | 
apiInstance.detachDeviceTemplate(id, templateId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **templateId** | **String**|  | 

### Return type

[**[DeviceTemplateHistory]**](DeviceTemplateHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## detachDeviceTemplates

> [DeviceTemplateHistory] detachDeviceTemplates(id)

Detach device templates that are already attached to a device.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
apiInstance.detachDeviceTemplates(id).then((data) => {
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

[**[DeviceTemplateHistory]**](DeviceTemplateHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDevice

> Device getDevice(id)

Returns a device.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
apiInstance.getDevice(id).then((data) => {
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

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeviceConfig

> String getDeviceConfig(id)

Returns the running configuration for a device.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
apiInstance.getDeviceConfig(id).then((data) => {
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
- **Accept**: text/plain, application/json


## getDeviceTemplateHistory

> [DeviceTemplateHistory] getDeviceTemplateHistory(id, opts)

Returns device template history.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
let opts = {
  'templateId': "templateId_example" // String | 
};
apiInstance.getDeviceTemplateHistory(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **templateId** | **String**|  | [optional] 

### Return type

[**[DeviceTemplateHistory]**](DeviceTemplateHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDevicesPage

> DevicesPage getDevicesPage(page, pageSize, opts)

Returns a page of devices.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'deviceIds': ["null"], // [String] | 
  'serviceIds': ["null"], // [String] | 
  'types': ["null"], // [String] | 
  'serialKeys': ["null"], // [String] | 
  'serviceTypes': ["null"], // [String] | 
  'models': ["null"], // [String] | 
  'subtypes': ["null"], // [String] | 
  'names': ["null"], // [String] | 
  'versions': ["null"], // [String] | 
  'tenantIds': ["null"], // [String] | 
  'includeSubtenants': false, // Boolean | 
  'severities': ["null"], // [String] | 
  'complianceStates': ["null"], // [String] | Valid values: COMPLIANT, NOT_COMPLIANT, APPLICABLE, NOT_APPLICABLE, UNKNOWN
  'vulnerabilityStates': ["null"], // [String] | Valid values: VULNERABLE, NOT_VULNERABLE, NOT_APPLICABLE, UNKNOWN
  'sortBy': name, // String | 
  'sortOrder': "'asc'" // String | 
};
apiInstance.getDevicesPage(page, pageSize, opts).then((data) => {
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
 **deviceIds** | [**[String]**](String.md)|  | [optional] 
 **serviceIds** | [**[String]**](String.md)|  | [optional] 
 **types** | [**[String]**](String.md)|  | [optional] 
 **serialKeys** | [**[String]**](String.md)|  | [optional] 
 **serviceTypes** | [**[String]**](String.md)|  | [optional] 
 **models** | [**[String]**](String.md)|  | [optional] 
 **subtypes** | [**[String]**](String.md)|  | [optional] 
 **names** | [**[String]**](String.md)|  | [optional] 
 **versions** | [**[String]**](String.md)|  | [optional] 
 **tenantIds** | [**[String]**](String.md)|  | [optional] 
 **includeSubtenants** | **Boolean**|  | [optional] [default to false]
 **severities** | [**[String]**](String.md)|  | [optional] 
 **complianceStates** | [**[String]**](String.md)| Valid values: COMPLIANT, NOT_COMPLIANT, APPLICABLE, NOT_APPLICABLE, UNKNOWN | [optional] 
 **vulnerabilityStates** | [**[String]**](String.md)| Valid values: VULNERABLE, NOT_VULNERABLE, NOT_APPLICABLE, UNKNOWN | [optional] 
 **sortBy** | **String**|  | [optional] 
 **sortOrder** | **String**|  | [optional] [default to &#39;asc&#39;]

### Return type

[**DevicesPage**](DevicesPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## patchDevice

> Device patchDevice(id, devicePatch)

Update a device.

When present, property values are replaced in their entirety (i.e. object/map values are not merged)

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
let devicePatch = new JavascriptMsxSdk.DevicePatch(); // DevicePatch | 
apiInstance.patchDevice(id, devicePatch).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **devicePatch** | [**DevicePatch**](DevicePatch.md)|  | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## redeployDevice

> redeployDevice(id)

Dedeploys a device.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
apiInstance.redeployDevice(id).then(() => {
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


## updateDevice

> Device updateDevice(id, deviceUpdate)

Update a device.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
let deviceUpdate = new JavascriptMsxSdk.DeviceUpdate(); // DeviceUpdate | 
apiInstance.updateDevice(id, deviceUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **deviceUpdate** | [**DeviceUpdate**](DeviceUpdate.md)|  | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDeviceConfig

> ManageChangeRequestPending updateDeviceConfig(id, deviceConfigUpdate)

push device configuration to the actual device

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
let deviceConfigUpdate = {"correlationId":"e7e20070-9d67-40a8-a21d-f655606b7421","configContent":"Building configuration...\n!\n! Last configuration change at 20:36:57 UTC Tue Aug 4 2020\n!\nversion 16.9\nservice timestamps debug datetime msec\nservice timestamps log datetime msec\nservice password-encryption\nservice call-home\nplatform qfp utilization monitor load 80\nno platform punt-keepalive disable-kernel-core\nplatform console virtual\nplatform hardware throughput level MB 100\n!\nlength 0\ntransport input ssh\nline vty 5 15\nexec-timeout 30 0\nprivilege level 15\nauthorization exec none\nlogging synchronous\ntransport input ssh\n!\n!\n!\n!\n!\n!\n!\npnp profile msx-pnp\ntransport https ipv4 192.171.16.174 port 8443 source GigabitEthernet1\nend\n","format":"cli"}; // DeviceConfigUpdate | 
apiInstance.updateDeviceConfig(id, deviceConfigUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **deviceConfigUpdate** | [**DeviceConfigUpdate**](DeviceConfigUpdate.md)|  | 

### Return type

[**ManageChangeRequestPending**](ManageChangeRequestPending.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateDeviceTemplates

> [DeviceTemplateHistory] updateDeviceTemplates(id, deviceTemplateUpdateRequest)

Update device templates that are already attached to a device.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.DevicesApi();
let id = "id_example"; // String | 
let deviceTemplateUpdateRequest = new JavascriptMsxSdk.DeviceTemplateUpdateRequest(); // DeviceTemplateUpdateRequest | 
apiInstance.updateDeviceTemplates(id, deviceTemplateUpdateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **deviceTemplateUpdateRequest** | [**DeviceTemplateUpdateRequest**](DeviceTemplateUpdateRequest.md)|  | 

### Return type

[**[DeviceTemplateHistory]**](DeviceTemplateHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

