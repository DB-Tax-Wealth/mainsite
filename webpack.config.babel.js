import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';
import { COMPANY_NAME } from 'constants/company-name';
import { clean } from './webpack/clean';
import { devServer } from './webpack/dev-server';
import { getFavicons } from './webpack/get-favicons';
import { getHtml } from './webpack/get-html';
import { getSourcemaps } from './webpack/get-sourcemaps';
import { loadFonts } from './webpack/load-fonts';
import loadImages from './webpack/load-images';
import { loadJs } from './webpack/load-js';
import { loadStyles } from './webpack/load-styles';
import { loadFiles } from './webpack/load-files';
import { copyFiles } from './webpack/copy-files';

const PUBLIC_PATH = '/';

const ROOT_PATHS = {
  dist: path.join(__dirname, 'docs'),
  src: path.join(__dirname, 'src'),
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
    warnings: false,
  },
};

const entryConfig = {
  entry: path.join(ROOT_PATHS.src, 'index.js'),
};

const outputConfig = {
  output: {
    filename: '[name]-[hash].js',
    path: ROOT_PATHS.dist,
    publicPath: PUBLIC_PATH,
  },
};

const optimizationConfig = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserWebpackPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};

const commonConfig = merge([
  entryConfig,
  getHtml({ title: COMPANY_NAME, template: path.join(ROOT_PATHS.src, 'index.html') }),
  loadJs({ include: ROOT_PATHS.src, exclude: '/node_modules/', options: { cacheDirectory: true } }),
]);

const developmentConfig = merge([
  commonConfig,
  devServer({ host: 'localhost', port: 9080 }),
  getSourcemaps({ type: 'cheap-module-eval-source-map' }),
  loadFiles({ name: '[name].[ext]' }),
  loadFonts({ options: { name: '[name].[ext]' } }),
  loadImages({ options: { limit: 15000, name: 'images/[name].[ext]' } }),
  loadStyles({}),
  { output: { publicPath: '/' } },
]);

const productionConfig = merge([
  clean(ROOT_PATHS.dist),
  commonConfig,
  copyFiles({ from: path.join(ROOT_PATHS.src, 'CNAME'), to: path.join(ROOT_PATHS.dist) }),
  copyFiles({ from: path.join(ROOT_PATHS.src, '404.html'), to: path.join(ROOT_PATHS.dist, '404.html') }),
  copyFiles({ from: path.join(ROOT_PATHS.src, 'robots.txt'), to: path.join(ROOT_PATHS.dist, 'robots.txt') }),
  copyFiles({
    from: path.join(ROOT_PATHS.src, 'google8c9086298038990c.html'),
    to: path.join(ROOT_PATHS.dist, 'google8c9086298038990c.html'),
  }),
  copyFiles({ from: path.join(ROOT_PATHS.src, 'sitemap.txt'), to: path.join(ROOT_PATHS.dist, 'sitemap.txt') }),
  getFavicons({ sourcePath: path.join(ROOT_PATHS.src, '/images/favicon.png') }),
  loadFiles({ limit: 1000, name: 'documents/[name].[ext]' }),
  loadFonts({ options: { limit: 5000, name: 'fonts/[name].[ext]' } }),
  loadImages({ options: { limit: 5000, name: 'images/[name].[ext]' } }),
  loadStyles({ production: true }),
  optimizationConfig,
  outputConfig,
  statConfig,
]);

export default (mode) => {
  process.env.BABEL_ENV = mode;

  if (mode === 'production') return merge(productionConfig, { mode });
  return merge(developmentConfig, { mode });
};
