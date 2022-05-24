import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

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
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
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
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    commonjs(),
  ],
  onwarn: removeCircularDependencyWarning,
}];
