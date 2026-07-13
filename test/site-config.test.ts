import { describe, expect, it } from 'vitest'
import { PROJECTS, SITE, navFilter } from '../src/config/param'

describe('personal site configuration', () => {
  it('uses the BUGg921 identity and links', () => {
    expect(SITE.author).toBe('BUGg921')
    expect(SITE.githubHome).toBe('https://github.com/BUGg921')
    expect(PROJECTS[0].demoUrl).toBe('https://bugg921.github.io/')
  })

  it('keeps the planned content sections available', () => {
    expect(navFilter.map(item => item.label)).toEqual(['首页', '文章', '项目'])
  })
})
