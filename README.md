# WebhookHub

A centralized web application for ingesting and storing webhook data across multiple integrations.

## Purpose

Managing webhooks across many third-party services means scattered configuration, repeated setup, and brittle one-off implementations. WebhookHub solves this by providing a single place to register clients, define integrations, and configure the events (webhook endpoints) that belong to each integration.

When a new integration needs to be triggered via webhook, onboarding it is a matter of registering it in WebhookHub rather than building and deploying new infrastructure each time.

## Core Concepts

- **Client** — a tenant or system that owns one or more integrations
- **Integration** — a third-party service or internal system a client connects to (e.g. Stripe, Salesforce)
- **Event** — a webhook endpoint URL registered under an integration, scoped to a specific event type (e.g. `payment.completed`)

## Tech Stack

- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
