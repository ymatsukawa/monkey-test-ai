---
name: overview-skill
description: Watch context of the target website by its source code before starting a test. Use when the user starts testing.
---

# Overview skill
## Goal
Understanding the summary context of a target website by watching its source code.

## Non Goal
Understanding detailed/internal system specifications.

**NG Examples:**
* System architecture
* Component relations
* Class granularity
* Variable names and meanings

Required is "What was built". "How it was built" is none of your business.
Just understand "surface" specification.

## Steps

### Step-1. Get target project path
* From `overview.project_path` of @env.toml, find project path.
* Do `git rev-parse HEAD`
  * If it's not git repository, `N/A` is enough for revision
* Read @report/overview_{project_name}.md
  * **Break workflow of this skill when the revision is the same as in the report**, because it's already done.

### Step-2. Get overview of project
Understand the following contents from the path.
* System summary
* User persona
* Key pages and routes
* Required basic functions

### Step-3. Output how you understood the project

Section template:
```markdown
# {project name}
version: {git revision}

## Project Summary
...

## User persona
...

## Key pages and routes
...

## Required basic functions
...
```
