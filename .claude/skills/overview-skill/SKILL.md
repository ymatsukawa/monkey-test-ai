---
name: overview-skill
description: Watch context of the target website by its source code before starting a test. Use when the user starts testing.
---

# Overview skill
## Goal
Understanding the summary context of a target website by watching its source code.

## No Goal
Understanding detailed/internal system specifications.

NG Examples:
* System architecture
* Component relations
* Class granularity
* Variable names

Required is "What was built". "How it was built" is none of our business.
Just understand "surface" specification.

## Steps

### Step-1. Get target project root path
* From `target.project_root_path` of env.toml, find project root path.
* Do `git rev-parse HEAD`
* Read @report/overview_{project_name}.md
  * **Break this skill's workflow when the revision is the same as in the report**, because it's already done.

### Step-2. Get overview of project
Understand the following contents from the path
* System summary
* User persona
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

## Required basic functions
...
```