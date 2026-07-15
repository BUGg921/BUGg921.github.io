<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { TOOLS } from '~/config/tools'
</script>

<template>
  <RouterLink
    to="/tools"
    title="查看开发者工具"
    class="pointer-events-auto h-full w-full flex flex-col items-center justify-center gap-3 rounded-[10px] bg-[#d9ff68] text-center text-black transition-transform hover:scale-[0.98]"
  >
    <Icon icon="fluent-emoji:toolbox" class="h-16 w-16" />
    <div class="flex flex-col gap-1">
      <span class="text-sm font-black">开发者工具箱</span>
      <span class="text-[10px] font-bold opacity-55">{{ TOOLS.length }} 个工具已上线</span>
    </div>
  </RouterLink>
</template>
