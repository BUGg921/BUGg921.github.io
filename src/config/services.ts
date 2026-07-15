export type ServiceChannelId = 'xianyu' | 'github'

export interface ServiceChannel {
  id: ServiceChannelId
  name: string
  label: string
  description: string
  href: string
  icon: string
  action: string
  note: string
  external: boolean
  available: boolean
}

export const SERVICE_CHANNELS: ServiceChannel[] = [
  {
    id: 'xianyu',
    name: '闲鱼',
    label: 'SERVICE / MARKET',
    description: '冷门电子书代查代下，先咨询再下单。点击查看商品详情、价格与最新状态。',
    href: 'https://m.tb.cn/h.8bHCr5U?tk=icrNgr1sHof',
    icon: 'carbon:shopping-bag',
    action: '查看闲鱼商品',
    note: '先咨询再下单',
    external: true,
    available: true,
  },
  {
    id: 'github',
    name: 'GitHub',
    label: 'WORK / PROOF',
    description: '在联系之前，可以先看看我公开的代码、项目和持续更新的作品记录。',
    href: 'https://github.com/BUGg921',
    icon: 'carbon:logo-github',
    action: '查看作品',
    note: '@BUGg921',
    external: true,
    available: true,
  },
]
