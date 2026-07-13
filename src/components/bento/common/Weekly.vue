<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <ShadowCard class="blog-card !p-[5px]">
    <RouterLink to="/blog" class="pointer-events-auto h-full w-full flex flex-col justify-between p-5 text-[var(--text-color)]">
      <div class="flex items-start justify-between">
        <span class="rounded-full bg-black px-3 py-1 text-xs text-white font-bold dark:bg-white dark:text-black">BLOG</span>
        <Icon class="h-5 w-5" icon="carbon-arrow-up-right" />
      </div>
      <div>
        <h2 class="text-2xl font-black leading-tight">
          从第一篇开始，<br>慢慢写成自己的数字花园。
        </h2>
        <p class="mt-2 text-sm opacity-55">
          技术、工具、学习过程与日常想法
        </p>
      </div>
    </RouterLink>
  </ShadowCard>
</template>

<style scoped>
.blog-card {
  background:
    radial-gradient(circle at 85% 20%, rgb(255 196 102 / 65%), transparent 32%),
    var(--card--bg);
}
</style>
