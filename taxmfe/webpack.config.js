const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const mf = require('@angular-architects/module-federation/webpack');
const share = mf.share;

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "taxmfe"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "taxmfe",
      library: { type: "var", name: "taxmfe" },
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './src/bootstrap.ts',
      },

      shared: share({
        "@angular/core": { requiredVersion: 'auto' },
        "@angular/common": { requiredVersion: 'auto' },
        "@angular/router": { requiredVersion: 'auto' },
        "rxjs": { requiredVersion: 'auto' },
        //I did not implement this as my library is in Angular 14, but this project is in Angular 12, need to research on shared library sharing data between multiple versions of angular.
        //"@vijender1256/auth-lib": { requiredVersion: 'auto' } 
      })
    }

    )
  ],
};
