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

Credential info is on `test.crendential` in @env.toml
And follow `test.meta` settings.

### Step-1: Launch playwright
Launch `playwright mcp`
And access `overview.url_base` from @env.toml

### Step-2: Start testing with plan
Run monkey tests following the plan of `@tests/{project_name}_{core|interaction|edge}.md`

* [ ] If a case fails, append it to `@report/test_{project_name}.md`

Refer template to `assets/report-template.md`

### Step-3: Post process
* [ ] `pkill playwright`
