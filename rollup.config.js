import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const removeCircularDependencyWarning = function ( message ) {
  if (message.code === 'CIRCULAR_DEPENDENCY') {
    return;
  }
  console.error(message);
};

export default [{
  input: 'src/visualisations.ts',
  output: [{
    file: 'dist/nhsd-dataviz.min.js',
    format: 'iife',
    name: 'nhsdviz',
    exports: 'named',
  }],
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs(),
    babel({ 
      babelHelpers: 'bundled',
      presets: [
        [
          "@babel/preset-env",
          {
            "useBuiltIns": "entry",
            "corejs": "3.21.1"
          }
        ]
      ]
    }),
    terser(),
  ],
  onwarn: removeCircularDependencyWarning,
},{
  input: 'src/visualisations.ts',
  output: [{
    file: 'dist/nhsd-dataviz.js',
    format: 'iife',
    name: 'nhsdviz',
    exports: 'named',
  }],
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs(),
    babel({ 
      babelHelpers: 'bundled',
      presets: [
        [
          "@babel/preset-env",
          {
            "useBuiltIns": "entry",
            "corejs": "3.21.1"
          }
        ]
      ]
    }),
  ],
  onwarn: removeCircularDependencyWarning,
}];
