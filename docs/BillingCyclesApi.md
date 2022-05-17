# JavascriptMsxSdk.BillingCyclesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBillingCycle**](BillingCyclesApi.md#addBillingCycle) | **POST** /billing/api/v8/cycles | Add a billing cycle.
[**deleteBillingCycle**](BillingCyclesApi.md#deleteBillingCycle) | **DELETE** /billing/api/v8/cycles/{id} | Delete a billing cycle.
[**getBillingCycle**](BillingCyclesApi.md#getBillingCycle) | **GET** /billing/api/v8/cycles/{id} | Get a billing cycle.
[**getBillingCyclesPage**](BillingCyclesApi.md#getBillingCyclesPage) | **GET** /billing/api/v8/cycles | Retrieve a page of billing cycles.
[**processBillingCycle**](BillingCyclesApi.md#processBillingCycle) | **POST** /billing/api/v8/cycles/process | Process a billing cycle.
[**updateBillingCycle**](BillingCyclesApi.md#updateBillingCycle) | **PUT** /billing/api/v8/cycles/{id} | Update billing cycle for an event type and tenant.



## addBillingCycle

> BillingCycle addBillingCycle(billingCycleCreate)

Add a billing cycle.

Needs MANAGE_BILLINGCYCLE permission to allow for the creation a billing cycle.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingCyclesApi();
let billingCycleCreate = new JavascriptMsxSdk.BillingCycleCreate(); // BillingCycleCreate | 
apiInstance.addBillingCycle(billingCycleCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCycleCreate** | [**BillingCycleCreate**](BillingCycleCreate.md)|  | 

### Return type

[**BillingCycle**](BillingCycle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBillingCycle

> deleteBillingCycle(id)

Delete a billing cycle.

Needs MANAGE_BILLINGCYCLE permission to delete a billing cycle.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingCyclesApi();
let id = "id_example"; // String | 
apiInstance.deleteBillingCycle(id).then(() => {
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


## getBillingCycle

> BillingCycle getBillingCycle(id)

Get a billing cycle.

Needs VIEW_BILLINGCYCLE permission to get billing cycle detail.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingCyclesApi();
let id = "id_example"; // String | 
apiInstance.getBillingCycle(id).then((data) => {
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

[**BillingCycle**](BillingCycle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBillingCyclesPage

> BillingCyclesPage getBillingCyclesPage(tenantId, page, pageSize, opts)

Retrieve a page of billing cycles.

Needs VIEW_BILLINGCYCLE permission to view the billing cycle details.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingCyclesApi();
let tenantId = "tenantId_example"; // String | 
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'nextBilledOn': 2020-09-18T18:37:33.810Z // Date | 
};
apiInstance.getBillingCyclesPage(tenantId, page, pageSize, opts).then((data) => {
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
 **nextBilledOn** | **Date**|  | [optional] 

### Return type

[**BillingCyclesPage**](BillingCyclesPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## processBillingCycle

> BillingCycleProcessAccepted processBillingCycle(billingCycleProcess)

Process a billing cycle.

Needs MANAGE_BILLINGCYCLE permission to allow for the creation a billing cycle.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingCyclesApi();
let billingCycleProcess = new JavascriptMsxSdk.BillingCycleProcess(); // BillingCycleProcess | 
apiInstance.processBillingCycle(billingCycleProcess).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCycleProcess** | [**BillingCycleProcess**](BillingCycleProcess.md)|  | 

### Return type

[**BillingCycleProcessAccepted**](BillingCycleProcessAccepted.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBillingCycle

> BillingCycle updateBillingCycle(id, billingCycleUpdate)

Update billing cycle for an event type and tenant.

Needs MANAGE_BILLINGCYCLE permission to update a billing cycle detail.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingCyclesApi();
let id = "id_example"; // String | 
let billingCycleUpdate = new JavascriptMsxSdk.BillingCycleUpdate(); // BillingCycleUpdate | 
apiInstance.updateBillingCycle(id, billingCycleUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **billingCycleUpdate** | [**BillingCycleUpdate**](BillingCycleUpdate.md)|  | 

### Return type

[**BillingCycle**](BillingCycle.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

