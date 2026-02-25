---
name: test-skill
description: Monkey testing with plan. Use when the plan is finished or the user requests to start a test.
---

# Test skill

## Goal
Monkey test using Playwright MCP with planned cases.

## No Goal
Generating report.

## Steps

### Step-1: Launch playwright
Launch `playwright mcp`
And access `target.url_base` from @env.toml

### Step-2: Start testing with plan
Run monkey tests following the plan in `@report/plan_{project_name}.md`

* [ ] If a case fails, append it to `@report/test_{project_name}.md`

### Step-3: Post process
* [ ] `pkill playwright`
