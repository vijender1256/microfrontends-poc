const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'itemMfe',

  exposes: {
    './ItemModule': './src/app/item/item.module.ts',
    './ItemDashCmp': './src/app/item/itemdashboard/itemdashboard.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },
  sharedMappings: ['@vijender1256/auth-lib'],
});


