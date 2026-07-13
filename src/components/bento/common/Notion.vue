<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <RouterLink
    to="/project"
    title="查看项目与工具"
    class="pointer-events-auto h-full w-full flex flex-col items-center justify-center gap-3 rounded-[10px] bg-[#d9ff68] text-center text-black transition-transform hover:scale-[0.98]"
  >
    <Icon icon="fluent-emoji:toolbox" class="h-16 w-16" />
    <span class="text-sm font-black">工具正在生长</span>
  </RouterLink>
</template>
