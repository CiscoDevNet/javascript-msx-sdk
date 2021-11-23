# JavascriptMsxSdk.Incident

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [readonly] 
**externalId** | **String** |  | [readonly] 
**attributes** | **{String: Object}** |  | [optional] 
**notes** | **[String]** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**createdOn** | **Date** |  | [optional] 
**modifiedBy** | **String** |  | [optional] 
**modifiedOn** | **Date** |  | [optional] 
**category** | **String** | inquiry|software|hardware|network|database | [optional] [default to &#39;inquiry&#39;]
**description** | **String** |  | 
**impact** | **String** |  | [optional] [default to &#39;Low&#39;]
**priority** | **String** |  | [optional] [default to &#39;Planning&#39;]
**severity** | **String** |  | [optional] [default to &#39;Low&#39;]
**state** | **String** |  | [optional] [default to &#39;New&#39;]
**subcategory** | **String** |  | [optional] 
**tenant** | **String** |  | [optional] 
**urgency** | **String** |  | [optional] [default to &#39;Low&#39;]



## Enum: ImpactEnum


* `High` (value: `"High"`)

* `Medium` (value: `"Medium"`)

* `Low` (value: `"Low"`)





## Enum: PriorityEnum


* `Critical` (value: `"Critical"`)

* `Low` (value: `"Low"`)

* `High` (value: `"High"`)

* `Moderate` (value: `"Moderate"`)

* `Planning` (value: `"Planning"`)





## Enum: SeverityEnum


* `High` (value: `"High"`)

* `Medium` (value: `"Medium"`)

* `Low` (value: `"Low"`)





## Enum: StateEnum


* `New` (value: `"New"`)

* `InProgress` (value: `"InProgress"`)

* `OnHold` (value: `"OnHold"`)

* `Resolved` (value: `"Resolved"`)

* `Close` (value: `"Close"`)

* `Canceled` (value: `"Canceled"`)





## Enum: UrgencyEnum


* `High` (value: `"High"`)

* `Medium` (value: `"Medium"`)

* `Low` (value: `"Low"`)




