---
id: beta-entitlement-access-request-config
title: EntitlementAccessRequestConfig
pagination_label: EntitlementAccessRequestConfig
sidebar_label: EntitlementAccessRequestConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementAccessRequestConfig', 'BetaEntitlementAccessRequestConfig'] 
slug: /tools/sdk/python/beta/models/entitlement-access-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessRequestConfig', 'BetaEntitlementAccessRequestConfig']
---

# EntitlementAccessRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_schemes** | [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
**request_comment_required** | **bool** | If the requester must provide a comment during access request. | [optional] [default to False]
**denial_comment_required** | **bool** | If the reviewer must provide a comment when denying the access request. | [optional] [default to False]
**reauthorization_required** | **bool** | Is Reauthorization Required | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.entitlement_access_request_config import EntitlementAccessRequestConfig

entitlement_access_request_config = EntitlementAccessRequestConfig(
approval_schemes=[
                    sailpoint.beta.models.entitlement_approval_scheme.Entitlement Approval Scheme(
                        approver_type = 'GOVERNANCE_GROUP', 
                        approver_id = 'e3eab852-8315-467f-9de7-70eda97f63c8', )
                    ],
request_comment_required=True,
denial_comment_required=False,
reauthorization_required=False
)

```
[[Back to top]](#) 

