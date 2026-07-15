<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ToolShell from '~/components/tools/ToolShell.vue'
import { getTool } from '~/config/tools'
import { useClipboardFeedback } from '~/composables/useClipboardFeedback'
import { parseTimestamp } from '~/utils/tools'

const tool = getTool('timestamp')
const input = ref('1720963296')
const result = ref(parseTimestamp(input.value))
const { copied, copyError, copy } = useClipboardFeedback()

function convert() {
  result.value = parseTimestamp(input.value)
}

function useCurrentTime() {
  input.value = String(Math.floor(Date.now() / 1000))
  convert()
}

function clearAll() {
  input.value = ''
  result.value = parseTimestamp('')
}

function summary() {
  if (!result.value.ok)
    return ''

  return [
    `本地时间：${result.value.local}`,
    `UTC：${result.value.utc}`,
    `ISO：${result.value.iso}`,
  ].join('\n')
}
</script>

<template>
  <ToolShell :tool="tool">
    <section class="tool-panel timestamp-panel">
      <div class="tool-panel-header">
        <label for="timestamp-input" class="tool-panel-title">Unix 时间戳</label>
        <span class="tool-panel-meta">自动识别秒 / 毫秒</span>
      </div>
      <input
        id="timestamp-input"
        v-model="input"
        class="tool-input"
        inputmode="decimal"
        autocomplete="off"
        placeholder="例如 1720963296 或 1720963296000"
        @keyup.enter="convert"
      >
      <div class="tool-actions">
        <button class="tool-button primary" type="button" @click="convert">
          <Icon icon="carbon:time" />转换
        </button>
        <button class="tool-button" type="button" @click="useCurrentTime">
          使用当前时间
        </button>
        <button class="tool-button" type="button" @click="clearAll">
          清空
        </button>
      </div>
      <p v-if="!result.ok" class="tool-error" role="alert">
        {{ result.error }}
      </p>
    </section>

    <section v-if="result.ok" class="timestamp-results" aria-live="polite">
      <article class="timestamp-result-card accent-card">
        <span>识别单位</span>
        <strong>{{ result.unit === 'seconds' ? '秒（10 位）' : '毫秒（13 位）' }}</strong>
        <small>{{ result.milliseconds }} ms</small>
      </article>
      <article class="timestamp-result-card">
        <span>本地时间</span>
        <strong>{{ result.local }}</strong>
      </article>
      <article class="timestamp-result-card">
        <span>UTC</span>
        <strong>{{ result.utc }}</strong>
      </article>
      <article class="timestamp-result-card wide">
        <span>ISO 8601</span>
        <strong>{{ result.iso }}</strong>
        <button class="tool-button" type="button" @click="copy(summary())">
          <Icon :icon="copied ? 'carbon:checkmark' : 'carbon:copy'" />
          {{ copied ? '已复制' : '复制全部' }}
        </button>
      </article>
    </section>
    <p v-if="copyError" class="tool-error" role="alert">
      {{ copyError }}
    </p>
  </ToolShell>
</template>

<style scoped>
.timestamp-panel {
  margin-bottom: 14px;
}

.timestamp-results {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.timestamp-result-card {
  display: flex;
  min-width: 0;
  min-height: 150px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--card-border);
  border-radius: 16px;
  background: var(--card--bg);
  padding: 18px;
}

.timestamp-result-card.accent-card {
  background: #8be9fd;
  color: #101114;
}

.timestamp-result-card.wide {
  min-height: 110px;
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: center;
  gap: 14px;
}

.timestamp-result-card > span {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;
  opacity: 0.55;
  text-transform: uppercase;
}

.timestamp-result-card strong {
  overflow-wrap: anywhere;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 14px;
  line-height: 1.5;
}

.timestamp-result-card small {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  opacity: 0.55;
}

@media (max-width: 760px) {
  .timestamp-results {
    grid-template-columns: 1fr;
  }

  .timestamp-result-card.wide {
    grid-column: auto;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
