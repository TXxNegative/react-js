//this file is basically use for group coding, like github branch
/* 
1. it create a set of rules which everyone have to use. agar koi github me project upload hua hai and different people uska brances bana ke usko edit kar raha hai then use eslint ke rules ko follow karna parega warna baad me jaake merge karte time problem hoga.
ex: 
user 1 -> use ; after giving a instruction in a js 
user2 -> dont use : after give a instruction in js
so if eslint have a "rule:" in it that say use ; after every instruction in js then user2 will get a warning to use ; after ever instruction . 


2. it help in making custom rules

3. eslint.config.js as the rulebook for your JavaScript/React code.

4. ESLint checks your code and says:
"This code has a problem"
"This code is written in a bad/unwanted way"
"This variable isn't being used"
*/
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
