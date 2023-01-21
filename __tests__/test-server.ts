import createServer from '../server.js'

export const testPort = 5120

export interface ServerOptions {
  close: () => Promise<void>
}

export async function server() {
  const { app } = await createServer(true)

  return new Promise<ServerOptions>((resolve, reject) => {
    try {
      const server = app.listen(testPort, () => {
        console.log(`test service started, port: ${testPort}`)
      })
      resolve({
        async close() {
          await new Promise((resolve) => {
            server.close(resolve)
            console.log(`test service closed, port: ${testPort}`)
          })
        }
      })
    } catch (error) {
      reject(error)
    }
  })
}
