# JavascriptMsxSdk.TenantsApi

All URIs are relative to *http://localhost:8765*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTenant**](TenantsApi.md#createTenant) | **POST** /idm/api/v8/tenants | Creates a new tenant.
[**deleteTenant**](TenantsApi.md#deleteTenant) | **DELETE** /idm/api/v8/tenants/{id} | Deletes a tenant by id.
[**getTenant**](TenantsApi.md#getTenant) | **GET** /idm/api/v8/tenants/{id} | Returns a tenant by id.
[**getTenantsList**](TenantsApi.md#getTenantsList) | **GET** /idm/api/v8/tenants/list | Returns a list of tenants.
[**getTenantsPage**](TenantsApi.md#getTenantsPage) | **GET** /idm/api/v8/tenants | Returns a page of tenants.
[**updateTenant**](TenantsApi.md#updateTenant) | **PUT** /idm/api/v8/tenants/{id} | Updates a tenant by id.



## createTenant

> Tenant createTenant(tenantCreate)

Creates a new tenant.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TenantsApi();
let tenantCreate = {"name":"Acme Company","description":"An anvil for every roadrunner.","url":"https://cisco.com"}; // TenantCreate | 
apiInstance.createTenant(tenantCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantCreate** | [**TenantCreate**](TenantCreate.md)|  | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTenant

> deleteTenant(id)

Deletes a tenant by id.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TenantsApi();
let id = null; // String | 
apiInstance.deleteTenant(id).then(() => {
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


## getTenant

> Tenant getTenant(id)

Returns a tenant by id.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TenantsApi();
let id = null; // String | 
apiInstance.getTenant(id).then((data) => {
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

[**Tenant**](Tenant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTenantsList

> [Tenant] getTenantsList(ids, opts)

Returns a list of tenants.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TenantsApi();
let ids = ["null"]; // [String] | 
let opts = {
  'showImage': false // Boolean | 
};
apiInstance.getTenantsList(ids, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 
 **showImage** | **Boolean**|  | [optional] [default to false]

### Return type

[**[Tenant]**](Tenant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTenantsPage

> TenantsPage getTenantsPage(page, pageSize, opts)

Returns a page of tenants.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TenantsApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'parentId': null, // String | 
  'showImage': false, // Boolean | 
  'sortBy': name, // String | 
  'sortOrder': "'asc'" // String | 
};
apiInstance.getTenantsPage(page, pageSize, opts).then((data) => {
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
 **parentId** | [**String**](.md)|  | [optional] 
 **showImage** | **Boolean**|  | [optional] [default to false]
 **sortBy** | **String**|  | [optional] 
 **sortOrder** | **String**|  | [optional] [default to &#39;asc&#39;]

### Return type

[**TenantsPage**](TenantsPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTenant

> Tenant updateTenant(id, tenantUpdate)

Updates a tenant by id.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.TenantsApi();
let id = null; // String | 
let tenantUpdate = {"name":"Acme Company","description":"We sell rocket powered rollerskates.","url":"https://cisco.com"}; // TenantUpdate | 
apiInstance.updateTenant(id, tenantUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **tenantUpdate** | [**TenantUpdate**](TenantUpdate.md)|  | 

### Return type

[**Tenant**](Tenant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

