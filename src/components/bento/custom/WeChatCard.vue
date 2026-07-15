<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const isOpen = ref(false)

function openContactCard() {
  isOpen.value = true
}

function closeContactCard() {
  isOpen.value = false
}

onKeyStroke('Escape', closeContactCard)
</script>

<template>
  <ShadowCard class="wechat-shell !p-[5px]">
    <button
      type="button"
      class="wechat-card pointer-events-auto h-full w-full"
      aria-label="放大微信二维码，添加 CooKie 为好友"
      @click.stop="openContactCard"
    >
      <span class="wechat-topline">
        <span>WECHAT / ADD</span>
        <Icon icon="carbon:maximize" aria-hidden="true" />
      </span>

      <span class="qr-frame" aria-hidden="true">
        <img src="/wechat-qr.jpeg" alt="" loading="lazy" decoding="async">
      </span>

      <span class="wechat-footer">
        <strong>CooKie</strong>
        <span>点击放大</span>
      </span>
    </button>
  </ShadowCard>

  <Teleport to="body">
    <Transition name="wechat-modal">
      <div
        v-if="isOpen"
        class="wechat-overlay"
        role="presentation"
        @click.self="closeContactCard"
      >
        <section
          class="wechat-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wechat-dialog-title"
        >
          <div class="wechat-dialog-top">
            <div>
              <span>WECHAT / CONTACT</span>
              <h2 id="wechat-dialog-title">
                添加 CooKie
              </h2>
            </div>
            <button type="button" aria-label="关闭微信二维码" @click="closeContactCard">
              <Icon icon="carbon:close" />
            </button>
          </div>

          <img
            class="wechat-contact-image"
            src="/wechat-contact.jpeg"
            alt="CooKie 的微信二维码，微信昵称 CooKie，地区美国边远小岛"
            decoding="async"
          >

          <p>使用微信扫一扫添加好友</p>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.wechat-shell {
  height: 100%;
  width: 100%;
}

.wechat-card {
  position: relative;
  isolation: isolate;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #30363d;
  border-radius: 6px;
  background: linear-gradient(rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 2.5%) 1px, transparent 1px),
    #0d1117;
  background-size: 16px 16px;
  color: #e6edf3;
  cursor: pointer;
  padding: 9px 10px 10px;
  text-align: left;
  transition:
    border-color 180ms ease,
    background-color 180ms ease;
}

.wechat-card::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/noise-light.png') repeat;
  content: '';
  opacity: 0.065;
  pointer-events: none;
}

.wechat-card::after {
  position: absolute;
  inset: 6px;
  z-index: -1;
  border: 1px dashed rgb(139 148 158 / 16%);
  border-radius: 3px;
  content: '';
  pointer-events: none;
}

.wechat-card:hover {
  border-color: #6e7681;
  background-color: #111820;
}

.wechat-topline,
.wechat-footer {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wechat-topline {
  color: #8b949e;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: clamp(7px, 0.7vw, 9px);
  font-weight: 800;
  letter-spacing: 0.05em;
}

.wechat-topline svg {
  width: 13px;
  height: 13px;
  transition: transform 180ms ease;
}

.wechat-card:hover .wechat-topline svg {
  transform: scale(1.12);
}

.qr-frame {
  position: relative;
  z-index: 1;
  display: grid;
  width: clamp(94px, 8.5vw, 116px);
  height: clamp(94px, 8.5vw, 116px);
  place-items: center;
  border: 1px solid #6e7681;
  border-radius: 9px;
  background: #fff;
  box-shadow: 3px 3px 0 #010409;
  padding: 4px;
}

.qr-frame img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: contain;
}

.wechat-footer {
  border-top: 1px solid rgb(139 148 158 / 20%);
  padding-top: 7px;
}

.wechat-footer strong {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: clamp(10px, 1vw, 12px);
  letter-spacing: -0.02em;
}

.wechat-footer > span {
  color: #8b949e;
  font-size: clamp(8px, 0.8vw, 10px);
}

.wechat-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  overflow-y: auto;
  place-items: center;
  background: rgb(1 4 9 / 76%);
  backdrop-filter: blur(12px);
  padding: 20px;
}

.wechat-dialog {
  width: min(100%, 410px);
  border: 1px solid #30363d;
  border-radius: 18px;
  background: #0d1117;
  color: #e6edf3;
  box-shadow: 0 24px 90px rgb(0 0 0 / 55%);
  padding: 12px;
}

.wechat-dialog-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 7px 7px 12px;
}

.wechat-dialog-top span {
  color: #8b949e;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.wechat-dialog-top h2 {
  margin: 3px 0 0;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.wechat-dialog-top button {
  display: grid;
  width: 34px;
  height: 34px;
  flex: none;
  place-items: center;
  border: 1px solid #30363d;
  border-radius: 50%;
  background: #161b22;
  color: #e6edf3;
  cursor: pointer;
}

.wechat-dialog-top button:hover {
  border-color: #6e7681;
}

.wechat-contact-image {
  display: block;
  width: 100%;
  border-radius: 12px;
  background: #fff;
}

.wechat-dialog > p {
  margin: 12px 0 4px;
  color: #8b949e;
  font-size: 12px;
  text-align: center;
}

.wechat-modal-enter-active,
.wechat-modal-leave-active {
  transition: opacity 180ms ease;
}

.wechat-modal-enter-active .wechat-dialog,
.wechat-modal-leave-active .wechat-dialog {
  transition:
    transform 180ms ease,
    opacity 180ms ease;
}

.wechat-modal-enter-from,
.wechat-modal-leave-to {
  opacity: 0;
}

.wechat-modal-enter-from .wechat-dialog,
.wechat-modal-leave-to .wechat-dialog {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

@media (max-width: 520px) {
  .wechat-card {
    padding: 8px;
  }

  .wechat-topline > span,
  .wechat-footer > span {
    display: none;
  }

  .wechat-topline {
    justify-content: flex-end;
  }

  .qr-frame {
    width: clamp(86px, 28vw, 112px);
    height: clamp(86px, 28vw, 112px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wechat-card,
  .wechat-topline svg,
  .wechat-modal-enter-active,
  .wechat-modal-leave-active,
  .wechat-modal-enter-active .wechat-dialog,
  .wechat-modal-leave-active .wechat-dialog {
    transition: none;
  }
}
</style>
