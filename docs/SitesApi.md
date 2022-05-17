# JavascriptMsxSdk.SitesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDevicesToSite**](SitesApi.md#addDevicesToSite) | **POST** /manage/api/v8/sites/{id}/devices/add | Add devices to a site.
[**addServicesToSite**](SitesApi.md#addServicesToSite) | **POST** /manage/api/v8/sites/{id}/services/add | Add services to a site.
[**createSite**](SitesApi.md#createSite) | **POST** /manage/api/v8/sites | Creates a new site.
[**deleteSite**](SitesApi.md#deleteSite) | **DELETE** /manage/api/v8/sites/{id} | Deletes a site.
[**getSite**](SitesApi.md#getSite) | **GET** /manage/api/v8/sites/{id} | Returns a site.
[**getSitesPage**](SitesApi.md#getSitesPage) | **GET** /manage/api/v8/sites | Returns a page of Sites. Only one filter is supported at a time.
[**removeDevicesFromSite**](SitesApi.md#removeDevicesFromSite) | **POST** /manage/api/v8/sites/{id}/devices/remove | Removes devices from a site.
[**removeServicesFromSite**](SitesApi.md#removeServicesFromSite) | **POST** /manage/api/v8/sites/{id}/services/remove | Remove services from a site.
[**updateSite**](SitesApi.md#updateSite) | **PUT** /manage/api/v8/sites/{id} | Updates a site.



## addDevicesToSite

> Site addDevicesToSite(id, requestBody)

Add devices to a site.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SitesApi();
let id = "id_example"; // String | 
let requestBody = ["null"]; // [String] | 
apiInstance.addDevicesToSite(id, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **requestBody** | [**[String]**](String.md)|  | 

### Return type

[**Site**](Site.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addServicesToSite

> Site addServicesToSite(id, requestBody)

Add services to a site.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SitesApi();
let id = "id_example"; // String | 
let requestBody = ["null"]; // [String] | 
apiInstance.addServicesToSite(id, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **requestBody** | [**[String]**](String.md)|  | 

### Return type

[**Site**](Site.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSite

> Site createSite(siteCreate)

Creates a new site.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SitesApi();
let siteCreate = {"tenantId":"df50cb47-0348-4bbf-96e6-9d0904008c03","deviceIds":[],"name":"Your Site Name","description":"A description of the site."}; // SiteCreate | 
apiInstance.createSite(siteCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteCreate** | [**SiteCreate**](SiteCreate.md)|  | 

### Return type

[**Site**](Site.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSite

> deleteSite(id)

Deletes a site.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SitesApi();
let id = "id_example"; // String | 
apiInstance.deleteSite(id).then(() => {
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


## getSite

> Site getSite(id, opts)

Returns a site.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SitesApi();
let id = "id_example"; // String | 
let opts = {
  'showImage': false // Boolean | 
};
apiInstance.getSite(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **showImage** | **Boolean**|  | [optional] [default to false]

### Return type

[**Site**](Site.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSitesPage

> SitesPage getSitesPage(page, pageSize, opts)

Returns a page of Sites. Only one filter is supported at a time.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SitesApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'tenantId': "tenantId_example", // String | 
  'includeSubtenants': false, // Boolean | 
  'serviceId': "serviceId_example", // String | 
  'serviceType': "serviceType_example", // String | 
  'deviceId': "deviceId_example", // String | 
  'parentId': "parentId_example", // String | 
  'type': "type_example", // String | 
  'managingControlPlaneId': "managingControlPlaneId_example", // String | 
  'showImage': false // Boolean | 
};
apiInstance.getSitesPage(page, pageSize, opts).then((data) => {
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
 **tenantId** | **String**|  | [optional] 
 **includeSubtenants** | **Boolean**|  | [optional] [default to false]
 **serviceId** | **String**|  | [optional] 
 **serviceType** | **String**|  | [optional] 
 **deviceId** | **String**|  | [optional] 
 **parentId** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **managingControlPlaneId** | **String**|  | [optional] 
 **showImage** | **Boolean**|  | [optional] [default to false]

### Return type

[**SitesPage**](SitesPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeDevicesFromSite

> Site removeDevicesFromSite(id, requestBody)

Removes devices from a site.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SitesApi();
let id = "id_example"; // String | 
let requestBody = ["null"]; // [String] | 
apiInstance.removeDevicesFromSite(id, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **requestBody** | [**[String]**](String.md)|  | 

### Return type

[**Site**](Site.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## removeServicesFromSite

> Site removeServicesFromSite(id, requestBody)

Remove services from a site.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SitesApi();
let id = "id_example"; // String | 
let requestBody = ["null"]; // [String] | 
apiInstance.removeServicesFromSite(id, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **requestBody** | [**[String]**](String.md)|  | 

### Return type

[**Site**](Site.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSite

> Site updateSite(id, siteUpdate, opts)

Updates a site.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.SitesApi();
let id = "id_example"; // String | 
let siteUpdate = {"name":"Site Three","description":"A new description with better words.","attributes":{}}; // SiteUpdate | 
let opts = {
  'sendNotification': false // Boolean | 
};
apiInstance.updateSite(id, siteUpdate, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **siteUpdate** | [**SiteUpdate**](SiteUpdate.md)|  | 
 **sendNotification** | **Boolean**|  | [optional] [default to false]

### Return type

[**Site**](Site.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

