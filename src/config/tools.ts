export type ToolId = 'json' | 'timestamp' | 'codec'

export interface ToolDefinition {
  id: ToolId
  name: string
  shortName: string
  description: string
  route: string
  icon: string
  tags: string[]
  accent: string
}

export const TOOLS: ToolDefinition[] = [
  {
    id: 'json',
    name: 'JSON 格式化工具',
    shortName: 'JSON',
    description: '校验、格式化或压缩 JSON，错误会直接指出位置。',
    route: '/tools/json',
    icon: 'carbon:data-structured',
    tags: ['格式化', '校验', '本地处理'],
    accent: '#d9ff68',
  },
  {
    id: 'timestamp',
    name: '时间戳转换工具',
    shortName: '时间戳',
    description: '自动识别秒与毫秒，同时查看本地时间、UTC 和 ISO。',
    route: '/tools/timestamp',
    icon: 'carbon:time',
    tags: ['Unix', '时区', '本地处理'],
    accent: '#8be9fd',
  },
  {
    id: 'codec',
    name: '编解码工具',
    shortName: '编解码',
    description: '处理 Base64 与 URL 编解码，完整支持中文和 Emoji。',
    route: '/tools/codec',
    icon: 'carbon:code',
    tags: ['Base64', 'URL', '本地处理'],
    accent: '#c4b5fd',
  },
]

export function getTool(id: ToolId) {
  const tool = TOOLS.find(item => item.id === id)
  if (!tool)
    throw new Error(`Unknown tool: ${id}`)
  return tool
}
