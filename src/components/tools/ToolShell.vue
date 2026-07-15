<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { ToolDefinition } from '~/config/tools'

const props = defineProps<{
  tool: ToolDefinition
}>()

useHead({
  title: `${props.tool.name}｜BUGg921`,
  meta: [
    { name: 'description', content: props.tool.description },
  ],
})
</script>

<template>
  <section class="tool-page">
    <RouterLink to="/tools" class="tool-back-link">
      <Icon icon="carbon:arrow-left" />
      全部工具
    </RouterLink>

    <header class="tool-hero">
      <div class="tool-icon" :style="{ '--tool-accent': tool.accent }">
        <Icon :icon="tool.icon" />
      </div>
      <div>
        <p class="tool-kicker">
          LOCAL TOOL · 数据不会离开浏览器
        </p>
        <h1>{{ tool.name }}</h1>
        <p>{{ tool.description }}</p>
      </div>
    </header>

    <slot />

    <footer class="tool-privacy-note">
      <Icon icon="carbon:locked" />
      所有内容只在当前浏览器中处理，不会上传或保存。
    </footer>
  </section>
</template>

<style>
.tool-page {
  position: relative;
  z-index: 1;
  width: min(100%, 970px);
  margin: 0 auto;
  color: var(--text-color);
}

.tool-back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.62;
  transition:
    opacity 160ms ease,
    transform 160ms ease;
}

.tool-back-link:hover {
  opacity: 1;
  transform: translateX(-3px);
}

.tool-hero {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 22px;
}

.tool-hero h1 {
  margin: 3px 0 5px;
  font-size: clamp(28px, 4vw, 46px);
  font-weight: 900;
  letter-spacing: -0.045em;
  line-height: 1.05;
}

.tool-hero p {
  margin: 0;
  font-size: 14px;
  opacity: 0.62;
}

.tool-hero .tool-kicker {
  color: #6d5dfc;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  opacity: 1;
}

.tool-icon {
  display: grid;
  width: clamp(62px, 8vw, 84px);
  height: clamp(62px, 8vw, 84px);
  flex: none;
  place-items: center;
  border: 3px solid var(--text-color);
  border-radius: 22px;
  background: var(--tool-accent);
  color: #101114;
  box-shadow: 5px 5px 0 var(--text-color);
  font-size: clamp(28px, 4vw, 40px);
}

.tool-workspace {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.tool-panel {
  min-width: 0;
  border: 1px solid var(--card-border);
  border-radius: 18px;
  background: var(--card--bg);
  padding: clamp(16px, 2.5vw, 24px);
  box-shadow: var(--ui-main-box-shadow);
}

.tool-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.tool-panel-title {
  font-size: 14px;
  font-weight: 900;
}

.tool-panel-meta {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  opacity: 0.48;
}

.tool-textarea,
.tool-input {
  width: 100%;
  border: 1px solid var(--input-second-color);
  border-radius: 12px;
  outline: none;
  background: var(--input-primary-color);
  color: var(--text-color);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 13px;
  line-height: 1.65;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.tool-textarea {
  min-height: 330px;
  resize: vertical;
  padding: 14px;
}

.tool-input {
  min-height: 52px;
  padding: 0 15px;
  font-size: 16px;
}

.tool-textarea:focus,
.tool-input:focus {
  border-color: #6d5dfc;
  box-shadow: 0 0 0 3px rgb(109 93 252 / 16%);
}

.tool-textarea[readonly] {
  opacity: 0.84;
}

.tool-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.tool-button {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 1px solid var(--card-border);
  border-radius: 10px;
  background: var(--ui-main-bg);
  color: var(--ui-main-text);
  padding: 0 14px;
  font-size: 13px;
  font-weight: 800;
  box-shadow: var(--ui-button-shadow);
  transition:
    transform 140ms ease,
    box-shadow 140ms ease;
}

.tool-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--ui-button-hover-shadow);
}

.tool-button:disabled {
  cursor: not-allowed;
  opacity: 0.42;
}

.tool-button.primary {
  border-color: transparent;
  background: #111318;
  color: #fff;
}

.dark .tool-button.primary {
  background: #f4f5f7;
  color: #111318;
}

.tool-error {
  margin-top: 10px;
  border-radius: 10px;
  background: rgb(239 68 68 / 12%);
  padding: 10px 12px;
  color: #dc2626;
  font-size: 12px;
  font-weight: 700;
}

.dark .tool-error {
  color: #fca5a5;
}

.tool-tabs {
  display: inline-flex;
  gap: 4px;
  border: 1px solid var(--card-border);
  border-radius: 12px;
  background: var(--input-primary-color);
  padding: 4px;
}

.tool-tab {
  min-height: 34px;
  border-radius: 8px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 800;
  opacity: 0.58;
}

.tool-tab.active {
  background: var(--text-color);
  color: var(--background);
  opacity: 1;
}

.tool-privacy-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
  text-align: center;
  font-size: 12px;
  opacity: 0.5;
}

@media (max-width: 720px) {
  .tool-workspace {
    grid-template-columns: 1fr;
  }

  .tool-hero {
    align-items: flex-start;
  }

  .tool-textarea {
    min-height: 240px;
  }
}

@media (max-width: 480px) {
  .tool-hero {
    gap: 14px;
  }

  .tool-icon {
    border-width: 2px;
    border-radius: 18px;
    box-shadow: 3px 3px 0 var(--text-color);
  }

  .tool-kicker {
    display: none;
  }
}
</style>
