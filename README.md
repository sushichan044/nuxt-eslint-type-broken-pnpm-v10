# nuxt/eslint module type broken with pnpm v10

## Issue

When using pnpm v10 with nuxt/eslint module, the module type is broken and we cannot get completion when editing `eslint.config.js`.

This is because pnpm v10 no longer hoists packages with ESLint in the name unless they are explicitly installed. ref: [issue: pnpm/pnpm#8378](https://github.com/pnpm/pnpm/issues/8378)

Because of this, `@nuxt/eslint-config` and `eslint-flat-config-utils` are no longer hoisted, TypeScript cannot find the type definition, and the export of `.nuxt/eslint.config.mjs` is treated as any.

## Reproduction

You can check the problem at [eslint.config.mjs](./eslint.config.mjs) file.

```js
// eslint.config.mjs
// @ts-check
import withNuxt, { configs } from "./.nuxt/eslint.config.mjs";

// withNuxt type is any, because we don't installed `@nuxt/eslint-config` explicitly
export default withNuxt();

// configs type is any, because we don't installed `eslint-flat-config-utils` explicitly
// You can check FlatConfigComposer type at `.nuxt/eslint.config.mjs` and it is any
console.dir(configs, { depth: 3 });
```
