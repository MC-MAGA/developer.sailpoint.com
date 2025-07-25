---
id: v2025-recommendation-request-dto
title: RecommendationRequestDto
pagination_label: RecommendationRequestDto
sidebar_label: RecommendationRequestDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RecommendationRequestDto', 'V2025RecommendationRequestDto'] 
slug: /tools/sdk/python/v2025/models/recommendation-request-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationRequestDto', 'V2025RecommendationRequestDto']
---

# RecommendationRequestDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**[]RecommendationRequest**](recommendation-request) |  | [optional] 
**exclude_interpretations** | **bool** | Exclude interpretations in the response if \"true\". Return interpretations in the response if this attribute is not specified. | [optional] [default to False]
**include_translation_messages** | **bool** | When set to true, the calling system uses the translated messages for the specified language | [optional] [default to False]
**include_debug_information** | **bool** | Returns the recommender calculations if set to true | [optional] [default to False]
**prescribe_mode** | **bool** | When set to true, uses prescribedRulesRecommenderConfig to get identity attributes and peer group threshold instead of standard config. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.recommendation_request_dto import RecommendationRequestDto

recommendation_request_dto = RecommendationRequestDto(
requests=[
                    sailpoint.v2025.models.recommendation_request.Recommendation Request(
                        identity_id = '2c938083633d259901633d25c68c00fa', 
                        item = sailpoint.v2025.models.access_item_ref.Access Item Ref(
                            id = '2c938083633d259901633d2623ec0375', 
                            type = 'ENTITLEMENT', ), )
                    ],
exclude_interpretations=False,
include_translation_messages=False,
include_debug_information=True,
prescribe_mode=False
)

```
[[Back to top]](#) 

