# Architecture overview

Product (static Vite React hub linking Terra Classic and BSC OTC apps)
stays in [`README.md`](../README.md) and [`frontend/`](../frontend/). This
file is the repo map for **merge and review**. Do not copy hub copy or
OTC URLs here.

## Merge plane

Protected `main` is the only release branch. The merge contract is:

| Gate | Contract |
| --- | --- |
| Direct push | Off (`enable_push: false`) |
| Status check | `ci/woodpecker/pr/woodpecker` required (root `.woodpecker.yml`: `gitleaks` + `tree`) |
| Official CODEOWNERS review | Not a merge gate. No file at `CODEOWNERS`, `docs/CODEOWNERS`, or `.forgejo/CODEOWNERS`. |
| `force_merge` | Forbidden |
| Approvals | `required_approvals: 0`; rejected reviews still block |

Catch-all CODEOWNERS removal: [ADR 0001](adr/0001-remove-catchall-codeowners.md)
([#3](https://git.cl8y.com/code/cl8y-otc-hub/issues/3)). Forge policy that
keeps push/status protection and drops official-review block is
[cl8y-forgejo#48](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/issues/48)
and
[cl8y-forgejo `docs/INVARIANTS.md`](https://git.cl8y.com/PlasticDigits/cl8y-forgejo/src/branch/main/docs/INVARIANTS.md).
This product tree does not PATCH Forgejo protection and does not edit CAC.

Branch protection is operator-owned. Product PRs must not reintroduce
`CODEOWNERS`, `docs/CODEOWNERS`, or `.forgejo/CODEOWNERS` (Forgejo lookup
paths; Go-regexp, not GitHub globs). Land vehicle for ADR 0001 is occupying
pull `#3`; `cac-design-issue-3` is design transport only (do not merge it
to `main`). The named branch is empty vs `main` until implement restores
delete commit `12466217`.

## Product (pointer only)

The hub is static frontend. OTC swap apps, deploy, key, and custody
changes are out of this merge-plane document
([agent-control #297](https://git.cl8y.com/PlasticDigits/cl8y-agent-control/issues/297)).
