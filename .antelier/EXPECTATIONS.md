# What must stay true — Selenium public test form

Antelier runs these checks in a real browser against the app below on every run. Each line is one journey from
`.antelier/journeys.yml` in plain words; if a line reads wrong, edit the journey name there and run
`antelier journeys expectations` again.

## What must stay true

1. A visitor can submit synthetic form data and see receipt (checked: "Received!" is on the page).

## Identities in use

- none

Identities are named by their key; their emails and passwords stay in the environment or `.antelier/secrets.env`.

App: https://www.selenium.dev

## Approval

Expectations hash: a3142c4bfaf0e607
Approved by: Astral (agent review for operator-authorized testbed) on: 2026-09-09

Replace the blanks with your name and today's date to approve these expectations. The hash covers the journey names
and steps; when they change, `antelier journeys expectations` rewrites this file with a new hash and clears the
approval, and every report says the expectations changed until someone approves again.
