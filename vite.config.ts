import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CSS pipeline — how styles end up in dist/style.css:
//
//   src/styles/globals.css  ─┐
//   Button.module.css        ├─ Vite collects all CSS from the module graph,
//   Input.module.css         │  scopes CSS-Module class names with a hash
//   RadioButton.module.css   │  suffix (e.g. _root_cubu1_1), then writes the
//   Checkbox.module.css      │  concatenated result to dist/style.css.
//                           ─┘
//
// cssCodeSplit: false is required here. With preserveModules: true (needed so
// consumers can tree-shake individual components) Rollup would otherwise emit
// one tiny per-module .css file that bundlers ignore because they aren't
// referenced by any JS import. A single dist/style.css is explicit, stable,
// and always complete.
//
// The output JS chunks do NOT import dist/style.css — Vite strips that
// side-effect during extraction. Consumers must load it explicitly:
//
//   import '@figmaposaurus/mobile-candy-ds/style.css'   // Vite / webpack / Parcel
//   // or <link> in plain HTML
//
// package.json "sideEffects": ["**/*.css"] tells bundlers that CSS files carry
// side effects, preventing them from tree-shaking the import away when
// processing source files directly (e.g. in a monorepo without pre-building).

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        assetFileNames: '[name][extname]',
      },
    },
  },
})
