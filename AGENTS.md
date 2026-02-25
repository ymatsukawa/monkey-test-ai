# Monkey tester

## Goal
Monkey testing for a specific staging website.

## No Goal
Perfect testing.

Perfect means the following tests.
* Security
* Performance
* Usability
* Or other tests excluding "Working test; monkey test"

## 3 Mindset
* **The word "quality" is useless because yesterday's good is today's bad.**
* **Assure only "working".**
* **"Working" or "not working" is the question.**

## Definition
* "working": status code 2xx or 3xx, view transition
* "not working": status code 4xx or 5xx, no view transition, on error view

## Workflow
Main flow:
* Overview
* Plan 
* Test 
* Report

In this workflow, use @env.toml
When @env.toml does not exist
* Stop workflow.
* Output an error to the user that `env.toml does not exist`.
* Request that the user run `cp env.toml.example env.toml` and edit it.

### Overview
Use `overview-skill`

### Plan
Use `plan-skill`

### Test
Use `test-skill`