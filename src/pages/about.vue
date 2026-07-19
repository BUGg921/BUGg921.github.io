<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ABOUT_PROFILE, BUILD_PRINCIPLES, NOW_FOCUS, TECH_STACKS } from '~/config/about'

const profileDescription = '关于 BUGg921：正在制作的网页工具、当前关注的事情、技术栈与做事方式。'

useHead({
  title: '关于我 / Now｜BUGg921',
  meta: [
    { name: 'description', content: profileDescription },
    { property: 'og:title', content: '关于我 / Now｜BUGg921' },
    { property: 'og:description', content: profileDescription },
    { property: 'og:type', content: 'profile' },
    { property: 'og:url', content: 'https://bugg921.github.io/about' },
  ],
  link: [
    { rel: 'canonical', href: 'https://bugg921.github.io/about' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        'mainEntity': {
          '@type': 'Person',
          'name': ABOUT_PROFILE.handle,
          'alternateName': ABOUT_PROFILE.handle,
          'url': 'https://bugg921.github.io/about',
          'description': ABOUT_PROFILE.summary,
          'sameAs': [ABOUT_PROFILE.githubUrl],
        },
      }),
    },
  ],
})
</script>

<template>
  <section class="about-page">
    <header class="about-hero">
      <div class="about-topline">
        <span>ABOUT / NOW</span>
        <span class="about-status"><i /> {{ ABOUT_PROFILE.status }}</span>
      </div>

      <div class="about-hero-content">
        <div>
          <p>{{ ABOUT_PROFILE.label }}</p>
          <h1>把复杂的事，<br><span>做成简单能用的东西。</span></h1>
        </div>
        <div class="about-hero-note">
          <span>LAST UPDATED</span>
          <strong>{{ ABOUT_PROFILE.updatedAt }}</strong>
          <p>这是一个会继续变化的页面，用来记录此刻的我正在关注什么。</p>
        </div>
      </div>

      <div class="about-hero-footer">
        <span>PERSONAL LAB</span>
        <span>LOCAL-FIRST TOOLS</span>
        <span>PUBLIC BUILDING</span>
      </div>
    </header>

    <div class="about-intro-grid">
      <article class="identity-card">
        <div class="identity-card-topline">
          <span>PROFILE / 001</span>
          <Icon icon="carbon:circle-filled" aria-hidden="true" />
        </div>

        <div class="identity-avatar" aria-hidden="true">
          <Icon icon="fluent-emoji:technologist" />
        </div>

        <div>
          <p>HELLO, I AM</p>
          <h2>{{ ABOUT_PROFILE.handle }}</h2>
          <span>持续学习，也持续创造。</span>
        </div>
      </article>

      <article class="story-card">
        <div class="section-label">
          <span>01</span>
          <span>ABOUT ME</span>
        </div>
        <h2>你好，我是 BUGg921。</h2>
        <p>{{ ABOUT_PROFILE.summary }}</p>
        <p>{{ ABOUT_PROFILE.detail }}</p>
        <div class="story-links">
          <RouterLink to="/project">
            查看项目
            <Icon icon="carbon:arrow-up-right" />
          </RouterLink>
          <a :href="ABOUT_PROFILE.githubUrl" target="_blank" rel="noreferrer">
            GitHub
            <Icon icon="carbon:logo-github" />
          </a>
        </div>
      </article>
    </div>

    <section class="now-section" aria-labelledby="now-title">
      <header class="section-heading">
        <div>
          <p>NOW / CURRENT FOCUS</p>
          <h2 id="now-title">
            此刻正在做的事
          </h2>
        </div>
        <p>不是完整履历，只记录现在真正投入注意力的方向。</p>
      </header>

      <div class="focus-grid">
        <article
          v-for="focus in NOW_FOCUS"
          :key="focus.id"
          class="focus-card"
          :style="{ '--accent': focus.accent }"
        >
          <div class="focus-card-topline">
            <span>{{ focus.index }}</span>
            <Icon :icon="focus.icon" aria-hidden="true" />
          </div>
          <div>
            <h3>{{ focus.title }}</h3>
            <p>{{ focus.description }}</p>
          </div>
          <span class="focus-state"><i /> IN PROGRESS</span>
        </article>
      </div>
    </section>

    <div class="about-details-grid">
      <section class="stack-section" aria-labelledby="stack-title">
        <div class="section-label">
          <span>02</span>
          <span>STACK / WORKFLOW</span>
        </div>
        <h2 id="stack-title">
          正在使用的技术
        </h2>
        <div class="stack-groups">
          <div v-for="stack in TECH_STACKS" :key="stack.name" class="stack-group">
            <strong>{{ stack.name }}</strong>
            <div>
              <span v-for="item in stack.items" :key="item">{{ item }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="principles-section" aria-labelledby="principles-title">
        <div class="section-label">
          <span>03</span>
          <span>HOW I BUILD</span>
        </div>
        <h2 id="principles-title">
          我在意的几件事
        </h2>
        <ol>
          <li v-for="(principle, index) in BUILD_PRINCIPLES" :key="principle.title">
            <span>0{{ index + 1 }}</span>
            <div>
              <strong>{{ principle.title }}</strong>
              <p>{{ principle.description }}</p>
            </div>
            <Icon icon="carbon:checkmark-outline" aria-hidden="true" />
          </li>
        </ol>
      </section>
    </div>

    <section class="about-contact" aria-labelledby="contact-title">
      <div>
        <p>CONTACT / NEXT STEP</p>
        <h2 id="contact-title">
          想聊一个想法，<br>或者一起做点东西？
        </h2>
      </div>
      <p>可以先看看我的服务、工具和公开项目，再选择合适的方式联系我。</p>
      <div class="contact-actions">
        <RouterLink to="/services" class="contact-primary">
          查看服务
          <Icon icon="carbon:arrow-up-right" />
        </RouterLink>
        <RouterLink to="/links" class="contact-secondary">
          常用链接
          <Icon icon="carbon:bookmark" />
        </RouterLink>
      </div>
    </section>
  </section>
</template>

<style scoped>
.about-page {
  position: relative;
  z-index: 1;
  width: min(100%, 970px);
  margin: 0 auto;
}

.about-hero,
.identity-card,
.story-card,
.now-section,
.stack-section,
.principles-section,
.about-contact {
  border: 1px solid var(--card-border);
  border-radius: 18px;
  background: var(--card--bg);
  box-shadow: var(--ui-main-box-shadow);
}

.about-hero {
  overflow: hidden;
  background: linear-gradient(rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    var(--card--bg);
  background-size: 24px 24px;
  padding: clamp(24px, 5vw, 52px);
}

.about-topline,
.about-status,
.about-hero-content > div:first-child > p,
.about-hero-note,
.about-hero-footer,
.identity-card-topline,
.identity-card > div:last-child > p,
.section-label,
.section-heading > div > p,
.focus-card-topline,
.focus-state,
.about-contact > div:first-child > p {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.about-topline,
.about-status,
.about-hero-footer,
.identity-card-topline,
.focus-card-topline,
.focus-state {
  display: flex;
  align-items: center;
}

.about-topline,
.about-hero-footer,
.identity-card-topline,
.focus-card-topline {
  justify-content: space-between;
}

.about-topline,
.about-hero-footer,
.identity-card-topline,
.section-label,
.section-heading > div > p,
.focus-card-topline,
.about-contact > div:first-child > p {
  color: #8b949e;
}

.about-status {
  gap: 7px;
  color: #a7f3d0;
}

.about-status i,
.focus-state i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3fb950;
  box-shadow: 0 0 9px rgb(63 185 80 / 55%);
}

.about-hero-content {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(220px, 0.6fr);
  align-items: end;
  gap: clamp(28px, 7vw, 84px);
  margin-top: clamp(58px, 10vw, 112px);
}

.about-hero-content > div:first-child > p {
  margin: 0 0 12px;
  color: #8b949e;
}

.about-hero h1 {
  margin: 0;
  font-size: clamp(42px, 8vw, 82px);
  font-weight: 950;
  letter-spacing: -0.07em;
  line-height: 0.92;
}

.about-hero h1 span {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--text-color);
}

.about-hero-note {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 6px 16px;
  border-left: 1px solid var(--card-border);
  color: #8b949e;
  padding-left: 18px;
}

.about-hero-note strong {
  color: var(--text-color);
  font-size: 18px;
  letter-spacing: -0.04em;
}

.about-hero-note p {
  grid-column: 1 / -1;
  margin: 12px 0 0;
  font-family: var(--main-text-font-family);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.7;
  opacity: 0.72;
}

.about-hero-footer {
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: clamp(42px, 7vw, 72px);
  border-top: 1px solid var(--card-border);
  padding-top: 16px;
}

.about-intro-grid {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
  gap: 12px;
  margin-top: 12px;
}

.identity-card,
.story-card,
.stack-section,
.principles-section {
  padding: clamp(20px, 4vw, 34px);
}

.identity-card {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 410px;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    #0d1117;
  background-size: 18px 18px;
  color: #e6edf3;
}

.identity-card::before {
  position: absolute;
  right: -80px;
  bottom: -80px;
  z-index: -1;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background: #6d5dfc;
  content: '';
  opacity: 0.18;
  filter: blur(12px);
}

.identity-card-topline > svg {
  width: 9px;
  height: 9px;
  color: #3fb950;
}

.identity-avatar {
  display: grid;
  width: 112px;
  height: 112px;
  place-items: center;
  border: 1px solid #6e7681;
  border-radius: 28px;
  background: #161b22;
  box-shadow: 6px 6px 0 #010409;
  font-size: 88px;
}

.identity-avatar svg {
  width: 92%;
  height: 92%;
}

.identity-card > div:last-child > p {
  margin: 0 0 5px;
  color: #8b949e;
}

.identity-card h2 {
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: clamp(42px, 6vw, 62px);
  font-weight: 950;
  letter-spacing: -0.075em;
  line-height: 0.95;
}

.identity-card > div:last-child > span {
  display: block;
  margin-top: 9px;
  color: #8b949e;
  font-size: 12px;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-label span:first-child {
  display: grid;
  width: 26px;
  height: 22px;
  place-items: center;
  border: 1px solid var(--card-border);
  border-radius: 6px;
}

.story-card {
  display: flex;
  min-height: 410px;
  flex-direction: column;
  justify-content: center;
}

.story-card h2,
.stack-section h2,
.principles-section h2 {
  margin: 28px 0 20px;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 950;
  letter-spacing: -0.06em;
  line-height: 1;
}

.story-card > p {
  max-width: 610px;
  margin: 0 0 14px;
  font-size: 14px;
  line-height: 1.9;
  opacity: 0.64;
}

.story-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.story-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--card-border);
  border-radius: 9px;
  color: var(--text-color);
  padding: 9px 12px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 800;
}

.story-links svg {
  width: 15px;
  height: 15px;
}

.now-section {
  margin-top: 12px;
  padding: clamp(20px, 4vw, 34px);
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid var(--card-border);
  padding-bottom: 22px;
}

.section-heading > div > p {
  margin: 0 0 8px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 950;
  letter-spacing: -0.06em;
  line-height: 1;
}

.section-heading > p {
  max-width: 330px;
  margin: 0;
  font-size: 12px;
  line-height: 1.65;
  opacity: 0.52;
}

.focus-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 20px;
}

.focus-card {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 300px;
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
  padding: 18px;
}

.focus-card::before {
  position: absolute;
  top: -55px;
  right: -55px;
  z-index: -1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--accent);
  content: '';
  opacity: 0.2;
  filter: blur(5px);
}

.focus-card-topline > svg {
  width: 38px;
  height: 38px;
  color: var(--accent);
}

.focus-card h3 {
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: 950;
  letter-spacing: -0.05em;
  line-height: 1.05;
}

.focus-card p {
  margin: 0;
  font-size: 12px;
  line-height: 1.7;
  opacity: 0.57;
}

.focus-state {
  gap: 7px;
  border-top: 1px solid rgb(139 148 158 / 20%);
  color: #8b949e;
  padding-top: 12px;
  letter-spacing: 0.03em;
}

.focus-state i {
  width: 6px;
  height: 6px;
}

.about-details-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.stack-groups {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.stack-group {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 12px;
  border-top: 1px solid var(--card-border);
  padding-top: 14px;
}

.stack-group strong {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  opacity: 0.48;
}

.stack-group > div {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.stack-group span {
  border: 1px solid var(--card-border);
  border-radius: 999px;
  padding: 5px 8px;
  font-size: 10px;
  font-weight: 700;
}

.principles-section ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

.principles-section li {
  display: grid;
  grid-template-columns: 28px 1fr 20px;
  gap: 12px;
  border-top: 1px solid var(--card-border);
  padding: 14px 0;
}

.principles-section li > span {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  opacity: 0.45;
}

.principles-section li strong {
  font-size: 13px;
}

.principles-section li p {
  margin: 5px 0 0;
  font-size: 11px;
  line-height: 1.6;
  opacity: 0.52;
}

.principles-section li svg {
  width: 18px;
  height: 18px;
  color: #3fb950;
}

.about-contact {
  display: grid;
  grid-template-columns: minmax(260px, 1fr) minmax(220px, 0.72fr) auto;
  align-items: end;
  gap: clamp(24px, 5vw, 54px);
  margin-top: 12px;
  padding: clamp(24px, 5vw, 46px);
}

.about-contact > div:first-child > p {
  margin: 0 0 10px;
}

.about-contact h2 {
  margin: 0;
  font-size: clamp(30px, 5vw, 46px);
  font-weight: 950;
  letter-spacing: -0.06em;
  line-height: 1;
}

.about-contact > p {
  margin: 0;
  font-size: 12px;
  line-height: 1.7;
  opacity: 0.55;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-actions a {
  display: flex;
  min-width: 130px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 9px;
  padding: 10px 12px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 800;
}

.contact-actions svg {
  width: 16px;
  height: 16px;
}

.contact-primary {
  background: #e6edf3;
  color: #0d1117;
}

.contact-secondary {
  border: 1px solid var(--card-border);
  color: var(--text-color);
}

@media (max-width: 800px) {
  .focus-grid {
    grid-template-columns: 1fr;
  }

  .focus-card {
    min-height: 250px;
  }

  .about-contact {
    grid-template-columns: 1fr 1fr;
  }

  .contact-actions {
    grid-column: 1 / -1;
    flex-direction: row;
  }
}

@media (max-width: 680px) {
  .about-hero-content,
  .about-intro-grid,
  .about-details-grid,
  .about-contact {
    grid-template-columns: 1fr;
  }

  .about-hero-content {
    align-items: start;
  }

  .about-hero-note {
    border-top: 1px solid var(--card-border);
    border-left: 0;
    padding-top: 16px;
    padding-left: 0;
  }

  .section-heading {
    align-items: start;
    flex-direction: column;
  }

  .contact-actions {
    grid-column: auto;
  }
}

@media (max-width: 520px) {
  .about-hero,
  .identity-card,
  .story-card,
  .now-section,
  .stack-section,
  .principles-section,
  .about-contact {
    border-radius: 14px;
  }

  .about-hero-footer span:nth-child(2) {
    display: none;
  }

  .identity-card,
  .story-card {
    min-height: 360px;
  }

  .stack-group {
    grid-template-columns: 1fr;
  }

  .contact-actions {
    flex-direction: column;
  }
}
</style>
