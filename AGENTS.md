# AGENTS

Guidance for coding agents working in this repository.

## Project Shape

- This is a static site with no package manager, no build system, and no test runner.
- Core app logic, style, and data are all in `index.html`.
- Keep changes minimal and focused.

## Primary Tasks

- Update schedule data inside `SCHEDULES` in `index.html`.
- Adjust UI text, layout, or filtering behavior without introducing frameworks.
- Keep Swedish-facing user text consistent with the rest of the page.

## Editing Rules

- Prefer small, targeted edits.
- Do not split the project into multiple files unless explicitly requested.
- Avoid adding dependencies or tooling unless explicitly requested.
- Preserve current behavior for existing years when adding a new year.

## Data Conventions

- `SCHEDULES` keys are years (for example `2026`, `2027`).
- Use `null` for years that should render the "coming soon" panel.
- Match objects should keep existing field names and types:
  - `nr` number
  - `time` string
  - `planNr` number
  - `plan` string
  - `group` string
  - `type` string
  - `team1` string
  - `team2` string
  - `result` string

## Manual Verification

After changes, verify in a browser that:

- Year tabs switch correctly.
- Filters for group, plan, and team still work.
- Status text updates correctly.
- Empty state and coming-soon state still render correctly.

## Out of Scope Unless Requested

- Converting to React/Vue/Angular.
- Adding bundlers, linting pipelines, or CI.
- Large redesigns unrelated to the requested task.
