---
id: beta-campaign-alert
title: CampaignAlert
pagination_label: CampaignAlert
sidebar_label: CampaignAlert
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignAlert', 'BetaCampaignAlert'] 
slug: /tools/sdk/python/beta/models/campaign-alert
tags: ['SDK', 'Software Development Kit', 'CampaignAlert', 'BetaCampaignAlert']
---

# CampaignAlert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** |  **Enum** [  'ERROR',    'WARN',    'INFO' ] | Denotes the level of the message | [optional] 
**localizations** | [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.campaign_alert import CampaignAlert

campaign_alert = CampaignAlert(
level='ERROR',
localizations=[
                    sailpoint.beta.models.error_message_dto.Error Message Dto(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'The request was syntactically correct but its content is semantically invalid.', )
                    ]
)

```
[[Back to top]](#) 

