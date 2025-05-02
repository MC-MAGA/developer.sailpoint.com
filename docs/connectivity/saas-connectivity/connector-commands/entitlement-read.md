---
id: entitlement-read
title: Entitlement Read
pagination_label: Entitlement Read
sidebar_label: Entitlement Read
keywords: ['connectivity', 'connectors', 'entitlement read']
description: Fetch a single entitlement’s attributes from the source.
slug: /connectivity/saas-connectivity/commands/entitlement-read
tags: ['Connectivity', 'Connector Command']
---

:::note

At this time Entitlement Read is not triggered from ISC for any specific workflow and as such it is not necessary to implement this in order to have a fully functional connector.

:::

To use this command, you must specify this value in the `commands` array: `std:entitlement:list`

| Input/Output |        Data Type         |
| :----------- | :----------------------: |
| Input        | StdEntitlementReadInput  |
| Output       | StdEntitlementReadOutput |

### Example StdEntitlementReadInput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "john.doe"
        }
    },
    "type": "group",
    "schema": {
        "type": "string",
        "includePermissions": true
    }
}
```

### Example StdEntitlementReadOutput

```javascript
{
    "identity": "john.doe",
    "key": {
        "simple": {
            "id": "administrator"
        }
    },
    "type": "group",
    "deleted": false,
    "attributes": {
        "id": "administrator",
        "name": "Administrator"
    },
    "permissions": [
        "target": "SYSADMIN",
        "rights": "useAccounts,retrieveAccounts"
    ]
}
```

## Response Schema

Entitlement read fetches a single entitlement’s attributes and returns the resulting object to ISC, similar to how entitlement list does. You can implement this in the main connector file, [index.ts](https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts):

```javascript
...
.stdEntitlementRead(async (context: Context, input: StdEntitlementReadInput, res: Response<StdEntitlementReadOutput>) => {
    const group = await airtable.getEntitlement(input.key)

    res.send(group.toStdEntitlementReadOutput())
})
...
...
...
public toStdEntitlementReadOutput(): StdEntitlementReadOutput {
    return this.buildStandardObject();
}

private buildStandardObject(): StdEntitlementReadOutput | StdEntitlementListOutput {
    return {
        key: SimpleKey(this.id),
        type: 'group',
        attributes: {
            id: this.id,
            name: this.name
        }
    }
}
```
