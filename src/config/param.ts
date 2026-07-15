export const appName = 'BUGg921'
export const appDescription = 'BUGg921 的个人实验室'

export const navFilter = [
  { label: '首页', route: '/', children: [] },
  { label: '工具', route: '/tools', children: [] },
  { label: '链接', route: '/links', children: [] },
  { label: '服务', route: '/services', children: [] },
  { label: '文章', route: '/blog', children: [] },
  { label: '项目', route: '/project', children: [] },
]

export const SITE = {
  title: 'BUGg921',
  author: 'BUGg921',
  description: '记录技术、想法，以及正在制作的小工具。',
  profileContent: '你好，我是 BUGg921。我喜欢把技术、想法和日常的小麻烦，变成真正能被使用的网页与工具。',
  keywords: 'BUGg921, 个人网站, Vue, 工具, 博客',
  coordinate: [0, 0],
  icon: '/favicon.svg',
  pic: '',
  cv: 'https://github.com/BUGg921',
  juejin: 'https://github.com/BUGg921',
  mail: 'https://github.com/BUGg921',
  homePage: '/',
  profilePage: '/about',
  twitterId: 'BUGg921',
  twitterUrl: 'https://github.com/BUGg921',
  githubId: 'BUGg921',
  githubHome: 'https://github.com/BUGg921',
  weeklyUrl: '/blog',
  repo: 'BUGg921/BUGg921.github.io',
  notion: '/project',
  sourceHome: 'https://github.com/BUGg921/BUGg921.github.io',
  consoleColorFulOutput: '%cKeep building. Keep learning. Keep shipping.',
}

/**
 * 首页 Bento 通用组件布局
 */
export const bentoCommonComponentsCfg = [
  { id: 'Profile', x: 0, y: 0, width: 2, height: 2, index: 0 },
  { id: 'Weekly', x: 2, y: 0, width: 2, height: 1, index: 0 },
  { id: 'Dark', x: 4, y: 0, width: 1, height: 1, index: 0 },
  { id: 'Notion', x: 5, y: 0, width: 1, height: 1, index: 0 },
  { id: 'CountDown', x: 2, y: 1, width: 2, height: 1, index: 0 },
  { id: 'PageTransition', x: 4, y: 1, width: 2, height: 1, index: 0 },
  { id: 'PlaneView', x: 0, y: 2, width: 1, height: 2, index: 0 },
  { id: 'DragMotion', x: 1, y: 2, width: 1, height: 1, index: 0 },
]

/**
 * 首页 Bento 自定义组件布局
 */
export const bentoCustomComponentsCfg = [
  { id: 'Cover', x: 2, y: 2, width: 2, height: 2, index: 0 },
  { id: 'Sticker8', x: 4, y: 2, width: 1, height: 1, index: 0 },
  { id: 'StrokeText', x: 5, y: 2, width: 1, height: 1, index: 0 },
  { id: 'WeChatCard', x: 1, y: 3, width: 1, height: 1, index: 0 },
  { id: 'GitHubSticker', x: 4, y: 3, width: 2, height: 1, index: 0 },
]

/**
 * 项目内容会随着个人工具逐步补充。
 */
export const PROJECTS = [
  {
    name: 'BUGg921 个人网站',
    desc: '我的数字空间，用来发布工具、文章与项目记录。',
    cover: '/wrap-bg.svg',
    demoUrl: 'https://bugg921.github.io/',
    repoUrl: 'https://github.com/BUGg921/BUGg921.github.io',
  },
]

export const giscusSetting = {
  'data-repo': 'BUGg921/BUGg921.github.io',
  'data-repo-id': '',
  'data-category': 'General',
  'data-category-id': '',
  'data-mapping': 'og:title',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'bottom',
  'data-lang': 'zh-CN',
  'data-loading': 'lazy',
  'crossorigin': 'anonymous',
}

export enum MapboxSetting {
  token = '',
  mapLightStyle = 'mapbox://styles/mapbox/light-v11',
  mapDarkStyle = 'mapbox://styles/mapbox/dark-v11',
}
