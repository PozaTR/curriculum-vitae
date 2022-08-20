module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/config.scss";`
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'i18n',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
}
