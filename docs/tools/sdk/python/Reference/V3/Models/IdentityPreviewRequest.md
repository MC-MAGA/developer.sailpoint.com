---
id: identity-preview-request
title: IdentityPreviewRequest
pagination_label: IdentityPreviewRequest
sidebar_label: IdentityPreviewRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityPreviewRequest', 'IdentityPreviewRequest'] 
slug: /tools/sdk/python/v3/models/identity-preview-request
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewRequest', 'IdentityPreviewRequest']
---

# IdentityPreviewRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The Identity id | [optional] 
**identity_attribute_config** | [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.identity_preview_request import IdentityPreviewRequest

identity_preview_request = IdentityPreviewRequest(
identity_id='',
identity_attribute_config=sailpoint.v3.models.identity_attribute_config.Identity Attribute Config(
                    enabled = True, 
                    attribute_transforms = [
                        sailpoint.v3.models.identity_attribute_transform.Identity Attribute Transform(
                            identity_attribute_name = 'email', 
                            transform_definition = sailpoint.v3.models.transform_definition.Transform Definition(
                                type = 'accountAttribute', 
                                attributes = {attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}, ), )
                        ], )
)

```
[[Back to top]](#) 

