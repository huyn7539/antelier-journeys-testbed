# What must stay true — Hosted task persistence

Antelier runs these checks in a real browser against the app below on every run. Each line is one journey from
`.antelier/journeys.yml` in plain words; if a line reads wrong, edit the journey name there and run
`antelier journeys expectations` again.

## What must stay true

1. A created task remains after reload (checked: "Task added" is on the page; exactly 1 this run's test item is on the page; exactly 1 this run's test item is on the page).

## Identities in use

- none

Identities are named by their key; their emails and passwords stay in the environment or `.antelier/secrets.env`.

App: https://antelier-acceptance-testbed.kibahung19.workers.dev/


## Approval

Expectations hash: dc825049847e3bc0
Approved by: Codex controlled testbed under operator authorization on: 2026-09-10

Replace the blanks with your name and today's date to approve these expectations. The hash covers the journey names
and steps; when they change, `antelier journeys expectations` rewrites this file with a new hash and clears the
approval, and every report says the expectations changed until someone approves again.
