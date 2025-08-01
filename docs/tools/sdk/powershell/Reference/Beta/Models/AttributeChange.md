---
id: beta-attribute-change
title: AttributeChange
pagination_label: AttributeChange
sidebar_label: AttributeChange
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeChange', 'BetaAttributeChange'] 
slug: /tools/sdk/powershell/beta/models/attribute-change
tags: ['SDK', 'Software Development Kit', 'AttributeChange', 'BetaAttributeChange']
---


# AttributeChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the attribute name | [optional] 
**PreviousValue** | **String** | the old value of attribute | [optional] 
**NewValue** | **String** | the new value of attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeChange = Initialize-BetaAttributeChange  -Name firstname `
 -PreviousValue adam `
 -NewValue zampa
```

- Convert the resource to JSON
```powershell
$AttributeChange | ConvertTo-JSON
```


[[Back to top]](#) 

