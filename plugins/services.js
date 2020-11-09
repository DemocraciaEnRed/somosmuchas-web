export default ({ app, $config }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('strapiAsset', path => `${$config.strapiURL}${path}`)
  inject('theTime', (date) => {
    if (date.getMinutes() === 0) {
      return `${date.getHours()}:00 Hs`
    }
    return `${date.getHours()}:${date.getMinutes()} Hs`
  })
}
