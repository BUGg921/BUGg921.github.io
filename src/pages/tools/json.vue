<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ToolShell from '~/components/tools/ToolShell.vue'
import { getTool } from '~/config/tools'
import { useClipboardFeedback } from '~/composables/useClipboardFeedback'
import { formatJson, minifyJson } from '~/utils/tools'

const tool = getTool('json')
const sample = `{
  "site": "BUGg921",
  "tools": ["JSON", "时间戳", "Base64"],
  "private": true
}`

const input = ref(sample)
const initialResult = formatJson(sample)
const output = ref(initialResult.ok ? initialResult.value : '')
const error = ref('')
const { copied, copyError, copy } = useClipboardFeedback()

function applyTransform(mode: 'format' | 'minify') {
  const result = mode === 'format' ? formatJson(input.value) : minifyJson(input.value)
  if (result.ok) {
    output.value = result.value
    error.value = ''
  }
  else {
    output.value = ''
    error.value = result.error
  }
}

function clearAll() {
  input.value = ''
  output.value = ''
  error.value = ''
}

function loadSample() {
  input.value = sample
  applyTransform('format')
}
</script>

<template>
  <ToolShell :tool="tool">
    <div class="tool-workspace">
      <section class="tool-panel">
        <div class="tool-panel-header">
          <label for="json-input" class="tool-panel-title">输入 JSON</label>
          <span class="tool-panel-meta">{{ input.length }} chars</span>
        </div>
        <textarea id="json-input" v-model="input" class="tool-textarea" spellcheck="false" placeholder="粘贴 JSON 内容…" />
        <div class="tool-actions">
          <button class="tool-button primary" type="button" @click="applyTransform('format')">
            <Icon icon="carbon:text-align-left" />格式化
          </button>
          <button class="tool-button" type="button" @click="applyTransform('minify')">
            <Icon icon="carbon:collapse-all" />压缩
          </button>
          <button class="tool-button" type="button" @click="loadSample">
            示例
          </button>
          <button class="tool-button" type="button" @click="clearAll">
            清空
          </button>
        </div>
        <p v-if="error" class="tool-error" role="alert">
          {{ error }}
        </p>
      </section>

      <section class="tool-panel">
        <div class="tool-panel-header">
          <label for="json-output" class="tool-panel-title">处理结果</label>
          <span class="tool-panel-meta">{{ output.length }} chars</span>
        </div>
        <textarea id="json-output" :value="output" class="tool-textarea" readonly spellcheck="false" placeholder="处理结果会显示在这里" />
        <div class="tool-actions">
          <button class="tool-button primary" type="button" :disabled="!output" @click="copy(output)">
            <Icon :icon="copied ? 'carbon:checkmark' : 'carbon:copy'" />
            {{ copied ? '已复制' : '复制结果' }}
          </button>
        </div>
        <p v-if="copyError" class="tool-error" role="alert">
          {{ copyError }}
        </p>
      </section>
    </div>
  </ToolShell>
</template>
