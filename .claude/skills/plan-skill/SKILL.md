---
name: plan-skill
description: Plan how to test with overview knowledge before starting test. Use when starting to test.
---

# Plan skill

## Goal
List test cases in markdown.

## No Goal
Actual test. The actual work should be done by another skill or agent.

## Steps
### Step-1. Detect view types
From the overview knowledge, detect views as follows
* Auth (sign in)
* Settings
* Create/Update/Delete (from CRUD)
* Read (from CRUD)
  * Without websocket, gRPC, webRTC and other "dynamic" external connections
  * With external connections

### Step-2. Exclude test cases
From view types, exclude hard test cases.

Example:
* WebRTC requires multiple clients. Launching multiple clients is difficult, so it's hard to test.
* WebSocket requires hardware, so testing with software alone is difficult.

### Step-3. List and order test cases
From the knowledge and remaining test cases, list what to test.

And order them in a meaningful flow.

Examples:
**NG**:
* 1. Settings
* 2. Create Stock
* 3. Auth

**OK**:
* 1. Auth
* 2. Create Stock
* 3. Settings

### Step-4. Write test cases
Write the list to `@report/plan_{project_name}.md` as Gherkin style

```markdown
# Case-1. Login to dashboard
Given: I go to login page
When: I input email as "test@example.com" and password as "password" to form
And: Click "login" button
Then: I transition to the dashboard

# Case-2. Switch dashboard to list
...
```