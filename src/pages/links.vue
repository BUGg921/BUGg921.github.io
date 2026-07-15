<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { LINKS, LINK_CATEGORIES } from '~/config/links'

useHead({
  title: '常用链接｜BUGg921',
  meta: [
    { name: 'description', content: 'BUGg921 常用的网站、开发学习资源与个人空间导航。' },
  ],
})

const query = ref('')

const normalizedQuery = computed(() => query.value.trim().toLocaleLowerCase())

const filteredLinks = computed(() => {
  if (!normalizedQuery.value)
    return LINKS

  return LINKS.filter((link) => {
    const searchableText = [
      link.name,
      link.description,
      link.displayUrl,
      ...link.tags,
    ].join(' ').toLocaleLowerCase()

    return searchableText.includes(normalizedQuery.value)
  })
})

const visibleCategories = computed(() => LINK_CATEGORIES.map(category => ({
  ...category,
  links: filteredLinks.value.filter(link => link.category === category.id),
})).filter(category => category.links.length > 0))

function clearSearch() {
  query.value = ''
}
</script>

<template>
  <section class="links-page">
    <header class="links-hero">
      <div class="links-hero-topline">
        <span>BOOKMARKS / DAILY STACK</span>
        <span>{{ LINKS.length.toString().padStart(2, '0') }} LINKS</span>
      </div>

      <div class="links-title-row">
        <div>
          <p>BUGg921 · LINK DIRECTORY</p>
          <h1>常用链接，<br><span>集中放在这里。</span></h1>
        </div>
        <p class="links-intro">
          开发学习、日常使用和我的公开空间。减少翻找书签的时间，把常去的地方整理成一张清晰的地图。
        </p>
      </div>

      <label class="links-search">
        <Icon icon="carbon:search" aria-hidden="true" />
        <input
          v-model="query"
          type="search"
          placeholder="搜索名称、描述或标签"
          autocomplete="off"
          @keydown.esc="clearSearch"
        >
        <button v-if="query" type="button" aria-label="清空搜索" @click="clearSearch">
          <Icon icon="carbon:close" />
        </button>
        <span v-else>PRESS / TO SEARCH</span>
      </label>
    </header>

    <div class="links-result-status" aria-live="polite">
      <span>{{ normalizedQuery ? `找到 ${filteredLinks.length} 个链接` : '全部链接' }}</span>
      <span>{{ normalizedQuery || 'CURATED BY BUGg921' }}</span>
    </div>

    <div v-if="visibleCategories.length" class="links-sections">
      <section
        v-for="(category, categoryIndex) in visibleCategories"
        :key="category.id"
        class="links-section"
        :aria-labelledby="`links-category-${category.id}`"
      >
        <header class="links-section-heading">
          <span>0{{ categoryIndex + 1 }}</span>
          <div>
            <p>{{ category.label }}</p>
            <h2 :id="`links-category-${category.id}`">
              {{ category.name }}
            </h2>
          </div>
          <p>{{ category.description }}</p>
          <strong>{{ category.links.length.toString().padStart(2, '0') }}</strong>
        </header>

        <div class="links-grid">
          <a
            v-for="link in category.links"
            :key="link.id"
            :href="link.url"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noreferrer' : undefined"
            class="link-card"
            :style="{ '--accent': link.accent }"
          >
            <span class="link-card-topline">
              <span>{{ link.displayUrl }}</span>
              <Icon icon="carbon:arrow-up-right" aria-hidden="true" />
            </span>

            <span class="link-card-icon">
              <Icon :icon="link.icon" aria-hidden="true" />
            </span>

            <span class="link-card-copy">
              <strong>{{ link.name }}</strong>
              <span>{{ link.description }}</span>
            </span>

            <span class="link-card-tags">
              <span v-for="tag in link.tags" :key="tag">{{ tag }}</span>
            </span>
          </a>
        </div>
      </section>
    </div>

    <div v-else class="links-empty">
      <Icon icon="carbon:search" aria-hidden="true" />
      <h2>没有找到匹配的链接</h2>
      <p>换一个关键词，或者清空搜索查看全部内容。</p>
      <button type="button" @click="clearSearch">
        查看全部链接
      </button>
    </div>
  </section>
</template>

<style scoped>
.links-page {
  position: relative;
  z-index: 1;
  width: min(100%, 970px);
  margin: 0 auto;
}

.links-hero {
  overflow: hidden;
  border: 1px solid var(--card-border);
  border-radius: 18px;
  background: linear-gradient(rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    var(--card--bg);
  background-size: 24px 24px;
  padding: clamp(24px, 5vw, 52px);
  box-shadow: var(--ui-main-box-shadow);
}

.links-hero-topline,
.links-title-row > div > p,
.links-result-status,
.links-section-heading > span,
.links-section-heading > div > p,
.link-card-topline,
.link-card-tags,
.links-search > span {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.links-hero-topline,
.links-result-status,
.link-card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.links-hero-topline {
  color: #8b949e;
}

.links-title-row {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.65fr);
  align-items: end;
  gap: clamp(24px, 6vw, 72px);
  margin-top: clamp(52px, 9vw, 96px);
}

.links-title-row > div > p {
  margin: 0 0 12px;
  color: #8b949e;
}

.links-title-row h1 {
  margin: 0;
  font-size: clamp(42px, 8vw, 82px);
  font-weight: 950;
  letter-spacing: -0.07em;
  line-height: 0.92;
}

.links-title-row h1 span {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--text-color);
}

.links-intro {
  margin: 0;
  font-size: 13px;
  line-height: 1.8;
  opacity: 0.58;
}

.links-search {
  display: grid;
  grid-template-columns: 22px 1fr auto;
  align-items: center;
  gap: 10px;
  margin-top: clamp(34px, 6vw, 58px);
  border: 1px solid #30363d;
  border-radius: 12px;
  background: #0d1117;
  color: #e6edf3;
  padding: 5px 6px 5px 14px;
  box-shadow: 3px 3px 0 #010409;
}

.links-search > svg {
  width: 18px;
  height: 18px;
  color: #8b949e;
}

.links-search input {
  min-width: 0;
  height: 44px;
  border: 0;
  outline: 0;
  background: transparent;
  color: #e6edf3;
  font-size: 14px;
}

.links-search input::placeholder {
  color: #6e7681;
}

.links-search button {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid #30363d;
  border-radius: 8px;
  background: #161b22;
  color: #e6edf3;
  cursor: pointer;
}

.links-search > span {
  color: #6e7681;
  padding-right: 9px;
  white-space: nowrap;
}

.links-result-status {
  margin: 12px 0;
  border: 1px dashed var(--card-border);
  border-radius: 12px;
  color: #8b949e;
  padding: 11px 14px;
  letter-spacing: 0.04em;
}

.links-result-status span:last-child {
  overflow: hidden;
  max-width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.links-sections {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.links-section {
  border: 1px solid var(--card-border);
  border-radius: 18px;
  background: var(--card--bg);
  padding: clamp(18px, 3vw, 28px);
  box-shadow: var(--ui-main-box-shadow);
}

.links-section-heading {
  display: grid;
  grid-template-columns: 34px minmax(150px, 0.7fr) minmax(220px, 1fr) 32px;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid var(--card-border);
  padding: 0 2px 20px;
}

.links-section-heading > span,
.links-section-heading > div > p {
  color: #8b949e;
}

.links-section-heading > div > p {
  margin: 0 0 3px;
}

.links-section-heading h2 {
  margin: 0;
  font-size: clamp(24px, 4vw, 34px);
  font-weight: 950;
  letter-spacing: -0.055em;
  line-height: 1;
}

.links-section-heading > p {
  margin: 0;
  font-size: 12px;
  line-height: 1.6;
  opacity: 0.52;
}

.links-section-heading > strong {
  display: grid;
  width: 32px;
  height: 28px;
  place-items: center;
  border: 1px solid #30363d;
  border-radius: 7px;
  color: #8b949e;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 20px;
}

.link-card {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 270px;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #30363d;
  border-radius: 14px;
  background: linear-gradient(rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    #0d1117;
  background-size: 18px 18px;
  color: #e6edf3;
  padding: 16px;
  text-decoration: none;
  transition:
    border-color 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.link-card::before {
  position: absolute;
  top: -45px;
  right: -45px;
  z-index: -1;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: var(--accent);
  content: '';
  opacity: 0.22;
  filter: blur(4px);
}

.link-card:hover {
  border-color: #6e7681;
  box-shadow: 0 16px 36px rgb(1 4 9 / 28%);
  transform: translateY(-4px);
}

.link-card-topline {
  min-width: 0;
  gap: 10px;
  color: #8b949e;
  letter-spacing: 0.02em;
}

.link-card-topline > span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link-card-topline svg {
  width: 15px;
  height: 15px;
  flex: none;
  color: #e6edf3;
  transition: transform 180ms ease;
}

.link-card:hover .link-card-topline svg {
  transform: translate(2px, -2px);
}

.link-card-icon {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border: 1px solid #6e7681;
  border-radius: 13px;
  background: #161b22;
  color: var(--accent);
  box-shadow: 3px 3px 0 #010409;
  font-size: 25px;
}

.link-card-copy {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-card-copy strong {
  font-size: 24px;
  font-weight: 950;
  letter-spacing: -0.05em;
  line-height: 1;
}

.link-card-copy > span {
  min-height: 42px;
  font-size: 12px;
  line-height: 1.65;
  opacity: 0.56;
}

.link-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 12px;
  border-top: 1px solid rgb(139 148 158 / 18%);
  padding-top: 10px;
  letter-spacing: 0;
}

.link-card-tags > span {
  border: 1px solid rgb(139 148 158 / 25%);
  border-radius: 999px;
  color: #8b949e;
  padding: 4px 7px;
}

.links-empty {
  display: grid;
  min-height: 360px;
  place-items: center;
  border: 1px dashed #6e7681;
  border-radius: 18px;
  padding: 40px 20px;
  text-align: center;
}

.links-empty > svg {
  width: 44px;
  height: 44px;
  color: #8b949e;
}

.links-empty h2 {
  margin: 16px 0 0;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.links-empty p {
  margin: 8px 0 0;
  font-size: 13px;
  opacity: 0.55;
}

.links-empty button {
  margin-top: 22px;
  border: 1px solid #6e7681;
  border-radius: 9px;
  background: #161b22;
  color: #e6edf3;
  cursor: pointer;
  padding: 10px 14px;
  font-size: 12px;
  font-weight: 800;
}

@media (max-width: 800px) {
  .links-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .links-title-row {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .links-section-heading {
    grid-template-columns: 28px 1fr 32px;
  }

  .links-section-heading > p {
    grid-column: 2 / -1;
  }
}

@media (max-width: 520px) {
  .links-hero,
  .links-section,
  .links-empty {
    border-radius: 14px;
  }

  .links-search > span {
    display: none;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }

  .link-card {
    min-height: 240px;
  }

  .links-result-status span:last-child {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .link-card,
  .link-card-topline svg {
    transition: none;
  }
}
</style>
