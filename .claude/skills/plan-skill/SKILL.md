---
name: plan-skill
description: Plan how to test with overview knowledge before starting test. Use when starting to test.
---

# Plan skill

## Goal
Create test cases by 3-way review.

## No Goal
Actual test. It should be done by another skill or agent.

## Steps

4 steps exist.

* Step-1. Detect target category
* Step-2. Filter test cases
* Step-3. Order test cases
* Step-4. Generate test cases

In this skill, **loop all steps 3 times (3-way review)**.
This is because you may miss some test cases.

These 3 steps are described as follows:
* 1st: Core cases
* 2nd: Interaction cases
* 3rd: Edge cases

### Step-1. Detect target category
From knowledge of overview-skill, detect target category as follows
* Auth (sign in/sign out)
* Settings
* Create/Update/Delete (from CRUD)
* Read (from CRUD)
  * With "dynamic" external connections; websocket, gRPC, webRTC and etc.
  * Without "dynamic" connections

### Step-2. Filter test cases
From the categories and current step case, exclude difficult test cases.

Example:
* WebRTC requires multiple clients.
  * Launching multiple clients is difficult, so it's hard to test.
* WebSocket requires hardware.
  * Testing with software alone is difficult.

### Step-3. Order test cases
From the remaining categories, list what to test.

And order them into a meaningful flow.

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
Write the test cases to `@tests/{project_name}_{core|interaction|edge}.md` as Gherkin style

```markdown
# Case-1. Login to dashboard
Given: I go to login page
When: I input email as "test@example.com" and password as "password" to form
And: Click "login" button
Then: I transition to the dashboard

# Case-2. Switch dashboard to list
...
```

In each way (core, interaction, edge),
**number of cases should be over `plan.minimal_cases` in @env.toml**
If fewer, add more using "parameterized" or "boundary" techniques