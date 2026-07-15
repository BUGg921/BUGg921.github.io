<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { SERVICE_CHANNELS } from '~/config/services'

useHead({
  title: '服务｜BUGg921',
  meta: [
    { name: 'description', content: '通过闲鱼等可信平台查看 BUGg921 提供的服务与作品。' },
  ],
})

const steps = [
  ['01', '选择入口', '从这里进入我公开维护的平台主页。'],
  ['02', '查看详情', '服务内容、价格与可用状态以平台页面为准。'],
  ['03', '平台沟通', '确认需求与交付范围后，再通过平台完成交易。'],
]
</script>

<template>
  <section class="services-page">
    <header class="services-hero">
      <div class="services-kicker">
        <span class="status-dot" />
        SERVICE DIRECTORY
      </div>

      <div class="services-title-row">
        <h1>有需要，<br><span>去我的服务页找我。</span></h1>
        <p>
          这里集中放我对外提供服务的平台入口。你可以先查看作品和详情，再在平台内与我沟通。
        </p>
      </div>

      <div class="services-meta">
        <span>PLATFORM FIRST</span>
        <span>DETAILS STAY CURRENT</span>
        <span>SAFE COMMUNICATION</span>
      </div>
    </header>

    <div class="channel-grid">
      <article
        v-for="(channel, index) in SERVICE_CHANNELS"
        :key="channel.id"
        class="channel-card"
        :class="[`channel-${channel.id}`, { unavailable: !channel.available }]"
      >
        <div class="channel-topline">
          <span>{{ channel.label }}</span>
          <span>0{{ index + 1 }}</span>
        </div>

        <div class="channel-icon" aria-hidden="true">
          <Icon :icon="channel.icon" />
        </div>

        <div class="channel-copy">
          <div class="channel-heading">
            <h2>{{ channel.name }}</h2>
            <span>{{ channel.note }}</span>
          </div>
          <p>{{ channel.description }}</p>
        </div>

        <a
          v-if="channel.available"
          :href="channel.href"
          :target="channel.external ? '_blank' : undefined"
          :rel="channel.external ? 'noreferrer' : undefined"
          class="channel-action"
        >
          {{ channel.action }}
          <Icon icon="carbon:arrow-up-right" />
        </a>
        <span v-else class="channel-action channel-action-disabled" aria-disabled="true">
          {{ channel.note }}
          <Icon icon="carbon:time" />
        </span>
      </article>
    </div>

    <section class="service-flow" aria-labelledby="service-flow-title">
      <div class="flow-heading">
        <p>HOW IT WORKS</p>
        <h2 id="service-flow-title">
          简单、透明，<br>先看清楚再开始。
        </h2>
      </div>

      <ol class="flow-list">
        <li v-for="step in steps" :key="step[0]">
          <span>{{ step[0] }}</span>
          <div>
            <strong>{{ step[1] }}</strong>
            <p>{{ step[2] }}</p>
          </div>
        </li>
      </ol>
    </section>

    <aside class="safety-note">
      <Icon icon="carbon:security" aria-hidden="true" />
      <div>
        <strong>交易提醒</strong>
        <p>服务信息、沟通和付款都以对应平台页面为准。请勿通过陌生链接或脱离平台私下转账。</p>
      </div>
    </aside>
  </section>
</template>

<style scoped>
.services-page {
  position: relative;
  z-index: 1;
  width: min(100%, 970px);
  margin: 0 auto;
}

.services-hero {
  overflow: hidden;
  border: 1px solid var(--card-border);
  border-radius: 18px;
  background: linear-gradient(rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    var(--card--bg);
  background-size: 24px 24px;
  padding: clamp(24px, 5vw, 54px);
  box-shadow: var(--ui-main-box-shadow);
}

.services-kicker,
.services-meta,
.channel-topline,
.channel-heading span,
.channel-action,
.flow-heading > p {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.services-kicker {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8b949e;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3fb950;
  box-shadow: 0 0 10px rgb(63 185 80 / 55%);
}

.services-title-row {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(240px, 0.55fr);
  align-items: end;
  gap: clamp(24px, 6vw, 72px);
  margin-top: clamp(56px, 10vw, 112px);
}

.services-title-row h1 {
  margin: 0;
  font-size: clamp(42px, 8vw, 84px);
  font-weight: 950;
  letter-spacing: -0.07em;
  line-height: 0.92;
}

.services-title-row h1 span {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--text-color);
}

.services-title-row p {
  margin: 0;
  font-size: 13px;
  line-height: 1.8;
  opacity: 0.58;
}

.services-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: clamp(38px, 7vw, 72px);
  color: #8b949e;
}

.services-meta span {
  border: 1px solid var(--card-border);
  border-radius: 999px;
  padding: 7px 10px;
}

.channel-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.channel-card {
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 390px;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--card-border);
  border-radius: 18px;
  background: var(--card--bg);
  color: var(--text-color);
  padding: clamp(20px, 3.5vw, 32px);
  box-shadow: var(--ui-main-box-shadow);
  transition:
    transform 180ms ease,
    border-color 180ms ease;
}

.channel-card::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/noise-light.png') repeat;
  content: '';
  opacity: 0.055;
}

.channel-card::after {
  position: absolute;
  top: -110px;
  right: -90px;
  z-index: -1;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  background: rgb(139 233 253 / 18%);
  content: '';
  filter: blur(8px);
}

.channel-xianyu::after {
  background: rgb(255 214 10 / 28%);
}

.channel-card:hover:not(.unavailable) {
  transform: translateY(-5px);
  border-color: #6e7681;
}

.channel-card.unavailable {
  opacity: 0.82;
}

.channel-topline,
.channel-heading,
.channel-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.channel-topline {
  color: #8b949e;
}

.channel-icon {
  display: grid;
  width: 68px;
  height: 68px;
  place-items: center;
  border: 1px solid #6e7681;
  border-radius: 16px;
  background: #161b22;
  color: #f0f6fc;
  box-shadow: 4px 4px 0 #010409;
  font-size: 32px;
}

.channel-copy h2 {
  margin: 0;
  font-size: clamp(42px, 7vw, 68px);
  font-weight: 950;
  letter-spacing: -0.07em;
  line-height: 0.95;
}

.channel-heading {
  gap: 16px;
}

.channel-heading span {
  color: #8b949e;
  text-align: right;
}

.channel-copy > p {
  min-height: 48px;
  margin: 14px 0 0;
  max-width: 430px;
  font-size: 13px;
  line-height: 1.7;
  opacity: 0.58;
}

.channel-action {
  margin-top: 22px;
  border-top: 1px solid var(--card-border);
  color: var(--text-color);
  padding-top: 15px;
  text-decoration: none;
}

.channel-action svg {
  width: 18px;
  height: 18px;
  transition: transform 180ms ease;
}

a.channel-action:hover svg {
  transform: translate(3px, -3px);
}

.channel-action-disabled {
  cursor: not-allowed;
  opacity: 0.46;
}

.service-flow {
  display: grid;
  grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(28px, 6vw, 80px);
  margin-top: 12px;
  border: 1px solid var(--card-border);
  border-radius: 18px;
  background: var(--card--bg);
  padding: clamp(24px, 5vw, 48px);
  box-shadow: var(--ui-main-box-shadow);
}

.flow-heading > p {
  margin: 0 0 14px;
  color: #8b949e;
}

.flow-heading h2 {
  margin: 0;
  font-size: clamp(30px, 5vw, 48px);
  font-weight: 950;
  letter-spacing: -0.055em;
  line-height: 1;
}

.flow-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.flow-list li {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 16px;
  border-top: 1px solid var(--card-border);
  padding: 18px 0;
}

.flow-list li:first-child {
  border-top: 0;
  padding-top: 0;
}

.flow-list li > span {
  color: #8b949e;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  font-weight: 800;
}

.flow-list strong {
  font-size: 15px;
}

.flow-list p {
  margin: 5px 0 0;
  font-size: 12px;
  line-height: 1.65;
  opacity: 0.55;
}

.safety-note {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-top: 12px;
  border: 1px dashed #6e7681;
  border-radius: 14px;
  padding: 18px 20px;
}

.safety-note > svg {
  width: 22px;
  height: 22px;
  flex: none;
}

.safety-note strong {
  font-size: 13px;
}

.safety-note p {
  margin: 4px 0 0;
  font-size: 12px;
  line-height: 1.65;
  opacity: 0.56;
}

@media (max-width: 720px) {
  .services-title-row,
  .channel-grid,
  .service-flow {
    grid-template-columns: 1fr;
  }

  .services-title-row {
    align-items: start;
  }

  .channel-card {
    min-height: 340px;
  }
}

@media (max-width: 520px) {
  .services-hero,
  .channel-card,
  .service-flow {
    border-radius: 14px;
  }

  .channel-heading {
    align-items: flex-end;
  }

  .channel-heading span {
    max-width: 90px;
  }

  .services-meta span:nth-child(2) {
    display: none;
  }
}
</style>
