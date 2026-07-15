<script setup lang="ts">
import { navFilter } from '~/config'

const route = useRoute()
const appTitle = useTitle()

const navFilterOptionBgMode = computed(() => {
  if (isDark.value)
    return 'unset'

  return 'difference'
})
// ------------------------------------data------------------------------------//
// 每个 item 的宽高
const compactNav = useMediaQuery('(max-width: 640px)')
const tinyNav = useMediaQuery('(max-width: 420px)')
const ultraCompactNav = useMediaQuery('(max-width: 350px)')
const navItemWidth = computed(() => {
  if (ultraCompactNav.value)
    return 40
  if (tinyNav.value)
    return 42
  if (compactNav.value)
    return 52
  return 80
})
const navItemHeight = 28
const navItemPadding = 5
// 0. 通过序号计算左右移动的位置
const currentItemIndex = ref<number>(-2)
// 1. 背景的样式，外面的盒子移动
const outerBgStyles = computed(() => {
  return {
    width: `${navItemWidth.value}px`,
    height: `${navItemHeight}px`,
    transform: `
      translate(
        ${currentItemIndex.value * navItemWidth.value + navItemPadding}px,
        5px
      )
    `,
  }
})
// 2. 背景的样式，里面的盒子跳动
const bgInnerRef = ref<HTMLElement>()
// ------------------------------------data------------------------------------//

// ------------------------------------logic------------------------------------//
// 1. 获取当前路由，设置动画
function normalizePath(path: string) {
  return path.replace(/index\.html$/, '').replace(/\.html$/, '') || '/'
}

function findCurrentNavItem(path: string) {
  const normalizedPath = normalizePath(path)
  return navFilter.find(item => item.route === '/'
    ? normalizedPath === '/'
    : normalizedPath === item.route || normalizedPath.startsWith(`${item.route}/`))
}

function refreshRoute(path: string) {
  const currentRoute = findCurrentNavItem(path)
  if (currentRoute)
    refreshActiveTab(currentRoute, navFilter.indexOf(currentRoute))
  else
    startJelloHideAnimate()
}

onMounted(() => refreshRoute(route.path))

watch(() => route.path, (val) => {
  refreshRoute(val)
})

// 2. 设置当前选中的 item 的背景
function refreshActiveTab(item: typeof navFilter[0], index: number) {
  // a. 设置标题
  appTitle.value = item.route === '/' ? 'BUGg921' : `${item.label}｜BUGg921`

  // b. 设置头部动画
  currentItemIndex.value = index
  startJelloShowAnimate()
}

function startJelloShowAnimate() {
  const jello = [
    'scale3d(1, 1, 1)',
    'scale3d(1.25, 0.75, 1)',
    'scale3d(0.75, 1.25, 1)',
    'scale3d(1.15, 0.85, 1)',
    'scale3d(0.95, 1.05, 1)',
    'scale3d(1.05, 0.95, 1)',
    'scale3d(1, 1, 1)',
  ]
  const opacity = [1, 1]

  if (bgInnerRef.value) {
    const animation = bgInnerRef.value.animate(
      { transform: jello, opacity },
      { duration: 900, fill: 'forwards' },
    )
    animation.onfinish = () => {

    }
  }
}
function startJelloHideAnimate() {
  const scale = [
    'scale3d(1, 1, 1)',
    'scale3d(1.25, 0.75, 1)',
    'scale3d(0.75, 1.25, 1)',
    'scale3d(1.15, 0.85, 1)',
    'scale3d(0.95, 1.05, 1)',
    'scale3d(1.05, 0.95, 1)',
    'scale3d(0.97, 1.03, 1)',
    'scale3d(0, 0, 1)',
  ]

  const opacity = [1, 0]

  if (bgInnerRef.value) {
    const animation = bgInnerRef.value.animate(
      { transform: scale, opacity },
      { duration: 900, fill: 'forwards' },
    )
    animation.onfinish = () => {

    }
  }
}
// ------------------------------------logic------------------------------------//
</script>

<template>
  <ClientOnly>
    <div class="nav-container">
      <!-- item -->

      <div
        v-for="item in navFilter"
        :key="item.label"
      >
        <HoverCard :open-delay="0" :close-delay="0">
          <HoverCardTrigger>
            <router-link
              :to="item.route"
              replace
              class="nav-item"
              :style="{ height: `${navItemHeight}px`, width: `${navItemWidth}px` }"
            >
              {{ item.label }}
            </router-link>
          </HoverCardTrigger>
          <HoverCardContent v-if="item?.children?.length > 0" :side-offset="15" class="w-[120px]! p-[4px]!">
            <div class="flex flex-col items-center justify-start text-[14px]">
              <div v-for="it in item.children" :key="(it as any).label" class="option-item h-10 w-full flex cursor-pointer items-center justify-center">
                {{ (it as any).label }}
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <!-- bg 外层移动，内层动画 -->
      <div
        :style="outerBgStyles"
        class="pointer-events-none absolute left-0 top-0 transition-transform duration-300 ease-in-out"
      >
        <div
          ref="bgInnerRef"
          class="h-full w-full rounded-[50px] bg-[var(--nav-placeholder-bg)]"
        />
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.nav-container {
  position: relative;
  background: var(--nav-bg);
  border: var(--nav-border);
  border-radius: 23px;
  display: flex;
  font-size: 14px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  box-shadow: var(--ui-second-box-shadow);
}
.nav-item {
  position: relative;
  cursor: pointer;
  border-radius: 50px;
  -webkit-box-align: center;
  padding: 0 8px;
  transition: opacity 0.3s ease 0s;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
  user-select: none;
  color: var(--nav-text);
  mix-blend-mode: v-bind(navFilterOptionBgMode);
}

@media (max-width: 640px) {
  .nav-item {
    padding: 0;
  }
}

@media (max-width: 420px) {
  .nav-container {
    font-size: 13px;
  }
}
</style>
