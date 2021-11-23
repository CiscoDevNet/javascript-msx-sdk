# JavascriptMsxSdk.IncidentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelIncident**](IncidentsApi.md#cancelIncident) | **PATCH** /incident/api/v1/incidents/{id}/cancel | Cancels an incident.
[**createIncident**](IncidentsApi.md#createIncident) | **POST** /incident/api/v1/incidents | Create a new Incident.
[**deleteIncident**](IncidentsApi.md#deleteIncident) | **DELETE** /incident/api/v1/incidents/{id} | Deletes an incident.
[**getIncident**](IncidentsApi.md#getIncident) | **GET** /incident/api/v1/incidents/{id} | Get incident details.
[**getIncidents**](IncidentsApi.md#getIncidents) | **GET** /incident/api/v1/incidents | Get Incidents by filter.
[**updateIncident**](IncidentsApi.md#updateIncident) | **PUT** /incident/api/v1/incidents/{id} | Updates an incident.



## cancelIncident

> Incident cancelIncident(id, incidentCancel)

Cancels an incident.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentsApi();
let id = "id_example"; // String | 
let incidentCancel = new JavascriptMsxSdk.IncidentCancel(); // IncidentCancel | 
apiInstance.cancelIncident(id, incidentCancel).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **incidentCancel** | [**IncidentCancel**](IncidentCancel.md)|  | 

### Return type

[**Incident**](Incident.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createIncident

> Incident createIncident(incidentCreate)

Create a new Incident.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentsApi();
let incidentCreate = new JavascriptMsxSdk.IncidentCreate(); // IncidentCreate | 
apiInstance.createIncident(incidentCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incidentCreate** | [**IncidentCreate**](IncidentCreate.md)|  | 

### Return type

[**Incident**](Incident.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIncident

> deleteIncident(id)

Deletes an incident.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentsApi();
let id = "id_example"; // String | 
apiInstance.deleteIncident(id).then(() => {
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


## getIncident

> Incident getIncident(id)

Get incident details.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentsApi();
let id = "id_example"; // String | 
apiInstance.getIncident(id).then((data) => {
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

[**Incident**](Incident.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIncidents

> IncidentsPage getIncidents(page, pageSize, opts)

Get Incidents by filter.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentsApi();
let page = 0; // Number | 
let pageSize = 10; // Number | 
let opts = {
  'id': "id_example", // String | 
  'externalId': "externalId_example", // String | 
  'tenantId': "tenantId_example", // String | 
  'category': "category_example", // String | 
  'subcategory': "subcategory_example", // String | 
  'state': "state_example", // String | New|InProgress|OnHold|Resolved|Canceled
  'priority': "priority_example", // String | Critical|Low|High|Moderate|Planning
  'severity': "severity_example", // String | High|Medium|Low
  'sortBy': "sortBy_example", // String | category|subcategory|priority|severity|state
  'sortOrder': "sortOrder_example" // String | ASC/DESC
};
apiInstance.getIncidents(page, pageSize, opts).then((data) => {
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
 **id** | **String**|  | [optional] 
 **externalId** | **String**|  | [optional] 
 **tenantId** | **String**|  | [optional] 
 **category** | **String**|  | [optional] 
 **subcategory** | **String**|  | [optional] 
 **state** | **String**| New|InProgress|OnHold|Resolved|Canceled | [optional] 
 **priority** | **String**| Critical|Low|High|Moderate|Planning | [optional] 
 **severity** | **String**| High|Medium|Low | [optional] 
 **sortBy** | **String**| category|subcategory|priority|severity|state | [optional] 
 **sortOrder** | **String**| ASC/DESC | [optional] 

### Return type

[**IncidentsPage**](IncidentsPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateIncident

> Incident updateIncident(id, incidentUpdate)

Updates an incident.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.IncidentsApi();
let id = "id_example"; // String | 
let incidentUpdate = new JavascriptMsxSdk.IncidentUpdate(); // IncidentUpdate | 
apiInstance.updateIncident(id, incidentUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **incidentUpdate** | [**IncidentUpdate**](IncidentUpdate.md)|  | 

### Return type

[**Incident**](Incident.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

