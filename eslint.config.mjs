import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

/**
 * Flat config - `next lint` was removed in Next 16, so `npm run lint` calls the
 * ESLint CLI directly. eslint-config-next bundles the react, react-hooks,
 * import, jsx-a11y and typescript-eslint plugins, so they are not installed
 * separately.
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.vercel/**',
    'tsconfig.tsbuildinfo',
  ]),
])

export default eslintConfig
