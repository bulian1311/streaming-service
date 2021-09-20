import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

export default [{
  input: 'src/index.js',
  
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      exports: 'named'
    }
  ],
  plugins: [
    nodeResolve({ extensions: [ '.js', '.jsx' ] }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
    external(),
    url(),
    svgr(),
  ]
}];