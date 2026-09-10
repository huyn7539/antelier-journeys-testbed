# Prerelease execution receipt rehearsal

This owner-controlled testbed exercises a fork pull request's read-only CI and a
separate workflow_run verifier/publisher, pinned to Action a18553bb. The tiny
acceptance test is synthetic. A completed CI receipt does not verify the Selenium
app or its browser scenarios. Those are not configured for revision-bound approval.
No repository code is checked out or executed by the write-permission job.
No production release or user adoption claim is represented by this rehearsal.
