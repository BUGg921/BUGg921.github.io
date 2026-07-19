export const ABOUT_PROFILE = {
  handle: 'BUGg921',
  label: 'BUILD / LEARN / SHIP',
  updatedAt: '2026.07',
  status: '持续建设中',
  summary: '我喜欢把技术、想法和日常的小麻烦，变成真正能被使用的网页与工具。',
  detail: '比起把个人网站做成一张静态名片，我更希望它慢慢长成一个长期使用的数字空间：能解决问题，也能记录那些正在发生的学习与创造。',
  githubUrl: 'https://github.com/BUGg921',
}

export const NOW_FOCUS = [
  {
    id: 'personal-site',
    index: '01',
    title: '完善这个数字空间',
    description: '持续整理首页、工具、链接、服务、文章和项目，让每个入口都真正有用。',
    icon: 'carbon:application-web',
    accent: '#a7f3d0',
  },
  {
    id: 'browser-tools',
    index: '02',
    title: '制作轻量网页工具',
    description: '优先解决真实的小问题，保持纯前端、本地处理、打开就能使用。',
    icon: 'carbon:tools-alt',
    accent: '#93c5fd',
  },
  {
    id: 'writing',
    index: '03',
    title: '记录学习与实践',
    description: '把遇到的问题、解决过程和可复用经验整理成文章，而不只保留最终答案。',
    icon: 'carbon:notebook',
    accent: '#c4b5fd',
  },
]

export const TECH_STACKS = [
  {
    name: 'Web',
    items: ['Vue 3', 'TypeScript', 'Vite', 'Vite SSG'],
  },
  {
    name: 'Experience',
    items: ['Responsive UI', 'PWA', 'Browser APIs', 'Local-first'],
  },
  {
    name: 'Workflow',
    items: ['Git', 'GitHub', 'GitHub Pages', 'Automated Build'],
  },
]

export const BUILD_PRINCIPLES = [
  {
    title: '先做能用的版本',
    description: '先验证它是否真的解决问题，再逐步补充视觉和细节。',
  },
  {
    title: '小步发布，持续迭代',
    description: '让每一次更新都可以被看见、被使用，也能够随时修正方向。',
  },
  {
    title: '尊重输入与隐私',
    description: '能在浏览器完成的处理就留在本地，不为了功能随意收集数据。',
  },
]
