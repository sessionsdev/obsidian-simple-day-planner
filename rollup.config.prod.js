import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import svelte from "rollup-plugin-svelte";
import autoPreprocess from 'svelte-preprocess';

export default {
  input: 'src/main.ts',
  output: {
    dir: 'dist/',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default',
  },
  external: ['obsidian'],
  plugins: [
    typescript(),
    nodeResolve({browser: true}),
    commonjs(),
    svelte({
       preprocess: autoPreprocess()
    }),  
    copy({
      targets: [
        { src: ['manifest.json', 'styles.css'], dest: 'dist/' }
      ], flatten: true
    }),
  ]
};
