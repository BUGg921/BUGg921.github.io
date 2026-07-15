<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { TOOLS } from '~/config/tools'

useHead({
  title: '工具｜BUGg921',
  meta: [
    { name: 'description', content: 'BUGg921 的开发者工具箱：JSON、时间戳与编解码工具。' },
  ],
})
</script>

<template>
  <section class="tools-index">
    <header class="tools-index-hero">
      <p>BUGg921 · LOCAL TOOLBOX</p>
      <h1>一些真正顺手的<br><span>开发者小工具。</span></h1>
      <div class="tools-index-intro">
        <p>无需登录，没有上传。所有内容都只在你的浏览器中处理。</p>
        <span>{{ TOOLS.length }} 个工具已上线</span>
      </div>
    </header>

    <div class="tools-grid">
      <RouterLink
        v-for="(tool, index) in TOOLS"
        :key="tool.id"
        :to="tool.route"
        class="tools-card"
        :style="{ '--accent': tool.accent }"
      >
        <div class="tools-card-top">
          <span class="tools-card-index">0{{ index + 1 }}</span>
          <span class="tools-card-icon"><Icon :icon="tool.icon" /></span>
        </div>
        <div>
          <h2>{{ tool.shortName }}</h2>
          <p>{{ tool.description }}</p>
          <div class="tools-tags">
            <span v-for="tag in tool.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <span class="tools-card-link">
          打开工具
          <Icon icon="carbon:arrow-up-right" />
        </span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.tools-index {
  position: relative;
  z-index: 1;
  width: min(100%, 970px);
  margin: 0 auto;
}

.tools-index-hero {
  margin-bottom: 28px;
  border-bottom: 1px solid var(--card-border);
  padding: 0 4px 26px;
}

.tools-index-hero > p {
  margin: 0 0 10px;
  color: #6d5dfc;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.tools-index-hero h1 {
  margin: 0;
  font-size: clamp(38px, 7vw, 76px);
  font-weight: 950;
  letter-spacing: -0.065em;
  line-height: 0.98;
}

.tools-index-hero h1 span {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--text-color);
}

.tools-index-intro {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-top: 22px;
  font-size: 13px;
}

.tools-index-intro p {
  max-width: 480px;
  margin: 0;
  opacity: 0.56;
}

.tools-index-intro span {
  border: 1px solid var(--card-border);
  border-radius: 999px;
  padding: 7px 11px;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 800;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.tools-card {
  position: relative;
  display: flex;
  min-height: 360px;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid var(--card-border);
  border-radius: 18px;
  background: var(--card--bg);
  padding: 20px;
  color: var(--text-color);
  box-shadow: var(--ui-main-box-shadow);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.tools-card::before {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: var(--accent);
  content: '';
  opacity: 0.45;
  filter: blur(2px);
}

.tools-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 50px rgb(15 23 42 / 12%);
}

.tools-card-top,
.tools-card-link {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tools-card-index {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  font-weight: 800;
  opacity: 0.42;
}

.tools-card-icon {
  display: grid;
  width: 54px;
  height: 54px;
  place-items: center;
  border: 2px solid #111318;
  border-radius: 16px;
  background: var(--accent);
  color: #111318;
  box-shadow: 3px 3px 0 #111318;
  font-size: 25px;
}

.tools-card h2 {
  position: relative;
  z-index: 1;
  margin: 0 0 10px;
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 950;
  letter-spacing: -0.06em;
}

.tools-card p {
  position: relative;
  z-index: 1;
  min-height: 66px;
  margin: 0;
  font-size: 13px;
  line-height: 1.65;
  opacity: 0.58;
}

.tools-tags {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 14px;
}

.tools-tags span {
  border-radius: 999px;
  background: var(--accent);
  color: #111318;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 800;
}

.tools-card-link {
  margin-top: 20px;
  border-top: 1px solid var(--card-border);
  padding-top: 14px;
  font-size: 12px;
  font-weight: 900;
}

@media (max-width: 800px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }

  .tools-card {
    min-height: 280px;
  }
}

@media (max-width: 520px) {
  .tools-index-intro {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
