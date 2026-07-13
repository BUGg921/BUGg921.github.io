<script lang="ts">
import { bentoCommonComponentsCfg, bentoCustomComponentsCfg } from '~/config/param'
import Profile from '~/components/bento/common/Profile.vue'
import Weekly from '~/components/bento/common/Weekly.vue'
import Dark from '~/components/bento/common/Dark.vue'
import Notion from '~/components/bento/common/Notion.vue'
import CountDown from '~/components/bento/common/CountDown.vue'
import PageTransition from '~/components/bento/common/PageTransition.vue'
import PlaneView from '~/components/bento/common/PlaneView.vue'
import DragMotion from '~/components/bento/common/DragMotion.vue'
import Cover from '~/components/bento/custom/Cover.vue'
import Sticker8 from '~/components/bento/custom/Sticker8.vue'
import StrokeText from '~/components/bento/custom/StrokeText.vue'
import GitHubSticker from '~/components/bento/custom/GitHubSticker.vue'

const commonComponentMap = {
  Profile,
  Weekly,
  Dark,
  Notion,
  CountDown,
  PageTransition,
  PlaneView,
  DragMotion,
}

const customComponentMap = {
  Cover,
  Sticker8,
  StrokeText,
  GitHubSticker,
}

function getCommonComponents() {
  return bentoCommonComponentsCfg.map(item => ({
    ...item,
    component: markRaw(commonComponentMap[item.id as keyof typeof commonComponentMap]),
  }))
}

function getCustomComponents() {
  return bentoCustomComponentsCfg.map(item => ({
    ...item,
    component: markRaw(customComponentMap[item.id as keyof typeof customComponentMap]),
  }))
}
</script>

<script setup lang="ts">
// eslint-disable-next-line import/first, import/order
import { Bento } from 'v3-bento'

const commonComponents = getCommonComponents()
const customComponents = getCustomComponents()

const bentoCellsInDesktop = [
  ...commonComponents,
  ...customComponents,
]

const bentoCellsInMobile = bentoCellsInDesktop

function print(_val: string, _e: any) {
  // console.log(val, e)
}

const maximumCells = ref(4)
const size = ref(180)
const gap = ref(10)
const containerRef = ref(null)

const isMobileRef = ref(typeof navigator !== 'undefined' && /iPhone|iPod|Android|Mobile/i.test(navigator.userAgent))
const disabled = ref(isMobileRef.value)
const viewportWidth = typeof document === 'undefined' ? 1200 : document.body.clientWidth
const bentoCells = ref(viewportWidth <= 768 ? bentoCellsInMobile : bentoCellsInDesktop)
const mobileTouchAction = computed(() => isMobileRef.value ? 'unset' : 'none')

if (viewportWidth <= 768) {
  // 如果是宽度比较小
  maximumCells.value = 2
  size.value = (viewportWidth - 50) / 2
}
else {
  maximumCells.value = 4
}

const { width } = useWindowSize()
watch(width, () => {
  // 这里有点小闪动，是因为整体 mediaQuery 的原因
  if (width.value < 380) {
    size.value = Math.max(width.value / 2 - gap.value, 100)
    maximumCells.value = 2
  }
  else if (Math.ceil(width.value / (size.value + gap.value)) <= 6) {
    maximumCells.value = Math.floor(width.value / (size.value + gap.value))
  }
  else { maximumCells.value = 6 }
}, {
  immediate: true,
})
</script>

<template>
  <div
    class="text-xl text-gray-400 flex justify-center gap-3"
  >
    <div
      ref="containerRef"
      class="grid mx-auto w-full select-none place-items-center"
    >
      <client-only>
        <Bento
          :bento-cells="bentoCells"
          class="bento-container"
          :size="size"
          :gap="gap"
          :disabled="disabled"
          :maximum-cells="maximumCells"
          @drag-start="print('drag-start', $event)"
          @drag-end="print('drag-end', $event)"
        >
          <template #bento-item-placeholder>
            <div class="h-full w-full rounded-[12px] bg-current opacity-10" />
          </template>
        </Bento>
      </client-only>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.bento-container {
  margin-left: auto;
  margin-right: auto;
}
:deep(.bento-item-placeholder) {
  border-radius: 12px !important;
  background-color: var(--card--placeholder-bg) !important;
}
:deep(.bento-item) {
  touch-action: v-bind(mobileTouchAction);
}
</style>
