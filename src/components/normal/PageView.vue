<script setup lang="ts">
const { data } = await useFetch<{ startAt: number, pageview: number }>('/api/pageview')

const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <div text-gray:80>
    <span font-500 text-gray>{{ data?.pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
  </div>
</template>
