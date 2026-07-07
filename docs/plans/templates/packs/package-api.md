Use this pack when package exports, public API, config contracts, build
artifacts, or reusable module boundaries change.

Start Gates:
| Gate | Applies | Evidence |
|---|---|---|
| Public contract identified | pending | package/API/config/export or N/A |

Work Checklist:
- [ ] Package/API pack: changed public contract and consumers are recorded.
- [ ] Package/API pack: examples/imports/config names compile or are marked N/A.

Completion Gates:
| Gate | Applies | Required action | Evidence |
|---|---|---|---|
| Package/API proof | pending | Run build/typecheck/test or source audit | pending |
