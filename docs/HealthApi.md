# JavascriptMsxSdk.HealthApi

All URIs are relative to *http://localhost:8765*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDevicesHealthList**](HealthApi.md#getDevicesHealthList) | **GET** /monitor/api/v8/health/devices/list | 
[**getServicesHealthList**](HealthApi.md#getServicesHealthList) | **GET** /monitor/api/v8/health/services/list | 



## getDevicesHealthList

> [ResourceHealth] getDevicesHealthList(ids)



### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.HealthApi();
let ids = ["null"]; // [String] | 
apiInstance.getDevicesHealthList(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 

### Return type

[**[ResourceHealth]**](ResourceHealth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServicesHealthList

> [ResourceHealth] getServicesHealthList(ids)



### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.HealthApi();
let ids = ["null"]; // [String] | 
apiInstance.getServicesHealthList(ids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 

### Return type

[**[ResourceHealth]**](ResourceHealth.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

