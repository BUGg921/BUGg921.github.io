export type ConversionResult =
  | { ok: true, value: string }
  | { ok: false, error: string }

export type TimestampUnit = 'seconds' | 'milliseconds'

export type TimestampResult =
  | {
    ok: true
    unit: TimestampUnit
    milliseconds: number
    local: string
    utc: string
    iso: string
  }
  | { ok: false, error: string }

function emptyInputError(): ConversionResult {
  return { ok: false, error: '请输入需要处理的内容。' }
}

function transformJson(input: string, indentation?: number): ConversionResult {
  if (!input.trim())
    return emptyInputError()

  try {
    const parsed = JSON.parse(input)
    return { ok: true, value: JSON.stringify(parsed, null, indentation) }
  }
  catch (error) {
    const message = error instanceof Error ? error.message : '无法解析 JSON'
    return { ok: false, error: `JSON 格式有误：${message}` }
  }
}

export function formatJson(input: string): ConversionResult {
  return transformJson(input, 2)
}

export function minifyJson(input: string): ConversionResult {
  return transformJson(input)
}

export function parseTimestamp(input: string): TimestampResult {
  const normalized = input.trim()
  if (!normalized)
    return { ok: false, error: '请输入 Unix 时间戳。' }

  if (!/^-?\d+(?:\.\d+)?$/.test(normalized))
    return { ok: false, error: '时间戳只能包含数字，可使用负数或小数。' }

  const numericValue = Number(normalized)
  if (!Number.isFinite(numericValue))
    return { ok: false, error: '时间戳超出可处理范围。' }

  const unit: TimestampUnit = Math.abs(numericValue) >= 1_000_000_000_000
    ? 'milliseconds'
    : 'seconds'
  const milliseconds = unit === 'seconds' ? numericValue * 1000 : numericValue
  const date = new Date(milliseconds)

  if (Number.isNaN(date.getTime()))
    return { ok: false, error: '无法生成有效日期，请检查时间戳范围。' }

  return {
    ok: true,
    unit,
    milliseconds,
    local: date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZoneName: 'longOffset',
    }),
    utc: date.toUTCString(),
    iso: date.toISOString(),
  }
}

function bytesToBinary(bytes: Uint8Array) {
  const chunkSize = 0x8000
  let binary = ''
  for (let index = 0; index < bytes.length; index += chunkSize)
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize))
  return binary
}

export function encodeBase64(input: string): ConversionResult {
  if (!input)
    return emptyInputError()

  try {
    const bytes = new TextEncoder().encode(input)
    return { ok: true, value: btoa(bytesToBinary(bytes)) }
  }
  catch {
    return { ok: false, error: 'Base64 编码失败，请缩短输入后重试。' }
  }
}

export function decodeBase64(input: string): ConversionResult {
  if (!input.trim())
    return emptyInputError()

  try {
    const binary = atob(input.trim())
    const bytes = Uint8Array.from(binary, character => character.charCodeAt(0))
    return { ok: true, value: new TextDecoder('utf-8', { fatal: true }).decode(bytes) }
  }
  catch {
    return { ok: false, error: '不是有效的 Base64，或解码结果不是 UTF-8 文本。' }
  }
}

export function encodeUrl(input: string): ConversionResult {
  if (!input)
    return emptyInputError()

  try {
    return { ok: true, value: encodeURIComponent(input) }
  }
  catch {
    return { ok: false, error: 'URL 编码失败，请检查输入内容。' }
  }
}

export function decodeUrl(input: string): ConversionResult {
  if (!input)
    return emptyInputError()

  try {
    return { ok: true, value: decodeURIComponent(input) }
  }
  catch {
    return { ok: false, error: 'URL 编码不完整，请检查百分号后的字符。' }
  }
}
