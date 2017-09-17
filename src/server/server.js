import express from 'express';
import path from 'path';

const PORT = 3000;
const PUBLIC_PATH = path.resolve(__dirname, './../client/public');
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(PUBLIC_PATH));
} else {
  const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
  const webpackConfig = require('../../config/webpack.dev');
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, { // eslint-disable-line import/no-extraneous-dependencies
    hot: true
  }));
  app.use(require('webpack-hot-middleware')(compiler)); // eslint-disable-line import/no-extraneous-dependencies
}

app.all('*', (req, res) => {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`); // eslint-disable-line no-console
});
