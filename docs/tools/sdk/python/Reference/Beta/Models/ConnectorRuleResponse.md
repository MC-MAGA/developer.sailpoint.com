---
id: beta-connector-rule-response
title: ConnectorRuleResponse
pagination_label: ConnectorRuleResponse
sidebar_label: ConnectorRuleResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorRuleResponse', 'BetaConnectorRuleResponse'] 
slug: /tools/sdk/python/beta/models/connector-rule-response
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleResponse', 'BetaConnectorRuleResponse']
---

# ConnectorRuleResponse

ConnectorRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the rule | [required]
**description** | **str** | a description of the rule's purpose | [optional] 
**type** |  **Enum** [  'BuildMap',    'ConnectorAfterCreate',    'ConnectorAfterDelete',    'ConnectorAfterModify',    'ConnectorBeforeCreate',    'ConnectorBeforeDelete',    'ConnectorBeforeModify',    'JDBCBuildMap',    'JDBCOperationProvisioning',    'JDBCProvision',    'PeopleSoftHRMSBuildMap',    'PeopleSoftHRMSOperationProvisioning',    'PeopleSoftHRMSProvision',    'RACFPermissionCustomization',    'SAPBuildMap',    'SapHrManagerRule',    'SapHrOperationProvisioning',    'SapHrProvision',    'SuccessFactorsOperationProvisioning',    'WebServiceAfterOperationRule',    'WebServiceBeforeOperationRule',    'ResourceObjectCustomization' ] | the type of rule | [required]
**signature** | [**ConnectorRuleCreateRequestSignature**](connector-rule-create-request-signature) |  | [optional] 
**source_code** | [**SourceCode**](source-code) |  | [required]
**attributes** | **object** | a map of string to objects | [optional] 
**id** | **str** | the ID of the rule | [required]
**created** | **str** | an ISO 8601 UTC timestamp when this rule was created | [required]
**modified** | **str** | an ISO 8601 UTC timestamp when this rule was last modified | [optional] 
}

## Example

```python
from sailpoint.beta.models.connector_rule_response import ConnectorRuleResponse

connector_rule_response = ConnectorRuleResponse(
name='WebServiceBeforeOperationRule',
description='This rule does that',
type='BuildMap',
signature=sailpoint.beta.models.connector_rule_create_request_signature.ConnectorRuleCreateRequest_signature(
                    input = [
                        sailpoint.beta.models.argument.Argument(
                            name = 'firstName', 
                            description = 'the first name of the identity', 
                            type = 'String', )
                        ], 
                    output = sailpoint.beta.models.argument.Argument(
                        name = 'firstName', 
                        description = 'the first name of the identity', 
                        type = 'String', ), ),
source_code=sailpoint.beta.models.source_code.Source Code(
                    version = '1.0', 
                    script = 'return "Mr. " + firstName;', ),
attributes={},
id='8113d48c0b914f17b4c6072d4dcb9dfe',
created='021-07-22T15:59:23Z',
modified='021-07-22T15:59:23Z'
)

```
[[Back to top]](#) 

