# Hosted correction rehearsal

This is an owned, synthetic testbed, not external customer validation. The isolated
Cloudflare Worker `antelier-acceptance-testbed` has no database, credentials or
production bindings. Task data stays in browser localStorage.

The approved journey creates a task and checks that it remains after reload.
PR previews use `pr-{pr}` Worker version aliases. A controlled operator deployment
publishes a commit status under `antelier/controlled-cloudflare-preview`, with the
exact preview URL and source revision. This is a manual integration, not native
Cloudflare Builds discovery or automatic preview-completion scheduling.

The existing CI smoke test does not cover browser persistence. Antelier's separate
read-only verifier runs the approved behavior against the hosted preview. The
publisher updates one sticky comment. No PR code runs with a write token.

Rehearsal: remove the persistence write in a fork PR, deploy that revision, publish
its preview status, and inspect the execution receipt. Restore the write, deploy the
corrected head and rerun with identical approved expectations. The revision header
is stamped by the controlled deployer; it is not cryptographic build attestation.

The earlier PR #1 local Ready/Broken fixture remains historical evidence. The
default-branch policy now targets this hosted scenario, so a new run of PR #1 will
not reproduce its old policy. Preserved receipts name their actual policy revision.

Public Action v0 and npm packages are unchanged. A successful journey verifies only
this task-persistence scenario, not general app correctness, auth, multi-user data,
merge enforcement or customer time saved.
