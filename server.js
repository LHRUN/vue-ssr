import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

import { createRequire } from 'module';
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url);
const resolve = (p) => path.resolve(__dirname, p);

const createServer = async (isProd = process.env.NODE_ENV === 'production') => {
  const app = express()

  // 配置vite服务
  let vite;
  if (isProd) {
    app.use(require('compression')());
    app.use(
      require('serve-static')(resolve('./dist/client'), {
        index: false
      })
    );
  } else {
    vite = await require('vite').createServer({
      server: {
        middlewareMode: true,
      },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  }

  // 生产环境下的静态资源映射
  const manifest = isProd ? fs.readFileSync(resolve('./dist/client/ssr-manifest.json'), 'utf-8') :{}
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
    try {
      // 获取不同环境下的html模版和渲染函数
      let template, render
      if (isProd) {
        template = fs.readFileSync(resolve('./dist/client/index.html'), 'utf-8')
        render = (await import('./dist/server/entry-server.js')).render
      } else {
        template = fs.readFileSync(
          resolve('index.html'),
          'utf-8'
        )
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.js')).render
      }
      const [ appHtml, preloadLinks, piniaState ] = await render(url, manifest)
      
      // 替换处理过后的资源
      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--pinia-state-->`, piniaState)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (error) {
      vite?.ssrFixStacktrace(error)
      next()
    }
  })

  app.listen(5100)
}

createServer();
