const CracoLessPlugin = require('craco-less');
const path = require('path');

const target = 'http://api.additivasia.io/api/v1/assignment';

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@service': path.resolve(__dirname, 'src/service'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  devServer: {
    port: 3007,
    proxy: [
      {
        context: [
          '/employees',
        ],
        target,
        changeOrigin: true,
      }
    ],
  },
};
