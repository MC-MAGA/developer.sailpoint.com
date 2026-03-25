---
id: rate-limit
title: Rate Limiting
pagination_label: Rate Limiting
sidebar_label: Rate Limiting
sidebar_position: 6
sidebar_class_name: rateLimit
keywords: ['rate limit']
description: ISC API rate limits.
slug: api/v2026/rate-limit
tags: ['Rate Limit']
---

## Rate Limits

### Current default (API gateway)

There is a default rate limit of 100 requests per `client_id` per 10 seconds for v2026 traffic through the API gateway.
Which API version you call does not change this default; the limit applies **gateway-wide**. If you exceed the rate
limit, expect the following response from the API:

**HTTP Status Code**: 429 Too Many Requests

**Headers**:

- **Retry-After**: [seconds to wait before rate limit resets]

:::info

Specific APIs may have different rate limiting. Refer to their specifications for this information.

:::

:::tip What changed

Gateway rate limiting now keys off **`client_id`** (still **100 requests per 10 seconds** by default). Earlier
documentation described the same ceiling per **`access_token`**. Plan retries and concurrency around **`client_id`** so
your behavior matches how the gateway enforces limits.

:::

### Previous documentation (per access token)

For reference, the documentation used to describe this default as **100 requests** per **`access_token`** per **10 seconds**
through the API gateway. The **429 Too Many Requests** response and **Retry-After** header when you exceed a limit follow
the same pattern as above.
