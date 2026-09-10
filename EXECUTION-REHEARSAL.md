# Prerelease execution receipt rehearsal

This owner-controlled testbed exercises a fork pull request's read-only CI and a
separate workflow_run verifier/publisher, pinned to Action a18553bb. The tiny
acceptance test is synthetic. A completed CI receipt does not verify the Selenium
app or its browser scenarios. Those are not configured for revision-bound approval.
No repository code is checked out or executed by the write-permission job.
No production release or user adoption claim is represented by this rehearsal.

Browser phase: a fixed trusted Python HTTP server serves PR HTML bytes on runner
loopback, with no server-side PR execution and no GitHub token in its environment.
The worker still runs in the read-only job. A transient deployment record labels
this runner-local synthetic preview explicitly; it is not an internet deployment.
Approval is by the implementing agent for this fixture, not independent user review.
The previous Selenium configuration is retained as .antelier/selenium.yml for the
existing scheduled workflow. This fixture establishes Linux browser/artifact wiring,
not customer value, production authentication or preview-provider integration.
