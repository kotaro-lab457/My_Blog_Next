module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            outputPath: "img",
            publicPath: "/img",
          },
        },
        "image-webpack-loader",
      ],
    });

    return config;
  },
};
