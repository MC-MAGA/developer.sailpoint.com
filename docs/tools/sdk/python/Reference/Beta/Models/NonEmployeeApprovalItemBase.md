---
id: beta-non-employee-approval-item-base
title: NonEmployeeApprovalItemBase
pagination_label: NonEmployeeApprovalItemBase
sidebar_label: NonEmployeeApprovalItemBase
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NonEmployeeApprovalItemBase', 'BetaNonEmployeeApprovalItemBase'] 
slug: /tools/sdk/python/beta/models/non-employee-approval-item-base
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItemBase', 'BetaNonEmployeeApprovalItemBase']
---

# NonEmployeeApprovalItemBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Non-Employee approval item id | [optional] 
**approver** | [**IdentityReferenceWithId**](identity-reference-with-id) |  | [optional] 
**account_name** | **str** | Requested identity account name | [optional] 
**approval_status** | [**ApprovalStatus**](approval-status) |  | [optional] 
**approval_order** | **float** | Approval order | [optional] 
**comment** | **str** | comment of approver | [optional] 
**modified** | **datetime** | When the request was last modified. | [optional] 
**created** | **datetime** | When the request was created. | [optional] 
}

## Example

```python
from sailpoint.beta.models.non_employee_approval_item_base import NonEmployeeApprovalItemBase

non_employee_approval_item_base = NonEmployeeApprovalItemBase(
id='2c1e388b-1e55-4b0a-ab5c-897f1204159c',
approver=sailpoint.beta.models.identity_reference_with_id.Identity Reference With Id(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', ),
account_name='test.account',
approval_status='APPROVED',
approval_order=1,
comment='true',
modified='2019-08-23T18:52:59.162Z',
created='2019-08-23T18:40:35.772Z'
)

```
[[Back to top]](#) 

