# JavascriptMsxSdk.ProductsApi

All URIs are relative to *http://localhost:8765*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductsApi.md#createProduct) | **POST** /consume/api/v8/products | Creates a product.
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /consume/api/v8/products/{id} | Deletes a product.
[**getProduct**](ProductsApi.md#getProduct) | **GET** /consume/api/v8/products/{id} | Returns a product.
[**getProductAssignmentsList**](ProductsApi.md#getProductAssignmentsList) | **GET** /consume/api/v8/products/{id}/assignments/list | Returns a list of tenant assignments for a product .
[**getProductsCount**](ProductsApi.md#getProductsCount) | **GET** /consume/api/v8/products/count | Returns the number of products.
[**getProductsPage**](ProductsApi.md#getProductsPage) | **GET** /consume/api/v8/products | Returns a page of products.
[**updateProduct**](ProductsApi.md#updateProduct) | **PUT** /consume/api/v8/products/{id} | Updates a product.
[**updateProductAssignments**](ProductsApi.md#updateProductAssignments) | **PUT** /consume/api/v8/products/{id}/assignments | Updates the tenant assignments for a product.



## createProduct

> Product createProduct(productCreate)

Creates a product.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ProductsApi();
let productCreate = {"name":"vbranch","label":"cisco.catalog.service.vbranch.name","version":"1","description":"cisco.catalog.service.vbranch.description","image":"/services/vbranch/images/icons/image_vbranch_service.svg","orderLimit":1,"multipleInstanceAllowed":false,"price":500,"unitOfMeasure":null,"options":[],"properties":[],"bandwidthPrioritization":null,"configuration":{"device":"false","parts":"2","showOffers":"true","validation":"none"},"isResource":false,"hasChildren":false,"parentId":null,"serviceExtensions":[],"serviceConfigQueryRootXPaths":[],"uiConfig":null}; // ProductCreate | 
apiInstance.createProduct(productCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productCreate** | [**ProductCreate**](ProductCreate.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProduct

> deleteProduct(id)

Deletes a product.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ProductsApi();
let id = null; // String | 
apiInstance.deleteProduct(id).then(() => {
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


## getProduct

> Product getProduct(id)

Returns a product.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ProductsApi();
let id = null; // String | 
apiInstance.getProduct(id).then((data) => {
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

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductAssignmentsList

> [CatalogAssignment] getProductAssignmentsList(id)

Returns a list of tenant assignments for a product .

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ProductsApi();
let id = null; // String | 
apiInstance.getProductAssignmentsList(id).then((data) => {
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

[**[CatalogAssignment]**](CatalogAssignment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductsCount

> Number getProductsCount(opts)

Returns the number of products.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ProductsApi();
let opts = {
  'tenantId': null // String | 
};
apiInstance.getProductsCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | [**String**](.md)|  | [optional] 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductsPage

> ProductsPage getProductsPage(page, pageSize, opts)

Returns a page of products.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ProductsApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'tenantId': null // String | 
};
apiInstance.getProductsPage(page, pageSize, opts).then((data) => {
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

### Return type

[**ProductsPage**](ProductsPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProduct

> Product updateProduct(id, productUpdate)

Updates a product.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ProductsApi();
let id = null; // String | 
let productUpdate = {"name":"vbranch","label":"cisco.catalog.service.vbranch.name","version":"1","description":"cisco.catalog.service.vbranch.description","image":"/services/vbranch/images/icons/image_vbranch_service.svg","orderLimit":1,"multipleInstanceAllowed":false,"price":500,"unitOfMeasure":null,"options":[],"properties":[],"bandwidthPrioritization":null,"configuration":{"device":"false","parts":"2","showOffers":"true","validation":"none"},"isResource":false,"hasChildren":false,"parentId":null,"serviceExtensions":[],"serviceConfigQueryRootXPaths":[],"uiConfig":null}; // ProductUpdate | 
apiInstance.updateProduct(id, productUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **productUpdate** | [**ProductUpdate**](ProductUpdate.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProductAssignments

> [CatalogAssignment] updateProductAssignments(id, requestBody)

Updates the tenant assignments for a product.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.ProductsApi();
let id = null; // String | 
let requestBody = ["e8ff9360-c8f1-4f06-84d8-d8105bd29e1e","3c64b303-ec28-4fe2-99b5-13f521b92700","48feaddb-45d0-4126-a216-3e450bfdbba4"]; // [String] | 
apiInstance.updateProductAssignments(id, requestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **requestBody** | [**[String]**](String.md)|  | 

### Return type

[**[CatalogAssignment]**](CatalogAssignment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

