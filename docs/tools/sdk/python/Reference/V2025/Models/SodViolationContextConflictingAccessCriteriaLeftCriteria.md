---
id: v2025-sod-violation-context-conflicting-access-criteria-left-criteria
title: SodViolationContextConflictingAccessCriteriaLeftCriteria
pagination_label: SodViolationContextConflictingAccessCriteriaLeftCriteria
sidebar_label: SodViolationContextConflictingAccessCriteriaLeftCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodViolationContextConflictingAccessCriteriaLeftCriteria', 'V2025SodViolationContextConflictingAccessCriteriaLeftCriteria'] 
slug: /tools/sdk/python/v2025/models/sod-violation-context-conflicting-access-criteria-left-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContextConflictingAccessCriteriaLeftCriteria', 'V2025SodViolationContextConflictingAccessCriteriaLeftCriteria']
---

# SodViolationContextConflictingAccessCriteriaLeftCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria_list** | [**[]SodExemptCriteria**](sod-exempt-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.sod_violation_context_conflicting_access_criteria_left_criteria import SodViolationContextConflictingAccessCriteriaLeftCriteria

sod_violation_context_conflicting_access_criteria_left_criteria = SodViolationContextConflictingAccessCriteriaLeftCriteria(
criteria_list=[
                    sailpoint.v2025.models.sod_exempt_criteria.Sod Exempt Criteria(
                        existing = True, 
                        type = 'IDENTITY', 
                        id = '2c918085771e9d3301773b3cb66f6398', 
                        name = 'My HR Entitlement', )
                    ]
)

```
[[Back to top]](#) 

