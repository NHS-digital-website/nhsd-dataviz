import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';

const removeCircularDependencyWarning = function ( message ) {
  if (message.code === 'CIRCULAR_DEPENDENCY') {
    return;
  }
  console.error(message);
};

export default [{
  input: 'src/visualisations.js',
  output: {
    file: 'dist/visualisations.module.js',
    format: 'esm',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
  onwarn: removeCircularDependencyWarning,
}, {
    input: 'src/visualisations.js',
    output: [{
      file: 'dist/visualisations.js',
      format: 'iife',
      name: 'nhsdViz',
      exports: 'default',
    }, {
      file: 'dist/visualisations.cjs.js',
      format: 'cjs',
      name: 'nhsdViz',
      exports: 'default',
    }],
    plugins: [
      nodeResolve(),
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
  }
];
