---
id: beta-access-requested
title: AccessRequested
pagination_label: AccessRequested
sidebar_label: AccessRequested
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequested', 'BetaAccessRequested'] 
slug: /tools/sdk/go/beta/models/access-requested
tags: ['SDK', 'Software Development Kit', 'AccessRequested', 'BetaAccessRequested']
---

# AccessRequested

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequest** | [**AccessRequestResponse1**](access-request-response1) |  | 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 

## Methods

### NewAccessRequested

`func NewAccessRequested(accessRequest AccessRequestResponse1, ) *AccessRequested`

NewAccessRequested instantiates a new AccessRequested object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestedWithDefaults

`func NewAccessRequestedWithDefaults() *AccessRequested`

NewAccessRequestedWithDefaults instantiates a new AccessRequested object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequest

`func (o *AccessRequested) GetAccessRequest() AccessRequestResponse1`

GetAccessRequest returns the AccessRequest field if non-nil, zero value otherwise.

### GetAccessRequestOk

`func (o *AccessRequested) GetAccessRequestOk() (*AccessRequestResponse1, bool)`

GetAccessRequestOk returns a tuple with the AccessRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequest

`func (o *AccessRequested) SetAccessRequest(v AccessRequestResponse1)`

SetAccessRequest sets AccessRequest field to given value.


### GetIdentityId

`func (o *AccessRequested) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AccessRequested) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AccessRequested) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AccessRequested) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEventType

`func (o *AccessRequested) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AccessRequested) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AccessRequested) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AccessRequested) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDateTime

`func (o *AccessRequested) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *AccessRequested) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *AccessRequested) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *AccessRequested) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.


