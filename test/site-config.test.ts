import { describe, expect, it } from 'vitest'
import { LINKS, LINK_CATEGORIES } from '../src/config/links'
import { PROJECTS, SITE, bentoCustomComponentsCfg, navFilter } from '../src/config/param'
import { SERVICE_CHANNELS } from '../src/config/services'
import { TOOLS } from '../src/config/tools'

describe('personal site configuration', () => {
  it('uses the BUGg921 identity and links', () => {
    expect(SITE.author).toBe('BUGg921')
    expect(SITE.githubHome).toBe('https://github.com/BUGg921')
    expect(PROJECTS[0].demoUrl).toBe('https://bugg921.github.io/')
  })

  it('keeps the planned content sections available', () => {
    expect(navFilter.map(item => item.label)).toEqual(['首页', '工具', '链接', '服务', '文章', '项目'])
  })

  it('registers grouped bookmark links with unique destinations', () => {
    expect(LINK_CATEGORIES.map(category => category.id)).toEqual(['mine', 'learning', 'daily'])
    expect(new Set(LINKS.map(link => link.url)).size).toBe(LINKS.length)
    expect(LINKS.filter(link => link.external).every(link => link.url.startsWith('https://'))).toBe(true)
  })

  it('only exposes service channels with a configured destination', () => {
    expect(SERVICE_CHANNELS.map(channel => channel.id)).toEqual(['xianyu', 'github'])
    expect(SERVICE_CHANNELS.filter(channel => channel.available).every(channel => Boolean(channel.href))).toBe(true)
  })

  it('places the WeChat contact card in the open homepage grid cell', () => {
    expect(bentoCustomComponentsCfg.find(item => item.id === 'WeChatCard')).toMatchObject({
      x: 1,
      y: 3,
      width: 1,
      height: 1,
    })
  })

  it('registers the first three local tools with unique routes', () => {
    expect(TOOLS.map(tool => tool.id)).toEqual(['json', 'timestamp', 'codec'])
    expect(new Set(TOOLS.map(tool => tool.route)).size).toBe(TOOLS.length)
    expect(TOOLS.every(tool => tool.tags.includes('本地处理'))).toBe(true)
  })
})
