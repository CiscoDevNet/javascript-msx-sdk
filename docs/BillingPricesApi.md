# JavascriptMsxSdk.BillingPricesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPrice**](BillingPricesApi.md#addPrice) | **POST** /billing/api/v8/prices | Add price for tenant and event type.
[**deletePrice**](BillingPricesApi.md#deletePrice) | **DELETE** /billing/api/v8/prices/{id} | Delete a price.
[**getPrice**](BillingPricesApi.md#getPrice) | **GET** /billing/api/v8/prices/{id} | Get a price.
[**getPricesPage**](BillingPricesApi.md#getPricesPage) | **GET** /billing/api/v8/prices | Retrieve a page of prices.
[**updatePrice**](BillingPricesApi.md#updatePrice) | **PUT** /billing/api/v8/prices/{id} | Update price for an event type and tenant.



## addPrice

> BillingPrice addPrice(billingPriceCreate)

Add price for tenant and event type.

Needs MANAGE_PRICES permission to allow for the creation of a price.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingPricesApi();
let billingPriceCreate = new JavascriptMsxSdk.BillingPriceCreate(); // BillingPriceCreate | 
apiInstance.addPrice(billingPriceCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingPriceCreate** | [**BillingPriceCreate**](BillingPriceCreate.md)|  | 

### Return type

[**BillingPrice**](BillingPrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletePrice

> deletePrice(id)

Delete a price.

Needs MANAGE_PRICES permission to delete a price.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingPricesApi();
let id = "id_example"; // String | 
apiInstance.deletePrice(id).then(() => {
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


## getPrice

> BillingPrice getPrice(id)

Get a price.

Needs VIEW_PRICES permission to get pricing detail.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingPricesApi();
let id = "id_example"; // String | 
apiInstance.getPrice(id).then((data) => {
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

[**BillingPrice**](BillingPrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPricesPage

> BillingPricesPage getPricesPage(tenantId, page, pageSize, opts)

Retrieve a page of prices.

Needs VIEW_PRICES permission to view the pricing details.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingPricesApi();
let tenantId = "tenantId_example"; // String | 
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'type': "type_example", // String | 
  'subtype': "subtype_example" // String | 
};
apiInstance.getPricesPage(tenantId, page, pageSize, opts).then((data) => {
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
 **type** | **String**|  | [optional] 
 **subtype** | **String**|  | [optional] 

### Return type

[**BillingPricesPage**](BillingPricesPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePrice

> BillingPrice updatePrice(id, billingPriceUpdate)

Update price for an event type and tenant.

Needs MANAGE_PRICES permission to update a pricing detail.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.BillingPricesApi();
let id = "id_example"; // String | 
let billingPriceUpdate = new JavascriptMsxSdk.BillingPriceUpdate(); // BillingPriceUpdate | 
apiInstance.updatePrice(id, billingPriceUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **billingPriceUpdate** | [**BillingPriceUpdate**](BillingPriceUpdate.md)|  | 

### Return type

[**BillingPrice**](BillingPrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

