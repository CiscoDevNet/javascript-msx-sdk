# JavascriptMsxSdk.BillingEventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCostSummary**](BillingEventsApi.md#getCostSummary) | **GET** /billing/api/v8/events/costs | Retrieve a summary for tenant cost.
[**getEvent**](BillingEventsApi.md#getEvent) | **GET** /billing/api/v8/events/{id} | Get an Event.
[**getEventsPage**](BillingEventsApi.md#getEventsPage) | **GET** /billing/api/v8/events | Retrieve a page of events for tenant.



## getCostSummary

> BillingCostsReport getCostSummary(tenantId, opts)

Retrieve a summary for tenant cost.

Needs VIEW_COSTS permission to view cost details.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingEventsApi();
let tenantId = null; // String | 
let opts = {
  'fromDate': 2020-09-18T18:37:33.810Z, // Date | 
  'toDate': 2020-09-19T18:37:33.810Z, // Date | 
  'groupBy': type, subtype or service // String | 
};
apiInstance.getCostSummary(tenantId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**String**](.md)|  | 
 **fromDate** | **Date**|  | [optional] 
 **toDate** | **Date**|  | [optional] 
 **groupBy** | **String**|  | [optional] 

### Return type

[**BillingCostsReport**](BillingCostsReport.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEvent

> BillingEvent getEvent(id)

Get an Event.

Needs VIEW_EVENTS permission to get a billing event.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingEventsApi();
let id = null; // String | 
apiInstance.getEvent(id).then((data) => {
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

[**BillingEvent**](BillingEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventsPage

> BillingEventsPage getEventsPage(tenantId, page, pageSize, opts)

Retrieve a page of events for tenant.

Needs VIEW_EVENTS permission to view the billing events.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingEventsApi();
let tenantId = null; // String | 
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'fromDate': 2020-09-18T18:37:33.810Z, // Date | 
  'toDate': 2020-09-19T18:37:33.810Z, // Date | 
  'type': "type_example", // String | 
  'subtype': "subtype_example" // String | 
};
apiInstance.getEventsPage(tenantId, page, pageSize, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**String**](.md)|  | 
 **page** | **Number**|  | 
 **pageSize** | **Number**|  | 
 **fromDate** | **Date**|  | [optional] 
 **toDate** | **Date**|  | [optional] 
 **type** | **String**|  | [optional] 
 **subtype** | **String**|  | [optional] 

### Return type

[**BillingEventsPage**](BillingEventsPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

