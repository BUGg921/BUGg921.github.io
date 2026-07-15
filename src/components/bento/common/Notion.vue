<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { TOOLS } from '~/config/tools'
</script>

<template>
  <ShadowCard class="toolbox-shell !p-[5px]">
    <RouterLink
      to="/tools"
      title="查看开发者工具"
      class="toolbox-card pointer-events-auto h-full w-full"
    >
      <div class="toolbox-topline">
        <span>LOCAL / TOOLS</span>
        <span class="tool-count">0{{ TOOLS.length }}</span>
      </div>

      <div class="toolbox-icon" aria-hidden="true">
        <Icon icon="carbon:tools" />
      </div>

      <div class="toolbox-copy">
        <strong>开发者<br>工具箱</strong>
        <span>
          {{ TOOLS.length }} 个工具已上线
          <Icon icon="carbon:arrow-up-right" class="toolbox-arrow" />
        </span>
      </div>
    </RouterLink>
  </ShadowCard>
</template>

<style scoped>
.toolbox-shell {
  height: 100%;
  width: 100%;
}

.toolbox-card {
  position: relative;
  isolation: isolate;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #30363d;
  border-radius: 6px;
  background: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    #0d1117;
  background-size: 16px 16px;
  color: #e6edf3;
  padding: clamp(10px, 1.4vw, 14px);
  text-decoration: none;
  transition:
    background-color 180ms ease,
    border-color 180ms ease;
}

.toolbox-card::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/noise-light.png') repeat;
  content: '';
  opacity: 0.065;
  pointer-events: none;
}

.toolbox-card::after {
  position: absolute;
  inset: 6px;
  z-index: -1;
  border: 1px dashed rgba(139, 148, 158, 0.16);
  border-radius: 3px;
  content: '';
  pointer-events: none;
}

.toolbox-card:hover {
  border-color: #6e7681;
  background-color: #111820;
}

.toolbox-topline,
.toolbox-copy > span {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: clamp(7px, 0.75vw, 9px);
  font-weight: 700;
  letter-spacing: 0.04em;
}

.toolbox-topline {
  color: #8b949e;
}

.tool-count {
  display: grid;
  width: 22px;
  height: 18px;
  place-items: center;
  border: 1px solid #6e7681;
  border-radius: 4px;
  color: #a7f3d0;
}

.toolbox-icon {
  position: relative;
  z-index: 1;
  display: grid;
  width: clamp(30px, 3vw, 40px);
  height: clamp(30px, 3vw, 40px);
  place-items: center;
  border: 1px solid #6e7681;
  border-radius: 9px;
  background: #161b22;
  color: #f0f6fc;
  box-shadow: 3px 3px 0 #010409;
  font-size: clamp(15px, 1.7vw, 21px);
}

.toolbox-copy {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toolbox-copy strong {
  font-size: clamp(13px, 1.7vw, 19px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.05;
}

.toolbox-copy > span {
  border-top: 1px solid rgba(139, 148, 158, 0.2);
  color: #8b949e;
  padding-top: 7px;
  white-space: nowrap;
}

.toolbox-arrow {
  flex: none;
  color: #e6edf3;
  transition: transform 180ms ease;
}

.toolbox-card:hover .toolbox-arrow {
  transform: translate(2px, -2px);
}

@media (max-width: 520px) {
  .toolbox-topline > span:first-child,
  .toolbox-copy > span {
    display: none;
  }

  .toolbox-topline {
    justify-content: flex-end;
  }
}
</style>
