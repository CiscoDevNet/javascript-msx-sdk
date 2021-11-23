# JavascriptMsxSdk.LicensingConfigurationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSmartAccountConfiguration**](LicensingConfigurationsApi.md#createSmartAccountConfiguration) | **POST** /licensing/api/v8/configuration | Creates a smart account configuration.
[**getSmartAccountConfiguration**](LicensingConfigurationsApi.md#getSmartAccountConfiguration) | **GET** /licensing/api/v8/configuration | Returns a smart account configuration.
[**updateSmartAccountConfiguration**](LicensingConfigurationsApi.md#updateSmartAccountConfiguration) | **PUT** /licensing/api/v8/configuration | Updates a smart account configuration.



## createSmartAccountConfiguration

> SmartAccountConfiguration createSmartAccountConfiguration(smartAccountConfigurationCreate)

Creates a smart account configuration.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.LicensingConfigurationsApi();
let smartAccountConfigurationCreate = new JavascriptMsxSdk.SmartAccountConfigurationCreate(); // SmartAccountConfigurationCreate | 
apiInstance.createSmartAccountConfiguration(smartAccountConfigurationCreate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartAccountConfigurationCreate** | [**SmartAccountConfigurationCreate**](SmartAccountConfigurationCreate.md)|  | 

### Return type

[**SmartAccountConfiguration**](SmartAccountConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSmartAccountConfiguration

> SmartAccountConfiguration getSmartAccountConfiguration()

Returns a smart account configuration.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.LicensingConfigurationsApi();
apiInstance.getSmartAccountConfiguration().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SmartAccountConfiguration**](SmartAccountConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSmartAccountConfiguration

> SmartAccountConfiguration updateSmartAccountConfiguration(smartAccountConfigurationUpdate)

Updates a smart account configuration.

### Example

```javascript
import JavascriptMsxSdk from 'javascript-msx-sdk';

let apiInstance = new JavascriptMsxSdk.LicensingConfigurationsApi();
let smartAccountConfigurationUpdate = {"baseAuthUrl":"https://cloudsso.cisco.com/as/token.oauth2","contentType":"application/x-www-form-urlencoded","grantType":"client_credentials","clientId":"client_id","clientSecret":"client_secret"}; // SmartAccountConfigurationUpdate | 
apiInstance.updateSmartAccountConfiguration(smartAccountConfigurationUpdate).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartAccountConfigurationUpdate** | [**SmartAccountConfigurationUpdate**](SmartAccountConfigurationUpdate.md)|  | 

### Return type

[**SmartAccountConfiguration**](SmartAccountConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

