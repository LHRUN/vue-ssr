import puppeteer, { Browser, Page } from 'puppeteer'
import { server, testPort, ServerOptions } from './test-server'
import { beforeAll, afterAll, expect, test } from 'vitest'

let serverConfig: null | ServerOptions = null
let browser: null | Browser = null // 浏览器实例
let page: null | Page = null // 页面实例

const url = (path: string) => `http://localhost:${testPort}${path}`

beforeAll(async () => {
  serverConfig = await server()
  browser = await puppeteer.launch()
  page = await browser.newPage()
})
afterAll(async () => {
  if (page) {
    await page.close()
  }
  if (browser) {
    await browser.close()
  }
  if (serverConfig) {
    await serverConfig.close()
  }
})

test('goto home', async () => {
  if (page) {
    await page.goto(url('/'))
    const content = await page.content()
    expect(content).toMatch('HOME')
  }
})

test('goto about', async () => {
  if (page) {
    await page.goto(url('/about'))
    const content = await page.content()
    expect(content).toMatch('1')
    await page.click('#count')
    expect(content).toMatch('2')
  }
})
