# JavascriptMsxSdk.AuditingGenericEventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGenericEvent**](AuditingGenericEventsApi.md#createGenericEvent) | **POST** /auditing/api/v8/genericevents | Create Generic Event



## createGenericEvent

> GenericEvent createGenericEvent(genericEventCreate)

Create Generic Event

Needs CREATE_AUDIT_GENERIC_EVENT_PERMISSION to create a Generic Event.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.AuditingGenericEventsApi();
let genericEventCreate = new JavascriptMsxSdk.GenericEventCreate(); // GenericEventCreate | 
apiInstance.createGenericEvent(genericEventCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genericEventCreate** | [**GenericEventCreate**](GenericEventCreate.md)|  | 

### Return type

[**GenericEvent**](GenericEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

