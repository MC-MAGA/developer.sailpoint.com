---
id: rate-limit
title: Rate Limiting
pagination_label: Rate Limiting
sidebar_label: Rate Limiting
sidebar_position: 6
sidebar_class_name: rateLimit
keywords: ['rate limit']
description: ISC API rate limits.
slug: api/v3/rate-limit
tags: ['Rate Limit']
---

## Rate Limits

There is a default rate limit of 100 requests per `client_id` per 10 seconds for v3 API calls through the API gateway.
Custom rate limits can be set per API in the [sp-gateway route spec](https://github.com/sailpoint/cloud-api-client-common/blob/master/api-route-specs/sp-gateway-routes.yaml),
or per tenant as a [dynamic rate limit](https://github.com/sailpoint/cloud-api-client-common/blob/master/api-route-specs/dynamic-rate-limits.yaml).
If you exceed the rate limit, expect the following response from the API:

**HTTP Status Code**: 429 Too Many Requests

**Headers**:

- **Retry-After**: [seconds to wait before rate limit resets]
