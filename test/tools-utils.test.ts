import { describe, expect, it } from 'vitest'
import {
  decodeBase64,
  decodeUrl,
  encodeBase64,
  encodeUrl,
  formatJson,
  minifyJson,
  parseTimestamp,
} from '../src/utils/tools'

describe('json tools', () => {
  it('formats and minifies valid JSON with unicode', () => {
    const input = '{"name":"BUGg921","message":"你好","items":[1,2]}'
    expect(formatJson(input)).toEqual({
      ok: true,
      value: '{\n  "name": "BUGg921",\n  "message": "你好",\n  "items": [\n    1,\n    2\n  ]\n}',
    })
    expect(minifyJson(input)).toEqual({ ok: true, value: input })
  })

  it('reports empty and malformed JSON', () => {
    expect(formatJson('')).toMatchObject({ ok: false })
    expect(formatJson('{"broken":}')).toMatchObject({ ok: false })
  })

  it('handles larger JSON payloads', () => {
    const input = JSON.stringify({
      items: Array.from({ length: 2_000 }, (_, index) => ({ index, value: `item-${index}` })),
    })
    const result = formatJson(input)

    expect(result.ok).toBe(true)
    if (result.ok)
      expect(result.value).toContain('"item-1999"')
  })
})

describe('timestamp tools', () => {
  it('detects seconds and milliseconds', () => {
    const seconds = parseTimestamp('1720963296')
    const milliseconds = parseTimestamp('1720963296000')

    expect(seconds).toMatchObject({ ok: true, unit: 'seconds', milliseconds: 1720963296000 })
    expect(milliseconds).toMatchObject({ ok: true, unit: 'milliseconds', milliseconds: 1720963296000 })
    if (seconds.ok)
      expect(seconds.iso).toBe('2024-07-14T13:21:36.000Z')
  })

  it('rejects invalid and out-of-range values', () => {
    expect(parseTimestamp('hello')).toMatchObject({ ok: false })
    expect(parseTimestamp('999999999999999999')).toMatchObject({ ok: false })
  })

  it('supports timestamps before the Unix epoch', () => {
    const result = parseTimestamp('-1')
    expect(result).toMatchObject({ ok: true, unit: 'seconds' })
    if (result.ok)
      expect(result.iso).toBe('1969-12-31T23:59:59.000Z')
  })
})

describe('codec tools', () => {
  it('round-trips unicode Base64 content', () => {
    const encoded = encodeBase64('你好，BUGg921 👋')
    expect(encoded.ok).toBe(true)
    if (!encoded.ok)
      return

    expect(decodeBase64(encoded.value)).toEqual({ ok: true, value: '你好，BUGg921 👋' })
  })

  it('round-trips URL content and rejects malformed input', () => {
    const encoded = encodeUrl('a b/你好?x=1&y=2')
    expect(encoded.ok).toBe(true)
    if (!encoded.ok)
      return

    expect(decodeUrl(encoded.value)).toEqual({ ok: true, value: 'a b/你好?x=1&y=2' })
    expect(decodeUrl('%E0%A4%A')).toMatchObject({ ok: false })
    expect(decodeBase64('%%%')).toMatchObject({ ok: false })
  })
})
