# JavascriptMsxSdk.OffersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOffer**](OffersApi.md#createOffer) | **POST** /consume/api/v8/offers | Creates a product offer.
[**deleteOffer**](OffersApi.md#deleteOffer) | **DELETE** /consume/api/v8/offers/{id} | Deletes a product offer
[**getOffer**](OffersApi.md#getOffer) | **GET** /consume/api/v8/offers/{id} | Returns a product offer.
[**getOfferAssignmentsList**](OffersApi.md#getOfferAssignmentsList) | **GET** /consume/api/v8/offers/{id}/assignments/list | Returns a list of tenant assignments for a product offer.
[**getOffersCount**](OffersApi.md#getOffersCount) | **GET** /consume/api/v8/offers/count | Returns the number of product offers.
[**getOffersPage**](OffersApi.md#getOffersPage) | **GET** /consume/api/v8/offers | Returns a page of product offers.
[**updateOffer**](OffersApi.md#updateOffer) | **PUT** /consume/api/v8/offers/{id} | Updates a product offer.
[**updateOfferAssignments**](OffersApi.md#updateOfferAssignments) | **PUT** /consume/api/v8/offers/{id}/assignments | Updates the tenant assignemnts for a product offer.



## createOffer

> Offer createOffer(offerCreate)

Creates a product offer.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.OffersApi();
let offerCreate = {"name":"cisco.consume.service.manageddevice.label","label":"cisco.consume.manageddevice.offer.manageddevice.full","description":"cisco.consume.service.manageddevice.description.label","productId":"83432bdd-1293-4bf3-ab53-77a199e2beff","version":1,"displayOrder":1,"image":"services/manageddevice/images/managed-cpe.svg","price":"test","type":"test","supportedProperties":["Basic-small"],"supportedOptions":[{"name":"Centralized_device_management","value":"Yes"},{"name":"Zero_Touch_Deployment","value":"Yes"},{"name":"Configuration_templates","value":"Yes"},{"name":"Monitoring_and_metrics","value":"Yes"}]}; // OfferCreate | 
apiInstance.createOffer(offerCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerCreate** | [**OfferCreate**](OfferCreate.md)|  | 

### Return type

[**Offer**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOffer

> deleteOffer(id)

Deletes a product offer

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.OffersApi();
let id = "id_example"; // String | 
apiInstance.deleteOffer(id).then(() => {
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


## getOffer

> Offer getOffer(id)

Returns a product offer.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.OffersApi();
let id = "id_example"; // String | 
apiInstance.getOffer(id).then((data) => {
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

[**Offer**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOfferAssignmentsList

> [CatalogAssignment] getOfferAssignmentsList(id)

Returns a list of tenant assignments for a product offer.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.OffersApi();
let id = "id_example"; // String | 
apiInstance.getOfferAssignmentsList(id).then((data) => {
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

[**[CatalogAssignment]**](CatalogAssignment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOffersCount

> Number getOffersCount(opts)

Returns the number of product offers.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.OffersApi();
let opts = {
  'productId': "productId_example", // String | 
  'tenantId': "tenantId_example" // String | 
};
apiInstance.getOffersCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**|  | [optional] 
 **tenantId** | **String**|  | [optional] 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOffersPage

> OffersPage getOffersPage(page, pageSize, opts)

Returns a page of product offers.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.OffersApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'productId': "productId_example", // String | 
  'tenantIds': ["null"] // [String] | 
};
apiInstance.getOffersPage(page, pageSize, opts).then((data) => {
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
 **productId** | **String**|  | [optional] 
 **tenantIds** | [**[String]**](String.md)|  | [optional] 

### Return type

[**OffersPage**](OffersPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOffer

> Offer updateOffer(id, offerUpdate)

Updates a product offer.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.OffersApi();
let id = "id_example"; // String | 
let offerUpdate = {"name":"branches","label":"cisco.consume.service.vbranch.offer.name","description":"cisco.consume.service.vbranch.offer.description","productId":"46bad1ba-2704-419d-b9b4-f1cdff79da4f","version":1,"displayOrder":1,"image":"/services/vbranch/images/icons/image_vbranch_service.svg","price":null,"type":null,"supportedProperties":["Basic-small"],"supportedOptions":[{"name":"Template_Development_Environment","value":"Yes"},{"name":"Zero_Touch_Deployment","value":"Yes"},{"name":"Custom_Service_Chaining","value":"Yes"},{"name":"Third_Party","value":"Yes"}],"approvals":null}; // OfferUpdate | 
apiInstance.updateOffer(id, offerUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **offerUpdate** | [**OfferUpdate**](OfferUpdate.md)|  | 

### Return type

[**Offer**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOfferAssignments

> [CatalogAssignment] updateOfferAssignments(id, requestBody)

Updates the tenant assignemnts for a product offer.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.OffersApi();
let id = "id_example"; // String | 
let requestBody = ["e8ff9360-c8f1-4f06-84d8-d8105bd29e1e","3c64b303-ec28-4fe2-99b5-13f521b92700","48feaddb-45d0-4126-a216-3e450bfdbba4"]; // [String] | 
apiInstance.updateOfferAssignments(id, requestBody).then((data) => {
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

[**[CatalogAssignment]**](CatalogAssignment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

