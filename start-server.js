import createServer from './server.js'

createServer().then(({ app, isTest, isProd }) => {
  if (!isTest) {
    const port = isProd ? 5110 : 5100
    app.listen(port, () => {
      console.log(`service started, port: ${port}`)
    })
  }
})
