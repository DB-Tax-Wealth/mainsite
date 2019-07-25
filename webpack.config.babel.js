import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { clean } from './webpack/clean';
import { devServer } from './webpack/dev-server';
import { getFavicons } from './webpack/get-favicons';
import { getHtml } from './webpack/get-html';
import { getSourcemaps } from './webpack/get-sourcemaps';
import { loadFonts } from './webpack/load-fonts';
import loadImages from './webpack/load-images';
import { loadJs } from './webpack/load-js';
import { loadStyles } from './webpack/load-styles';
import merge from 'webpack-merge';
import { name } from './package.json';
import path from 'path';

const PUBLIC_PATH = `/${name}`;

const ROOT_PATHS = {
  dist: path.join(__dirname, 'docs'),
  src: path.join(__dirname, 'src')
};

const statConfig = {
  stats: {
    all: undefined,
    assets: true,
    builtAt: true,
    cached: false,
    cachedAssets: false,
    children: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    chunks: false,
    colors: true,
    depth: false,
    entrypoints: false,
    env: true,
    errorDetails: true,
    errors: true,
    hash: true,
    maxModules: 15,
    modules: false,
    performance: true,
    providedExports: false,
    publicPath: true,
    reasons: true,
    source: false,
    timings: true,
    usedExports: false,
    version: true,
    warnings: false
  }
};

const entryConfig = {
  entry: path.join(ROOT_PATHS.src, 'index.js')
};

const outputConfig = {
  output: {
    filename: '[name]-[hash].js',
    path: ROOT_PATHS.dist,
    publicPath: PUBLIC_PATH
  }
};

const optimizationConfig = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin(), new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
};

const commonConfig = merge([
  entryConfig,
  getHtml({ title: 'DB Tax & Financial Services', template: path.join(ROOT_PATHS.src, 'index.html') }),
  loadJs({ include: ROOT_PATHS.src, exclude: '/node_modules/', options: { cacheDirectory: true } }),
  loadImages({
    options: {
      limit: 15000,
      name: 'images/[name].[hash].[ext]'
    }
  })
]);

const productionConfig = merge([
  clean(ROOT_PATHS.dist),
  commonConfig,
  getFavicons({ sourcePath: path.join(ROOT_PATHS.src, 'images/favicon.png') }),
  loadFonts({ options: { limit: 5000, name: 'fonts/[name]-[hash].[ext]' } }),
  loadStyles({ production: true }),
  optimizationConfig,
  outputConfig,
  statConfig
]);

const developmentConfig = merge([
  commonConfig,
  devServer({ host: 'localhost', port: 9090 }),
  getSourcemaps({ type: 'cheap-module-eval-source-map' }),
  loadFonts({ options: { name: '[name].[ext]' } }),
  loadStyles({}),
  { output: { publicPath: '/' } }
]);

export default mode => {
  process.env.BABEL_ENV = mode;

  if (mode === 'production') return merge(productionConfig, { mode });
  return merge(developmentConfig, { mode });
};
