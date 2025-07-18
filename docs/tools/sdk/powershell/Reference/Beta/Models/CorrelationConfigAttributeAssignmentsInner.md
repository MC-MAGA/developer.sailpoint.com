---
id: beta-correlation-config-attribute-assignments-inner
title: CorrelationConfigAttributeAssignmentsInner
pagination_label: CorrelationConfigAttributeAssignmentsInner
sidebar_label: CorrelationConfigAttributeAssignmentsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CorrelationConfigAttributeAssignmentsInner', 'BetaCorrelationConfigAttributeAssignmentsInner'] 
slug: /tools/sdk/powershell/beta/models/correlation-config-attribute-assignments-inner
tags: ['SDK', 'Software Development Kit', 'CorrelationConfigAttributeAssignmentsInner', 'BetaCorrelationConfigAttributeAssignmentsInner']
---


# CorrelationConfigAttributeAssignmentsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sequence** | **Int32** | The sequence of the attribute assignment. | [optional] 
**Property** | **String** | The property of the attribute assignment. | [optional] 
**Value** | **String** | The value of the attribute assignment. | [optional] 
**Operation** |  **Enum** [  "EQ" ] | The operation of the attribute assignment. | [optional] 
**Complex** | **Boolean** | Whether or not the it's a complex attribute assignment. | [optional] [default to $false]
**IgnoreCase** | **Boolean** | Whether or not the attribute assignment should ignore case. | [optional] [default to $false]
**MatchMode** |  **Enum** [  "ANYWHERE",    "START",    "END" ] | The match mode of the attribute assignment. | [optional] 
**FilterString** | **String** | The filter string of the attribute assignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$CorrelationConfigAttributeAssignmentsInner = Initialize-BetaCorrelationConfigAttributeAssignmentsInner  -Sequence 1 `
 -Property first_name `
 -Value firstName `
 -Operation EQ `
 -Complex false `
 -IgnoreCase false `
 -MatchMode ANYWHERE `
 -FilterString first_name == "John"
```

- Convert the resource to JSON
```powershell
$CorrelationConfigAttributeAssignmentsInner | ConvertTo-JSON
```


[[Back to top]](#) 

