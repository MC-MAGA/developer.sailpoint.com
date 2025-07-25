---
id: v2025-recommendation-response-dto
title: RecommendationResponseDto
pagination_label: RecommendationResponseDto
sidebar_label: RecommendationResponseDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RecommendationResponseDto', 'V2025RecommendationResponseDto'] 
slug: /tools/sdk/python/v2025/models/recommendation-response-dto
tags: ['SDK', 'Software Development Kit', 'RecommendationResponseDto', 'V2025RecommendationResponseDto']
---

# RecommendationResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**[]RecommendationResponse**](recommendation-response) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.recommendation_response_dto import RecommendationResponseDto

recommendation_response_dto = RecommendationResponseDto(
response=[
                    sailpoint.v2025.models.recommendation_response.Recommendation Response(
                        request = sailpoint.v2025.models.recommendation_request.Recommendation Request(
                            identity_id = '2c938083633d259901633d25c68c00fa', 
                            item = sailpoint.v2025.models.access_item_ref.Access Item Ref(
                                id = '2c938083633d259901633d2623ec0375', 
                                type = 'ENTITLEMENT', ), ), 
                        recommendation = 'true', 
                        interpretations = [75% of identities with the same department have this access. This information had a high impact on the overall score., 67% of identities with the same peer group have this access. This information had a low impact on the overall score., 42% of identities with the same location have this access. This information had a low impact on the overall score.], 
                        translation_messages = [{key=recommender-api.V2_WEIGHT_FEATURE_PRODUCT_INTERPRETATION_HIGH, values=[75, department]}], 
                        recommender_calculations = sailpoint.v2025.models.recommender_calculations.RecommenderCalculations(
                            identity_id = '2c91808457d8f3ab0157e3e62cb4213c', 
                            entitlement_id = '2c91809050db617d0150e0bf3215385e', 
                            recommendation = 'YES', 
                            overall_weighted_score = 1.337, 
                            feature_weighted_scores = {
                                'key' : 1.337
                                }, 
                            threshold = 1.337, 
                            identity_attributes = {
                                'key' : sailpoint.v2025.models.recommender_calculations_identity_attributes_value.RecommenderCalculations_identityAttributes_value(
                                    value = '', )
                                }, 
                            feature_values = sailpoint.v2025.models.feature_value_dto.Feature Value Dto(
                                feature = 'department', 
                                numerator = 14, 
                                denominator = 14, ), ), )
                    ]
)

```
[[Back to top]](#) 

