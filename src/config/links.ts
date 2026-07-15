export type LinkCategoryId = 'mine' | 'learning' | 'daily'

export interface LinkCategory {
  id: LinkCategoryId
  name: string
  label: string
  description: string
}

export interface LinkDefinition {
  id: string
  category: LinkCategoryId
  name: string
  description: string
  url: string
  displayUrl: string
  icon: string
  tags: string[]
  accent: string
  external: boolean
}

export const LINK_CATEGORIES: LinkCategory[] = [
  {
    id: 'mine',
    name: '我的空间',
    label: 'MY SPACE',
    description: '站内内容与公开作品的快捷入口。',
  },
  {
    id: 'learning',
    name: '开发学习',
    label: 'LEARN / BUILD',
    description: '写代码、找资料和持续学习时常用的网站。',
  },
  {
    id: 'daily',
    name: '日常使用',
    label: 'DAILY / WEB',
    description: '视频、邮件、地图和翻译等日常入口。',
  },
]

export const LINKS: LinkDefinition[] = [
  {
    id: 'toolbox',
    category: 'mine',
    name: '开发者工具箱',
    description: 'JSON、时间戳与编解码工具，全部在浏览器本地处理。',
    url: '/tools',
    displayUrl: 'bugg921.github.io/tools',
    icon: 'carbon:tools',
    tags: ['工具', '站内'],
    accent: '#a7f3d0',
    external: false,
  },
  {
    id: 'services',
    category: 'mine',
    name: '服务入口',
    description: '查看我公开提供的服务、闲鱼商品与联系方式。',
    url: '/services',
    displayUrl: 'bugg921.github.io/services',
    icon: 'carbon:shopping-bag',
    tags: ['服务', '站内'],
    accent: '#fde68a',
    external: false,
  },
  {
    id: 'blog',
    category: 'mine',
    name: '文章',
    description: '技术、工具、学习过程和日常想法的长期记录。',
    url: '/blog',
    displayUrl: 'bugg921.github.io/blog',
    icon: 'carbon:pen',
    tags: ['博客', '站内'],
    accent: '#c4b5fd',
    external: false,
  },
  {
    id: 'github',
    category: 'mine',
    name: 'GitHub',
    description: '我的公开代码、项目仓库与持续更新记录。',
    url: 'https://github.com/BUGg921',
    displayUrl: 'github.com/BUGg921',
    icon: 'carbon:logo-github',
    tags: ['代码', '作品'],
    accent: '#d1d5db',
    external: true,
  },
  {
    id: 'csdiy',
    category: 'learning',
    name: 'CS 自学指南',
    description: '计算机课程、学习路线和高质量课程资源索引。',
    url: 'https://csdiy.wiki/',
    displayUrl: 'csdiy.wiki',
    icon: 'carbon:book',
    tags: ['CS', '课程'],
    accent: '#93c5fd',
    external: true,
  },
  {
    id: 'datawhale',
    category: 'learning',
    name: 'Datawhale',
    description: 'AI 与数据科学开源课程、组队学习和学习资料。',
    url: 'https://www.datawhale.cn/',
    displayUrl: 'datawhale.cn',
    icon: 'carbon:education',
    tags: ['AI', '开源学习'],
    accent: '#67e8f9',
    external: true,
  },
  {
    id: 'linux-do',
    category: 'learning',
    name: 'LINUX DO',
    description: '关注技术、软件开发与互联网话题的社区。',
    url: 'https://linux.do/',
    displayUrl: 'linux.do',
    icon: 'carbon:forum',
    tags: ['社区', '技术'],
    accent: '#86efac',
    external: true,
  },
  {
    id: 'hackerrank',
    category: 'learning',
    name: 'HackerRank',
    description: '在线编程练习、算法题与技术面试准备。',
    url: 'https://www.hackerrank.com/',
    displayUrl: 'hackerrank.com',
    icon: 'carbon:code',
    tags: ['算法', '练习'],
    accent: '#6ee7b7',
    external: true,
  },
  {
    id: 'bilibili',
    category: 'daily',
    name: '哔哩哔哩',
    description: '视频、课程、科技内容与日常兴趣。',
    url: 'https://www.bilibili.com/',
    displayUrl: 'bilibili.com',
    icon: 'carbon:video',
    tags: ['视频', '学习'],
    accent: '#7dd3fc',
    external: true,
  },
  {
    id: 'youtube',
    category: 'daily',
    name: 'YouTube',
    description: '技术频道、英文内容和长视频资料。',
    url: 'https://www.youtube.com/',
    displayUrl: 'youtube.com',
    icon: 'carbon:logo-youtube',
    tags: ['视频', '英文'],
    accent: '#fca5a5',
    external: true,
  },
  {
    id: 'gmail',
    category: 'daily',
    name: 'Gmail',
    description: '快速进入邮箱，处理通知、注册和日常沟通。',
    url: 'https://mail.google.com/',
    displayUrl: 'mail.google.com',
    icon: 'carbon:email',
    tags: ['邮箱', 'Google'],
    accent: '#fda4af',
    external: true,
  },
  {
    id: 'google-maps',
    category: 'daily',
    name: 'Google Maps',
    description: '搜索地点、规划路线和查看地图信息。',
    url: 'https://maps.google.com/',
    displayUrl: 'maps.google.com',
    icon: 'carbon:map',
    tags: ['地图', '路线'],
    accent: '#bbf7d0',
    external: true,
  },
  {
    id: 'google-translate',
    category: 'daily',
    name: 'Google 翻译',
    description: '处理中英文文本、网页与学习资料翻译。',
    url: 'https://translate.google.com/',
    displayUrl: 'translate.google.com',
    icon: 'carbon:translate',
    tags: ['翻译', '语言'],
    accent: '#bfdbfe',
    external: true,
  },
]
