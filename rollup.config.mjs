import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import glob from 'glob';
import * as path from "path"

const entrypoints = {}

glob
  .sync("./src/**/*.js")
  .forEach((file) => {
    const {dir, name} = path.parse(path.relative("./src", file))
    const shortPath = path.join(dir, name)
    entrypoints[shortPath] = file
  })

const plugins = [
  builtins(),
  nodeResolve(),
  commonjs({
	  include: /\/node_modules\//,
	  esmExternals: false,
	  requireReturnsDefault: 'namespace',
  }),
  babel({
    babelHelpers: "inline",
    comments: false,
  }),
]

// put shared chunks into lib/chunks/*
const chunkFileNames = (chunkInfo) => 'chunks/[name].[hash].js'

/** @type {import("rollup").RollupOptions[]} */
export default [
  {
    input: entrypoints,
    output: {
      dir: 'lib/esm',
      format: 'es',
      chunkFileNames,
    },
    plugins
  },
  {
    input: entrypoints,
    output: {
      dir: 'lib',
      format: 'cjs',
      chunkFileNames
    },
    plugins
  }
]
