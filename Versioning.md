# Versioning

All version numbers should match the following regex:

```regex
/^(?<core>\d+)\.(?<subver>\d)\.(?<miniver>\d)(?:-(?<dev>alpha|beta)\.(?<devver>\d))?(?:-(?<eff>\d+))?$/
```

## e.g. v3.0.1-alpha.5-8

- The following describes each section as it relates to the example above:
	- ${core} (3) - Core version number: Only upped on major updates; i.e. core functionality changes, deprecations/removals, or upon major stable release
	- ${subver} (0) - Sub-version: Upped on key update that doesn't affect library usage overall
	- ${miniver} (1) - Mini-version: Bug fixes in core/stable version
	- ${dev} (alpha) - Alpha - Dev; Beta - Testing
	- ${devver} (5) - Alpha/Beta version - mainly bug fixes or major updates while in dev
	- ${eff} (8) - Fuck-up version: Often accompanied by the commit message "fucking forgot to..."; mainly things that were missed in the deployment process, but library is expected to work