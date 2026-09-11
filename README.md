# Antelier public journeys testbed

Operator-owned evidence repository. No upstream changes are proposed.

**Start here: [CI passed. The task disappeared after reload.](HOSTED-RESULTS.md)**
A hosted persistence failure, its correction, and an unchanged acceptance check,
with screenshots, pinned receipts and an experimental install path. This is a
synthetic demonstration, not customer validation.

The Selenium experiment below is separate historical coverage.

Uses the public Selenium test form at https://www.selenium.dev/selenium/web/web-form.html with synthetic text. Workflow adapted from Antelier docs/journeys/ci.md: push, manual and six-hour schedule, pinned npm 0.2.0, uploaded report. No sign-in or Supabase credentials; no notifications.

The green configuration expects Received!. A separately labelled controlled-defect commit expects a deliberately wrong phrase; it must fail. This is a wrong-expectation experiment, not a discovered Selenium bug.

The no-browser job uses a clean Node container with no Chrome/Chromium and records the real refusal.

Expectation approval is by Astral (agent), not a claim of independent human review. No deployed-version claim is made for the public app.
