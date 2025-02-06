// @ts-check
import withNuxt, { configs } from "./.nuxt/eslint.config.mjs";

// withNuxt type is any, because we don't installed `@nuxt/eslint-config` explicitly
export default withNuxt();

// configs type is any, because we don't installed `eslint-flat-config-utils` explicitly
// You can check FlatConfigComposer type at `.nuxt/eslint.config.mjs` and it is any
console.dir(configs, { depth: 3 });
