---
id: bulk-remove-tagged-object
title: BulkRemoveTaggedObject
pagination_label: BulkRemoveTaggedObject
sidebar_label: BulkRemoveTaggedObject
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BulkRemoveTaggedObject', 'BulkRemoveTaggedObject'] 
slug: /tools/sdk/python/v3/models/bulk-remove-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkRemoveTaggedObject', 'BulkRemoveTaggedObject']
---

# BulkRemoveTaggedObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_refs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**tags** | **[]str** | Label to be applied to an Object | [optional] 
}

## Example

```python
from sailpoint.v3.models.bulk_remove_tagged_object import BulkRemoveTaggedObject

bulk_remove_tagged_object = BulkRemoveTaggedObject(
object_refs=[
                    sailpoint.v3.models.tagged_object_dto.Tagged Object Dto(
                        type = 'IDENTITY', 
                        id = '2c91808568c529c60168cca6f90c1313', 
                        name = 'William Wilson', )
                    ],
tags=[BU_FINANCE, PCI]
)

```
[[Back to top]](#) 

