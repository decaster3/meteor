var webpack = require('webpack');
module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    "./client/client.js"
  ],
  output: {
    path: require("path").resolve("./dist"),
    filename: "bundle.js",
    publicPath: "/"
  },


  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  module: {
      loaders: [
        {
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'postcss-loader',
      options: {
        plugins: function () {
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader'
    }]
  },
        {
              test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=100000&name=./imgs/[hash].[ext]'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: ["babel-loader"],
          query: {
            presets: ['react', 'es2015', 'react-hmre']
          }
        },
        { test: /(\.css$)/, loaders: ['style-loader', 'css-loader'] },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
