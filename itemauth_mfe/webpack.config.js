const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'itemAuthMfe',

  exposes: {
    './ItemAuthModule': './src/app/item-auth/item-auth.module.ts',
    './AuthDashCmp': './src/app/item-auth/item-auth-dashboard/item-auth-dashboard.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ['@vijender1256/auth-lib'],
});
