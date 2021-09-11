# JavascriptMsxSdk.ServicesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteService**](ServicesApi.md#deleteService) | **DELETE** /manage/api/v8/services/{id} | Deletes a service.
[**getService**](ServicesApi.md#getService) | **GET** /manage/api/v8/services/{id} | Returns a service.
[**getServicesPage**](ServicesApi.md#getServicesPage) | **GET** /manage/api/v8/services | Returns a page of services.
[**submitOrder**](ServicesApi.md#submitOrder) | **POST** /manage/api/v8/services | Submits an order.
[**updateOrder**](ServicesApi.md#updateOrder) | **PUT** /manage/api/v8/services | Updates an order.
[**updateService**](ServicesApi.md#updateService) | **PUT** /manage/api/v8/services/{id} | Updates a service.



## deleteService

> deleteService(id)

Deletes a service.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ServicesApi();
let id = "id_example"; // String | 
apiInstance.deleteService(id).then(() => {
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


## getService

> Service getService(id)

Returns a service.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ServicesApi();
let id = "id_example"; // String | 
apiInstance.getService(id).then((data) => {
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

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServicesPage

> ServicesPage getServicesPage(page, pageSize, opts)

Returns a page of services.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ServicesApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'tenantIds': ["null"] // [String] | 
};
apiInstance.getServicesPage(page, pageSize, opts).then((data) => {
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
 **tenantIds** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ServicesPage**](ServicesPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitOrder

> LegacyServiceOrderResponse submitOrder(productId, offerId, legacyServiceOrder)

Submits an order.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ServicesApi();
let productId = null; // String | 
let offerId = null; // String | 
let legacyServiceOrder = {"type":"request","serviceType":"manageddevice","action":"orderOffer","payload":{"service":{"template":"manageddevice-2.0.ftl","orchestrator":"ncs","incomplete":"true","name":"manageddevice","id":"5872e764-c459-11e7-abc4-cec278b6b50a","type":"manageddevice","version":"1"},"tenant":{"id":"87f25b97-5cfa-4f30-b72c-a6c1ee13fa87","name":"b2b77db8-dbd9-46b4-8db5-6da58b36984e"},"user":{"name":"Super","id":"superuser"},"provider":{"id":"fe3ad89c-449f-42f2-b4f8-b10ab7bc0266","name":"CiscoSystems"},"offer":{"id":"627a75ec-c459-11e7-abc4-cec278b6b50a","name":"cisco.consume.service.manageddevice.label","type":"full","label":"cisco.consume.manageddevice.offer.manageddevice.full"},"cost":{"deviceTotal":"0","deviceTotalType":"USD","serviceTotal":"0","serviceTotalType":"USD"},"subscriptionDetail":{"sites":[],"serviceInstanceDetail":{"tenantId":"87f25b97-5cfa-4f30-b72c-a6c1ee13fa87","tenantName":"b2b77db8-dbd9-46b4-8db5-6da58b36984e"}},"serviceDowngrade":{},"nsoResponseTypes":{"createOperation":"pnp","updateOperation":"pnp","deleteOperation":"pnp"}}}; // LegacyServiceOrder | 
apiInstance.submitOrder(productId, offerId, legacyServiceOrder).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**String**](.md)|  | 
 **offerId** | [**String**](.md)|  | 
 **legacyServiceOrder** | [**LegacyServiceOrder**](LegacyServiceOrder.md)|  | 

### Return type

[**LegacyServiceOrderResponse**](LegacyServiceOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOrder

> LegacyServiceOrderResponse updateOrder(productId, offerId, legacyServiceOrder)

Updates an order.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ServicesApi();
let productId = null; // String | 
let offerId = null; // String | 
let legacyServiceOrder = {"type":"request","serviceType":"manageddevice","action":"orderOffer","payload":{"service":{"template":"manageddevice-2.0.ftl","orchestrator":"ncs","incomplete":"true","name":"manageddevice","id":"5872e764-c459-11e7-abc4-cec278b6b50a","type":"manageddevice","version":"1"},"tenant":{"id":"b3366642-8865-407f-a8e3-5fa56868f74f","name":"717fc5a0-e515-40dd-a2a9-2436d0b7af74"},"user":{"name":"Super","id":"superuser"},"provider":{"id":"fe3ad89c-449f-42f2-b4f8-b10ab7bc0266","name":"CiscoSystems"},"offer":{"id":"627a75ec-c459-11e7-abc4-cec278b6b50a","name":"cisco.consume.service.manageddevice.label","type":"full","label":"cisco.consume.manageddevice.offer.manageddevice.full"},"cost":{"deviceTotal":"0","deviceTotalType":"USD","serviceTotal":"0","serviceTotalType":"USD"},"subscriptionDetail":{"sites":[],"serviceInstanceDetail":{"tenantId":"b3366642-8865-407f-a8e3-5fa56868f74f","tenantName":"717fc5a0-e515-40dd-a2a9-2436d0b7af74"}},"serviceDowngrade":{},"nsoResponseTypes":{"createOperation":"pnp","updateOperation":"pnp","deleteOperation":"pnp"}}}; // LegacyServiceOrder | 
apiInstance.updateOrder(productId, offerId, legacyServiceOrder).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | [**String**](.md)|  | 
 **offerId** | [**String**](.md)|  | 
 **legacyServiceOrder** | [**LegacyServiceOrder**](LegacyServiceOrder.md)|  | 

### Return type

[**LegacyServiceOrderResponse**](LegacyServiceOrderResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateService

> Service updateService(id, serviceUpdate)

Updates a service.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ServicesApi();
let id = "id_example"; // String | 
let serviceUpdate = {"status":{"lifeCycleStatus":"Provisioned"},"definitionAttributes":{"name":"Managed Device","offerName":"Managed Device","id":"5872e764-c459-11e7-abc4-cec278b6b50a","type":"manageddevice"},"attributes":{"template":"manageddevice-2.0.ftl","orchestrator":"ncs","platform-service-instance-id":"d5c9dc300232-4e8677d462dd49cab5298731a94c2da0-manageddevice","devices":"[{\"status-message\":\"Operation ADD on device CPE-828dcb62-2345-4b8f-b5af-5db230a95cd3 with serial number 97K7C3YDPY1 was a SUCCESS\",\"name\":\"CPE-828dcb62-2345-4b8f-b5af-5db230a95cd3\",\"attributes\":[{\"attrib-name\":\"ipaddress\",\"attrib-value\":\"10.254.0.1\"},{\"attrib-name\":\"hostname\",\"attrib-value\":\"CPE-828dcb62-2345-4b8f-b5af-5db230a95cd3\"},{\"attrib-name\":\"subtype\",\"attrib-value\":\"ISR\"},{\"attrib-name\":\"name\",\"attrib-value\":\"CPE-828dcb62-2345-4b8f-b5af-5db230a95cd3\"},{\"attrib-name\":\"ned-id\",\"attrib-value\":\"cisco-ios-cli-6.37\"},{\"attrib-name\":\"model\",\"attrib-value\":\"CSR1000V\"},{\"attrib-name\":\"serialKey\",\"attrib-value\":\"97K7C3YDPY1\"},{\"attrib-name\":\"type\",\"attrib-value\":\"CPE\"},{\"attrib-name\":\"category\",\"attrib-value\":\"CPE\"},{\"attrib-name\":\"version\",\"attrib-value\":\"16.9.5\"}],\"operation\":\"ADD\",\"status\":\"SUCCESS\"}]","name":"CPE-828dcb62-2345-4b8f-b5af-5db230a95cd3","provisionTimestamp":"Tue Aug 04 21:01:47 UTC 2020","provisionTimestampNumber":"1596574907112","version":"1"}}; // ServiceUpdate | 
apiInstance.updateService(id, serviceUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **serviceUpdate** | [**ServiceUpdate**](ServiceUpdate.md)|  | 

### Return type

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

