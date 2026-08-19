# Changelog

## 0.4.0 - 2026-07-15

### Breaking changes

**The package now ships source directly instead of a Babel build.** `lib/console.js` is the original, unminified ES module source rather than transpiled and minified output. The entry point and default export are unchanged. It is still a single preconfigured `console.Console` instance bound to `process.stdout` and `process.stderr`.

**Property ordering in inspected output changes for some accented input.** The `sorted` inspect option is backed by an `isotropic-natural-sort` comparator, bumped here to `~0.9.0` (from `~0.8.1`). Object keys containing `Ŀ`, `ŀ`, `ŉ`, `ẚ`, `⁻`, or `₋` now fold to clean ASCII in the comparison key instead of leaving a residual character, so the order in which those keys are printed can differ. This affects display only.

#### Migration

Nothing to change beyond running on Node 26. If you snapshot-test console output and your fixtures contain object keys with those characters, regenerate the snapshots.

### Changed

- `description` rewritten and `keywords` expanded (`console`, `debug`, `inspect`, `log`) for npm discoverability.
- Recommends `node ^26.5.0` / `npm ^11.17.0`.

### Internal

- Test suite migrated from Mocha to the built-in `node --test` runner.
- The Babel toolchain and the `build` / `prepare` build scripts were removed; the source moved from `js/` to `lib/`.
- `isotropic-dev-dependencies` updated to `~0.4.0`; the separately pinned `eslint` dev dependency was dropped.

## 0.3.1 - 2025-04-10

### Changed

- A comprehensive README was added, documenting every configured inspect option and the rationale for each.
- `eslint` pinned at `~9.8.0` as a direct dev dependency.
- `isotropic-dev-dependencies` bumped to `~0.3.1`.
- `isotropic-natural-sort` bumped to `~0.8.1`.

No runtime behavior changed in this release.

## 0.3.0 - 2024-07-30

### Breaking changes

**The package is now an ES module.** `"type": "module"` was added to `package.json`. CommonJS consumers can no longer `require('isotropic-console')`.

**Property ordering in inspected output changes for input containing combining marks outside U+0300–U+036F.** This follows from the `isotropic-natural-sort` bump to `~0.8.0`, which in turn picked up an `isotropic-character-fold` change from stripping only the Combining Diacritical Marks block to stripping all Unicode nonspacing marks. Object keys in Hebrew, Arabic, Devanagari, and similar scripts now have their marks removed from the comparison key, so keys that previously sorted distinctly may now compare equal.

#### Migration

Switch to `import`:

```javascript
// Before
const _console = require('isotropic-console');

// After
import _console from 'isotropic-console';
```

### Changed

- Node built-ins are now imported with the `node:` prefix (`node:console`, `node:process`).
- The natural-sort comparator is created once and held in a module-level binding rather than being constructed inline in the options object. No behavior change.
- ESLint moved to flat config (`eslint.config.js`); the `eslintConfig` block was removed from `package.json`.
- Coverage tooling switched from `nyc` to `c8`.
- `repository` given an explicit `github:` prefix.
- Recommends `node ^22.5.1` / `npm ^10.8.2`.

## 0.2.0 - 2021-02-22

### Changed

- The entire dev toolchain was replaced by a single `isotropic-dev-dependencies` dev dependency; Babel, ESLint, and nyc configuration blocks were removed from `package.json` in favor of shared configuration. `isotropic-natural-sort` `~0.7.0`.
- Recommends `node ^14.15.5` / `npm ^7.5.4`.

No runtime behavior changed in this release.

## 0.1.0 - 2020-07-27

Initial release.

- Default export is a preconfigured `node:console` `Console` instance writing to `process.stdout` and `process.stderr`, usable as a drop-in replacement for the global `console`.
- Inspect options are set for full, readable diagnostic output: unlimited `depth`, unlimited `maxArrayLength`, `breakLength: Infinity`, `compact: false`, and `customInspect: true`.
- `sorted` is set to an `isotropic-natural-sort` comparator, so object properties print in natural order (`item2` before `item10`).
- `colors`, `getters`, `showHidden`, and `showProxy` are all disabled.
- Recommends `node ^12.18.3` / `npm ^6.14.6`.
