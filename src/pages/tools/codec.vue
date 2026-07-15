<script setup lang="ts">
import { Icon } from '@iconify/vue'
import ToolShell from '~/components/tools/ToolShell.vue'
import { getTool } from '~/config/tools'
import { useClipboardFeedback } from '~/composables/useClipboardFeedback'
import { decodeBase64, decodeUrl, encodeBase64, encodeUrl } from '~/utils/tools'

type CodecMode = 'base64' | 'url'
type CodecDirection = 'encode' | 'decode'

const tool = getTool('codec')
const mode = ref<CodecMode>('base64')
const direction = ref<CodecDirection>('encode')
const input = ref('你好，BUGg921 👋')
const output = ref('')
const error = ref('')
const { copied, copyError, copy } = useClipboardFeedback()

function convert() {
  const converter = mode.value === 'base64'
    ? (direction.value === 'encode' ? encodeBase64 : decodeBase64)
    : (direction.value === 'encode' ? encodeUrl : decodeUrl)
  const result = converter(input.value)

  if (result.ok) {
    output.value = result.value
    error.value = ''
  }
  else {
    output.value = ''
    error.value = result.error
  }
}

function selectMode(nextMode: CodecMode) {
  mode.value = nextMode
  loadSample()
}

function selectDirection(nextDirection: CodecDirection) {
  if (direction.value === nextDirection)
    return
  direction.value = nextDirection
  if (output.value) {
    input.value = output.value
    output.value = ''
    error.value = ''
  }
  convert()
}

function loadSample() {
  const plainText = '你好，BUGg921 👋'
  if (direction.value === 'encode') {
    input.value = plainText
  }
  else {
    const encoded = mode.value === 'base64' ? encodeBase64(plainText) : encodeUrl(plainText)
    input.value = encoded.ok ? encoded.value : ''
  }
  convert()
}

function clearAll() {
  input.value = ''
  output.value = ''
  error.value = ''
}

convert()
</script>

<template>
  <ToolShell :tool="tool">
    <div class="codec-controls">
      <div class="tool-tabs" aria-label="编解码类型">
        <button class="tool-tab" :class="{ active: mode === 'base64' }" type="button" @click="selectMode('base64')">
          Base64
        </button>
        <button class="tool-tab" :class="{ active: mode === 'url' }" type="button" @click="selectMode('url')">
          URL
        </button>
      </div>
      <div class="tool-tabs" aria-label="操作方向">
        <button class="tool-tab" :class="{ active: direction === 'encode' }" type="button" @click="selectDirection('encode')">
          编码
        </button>
        <button class="tool-tab" :class="{ active: direction === 'decode' }" type="button" @click="selectDirection('decode')">
          解码
        </button>
      </div>
    </div>

    <div class="tool-workspace">
      <section class="tool-panel">
        <div class="tool-panel-header">
          <label for="codec-input" class="tool-panel-title">输入内容</label>
          <span class="tool-panel-meta">{{ mode.toUpperCase() }} · {{ direction === 'encode' ? 'ENCODE' : 'DECODE' }}</span>
        </div>
        <textarea id="codec-input" v-model="input" class="tool-textarea" spellcheck="false" placeholder="输入需要处理的文本…" />
        <div class="tool-actions">
          <button class="tool-button primary" type="button" @click="convert">
            <Icon icon="carbon:play-filled-alt" />{{ direction === 'encode' ? '开始编码' : '开始解码' }}
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
          <label for="codec-output" class="tool-panel-title">处理结果</label>
          <span class="tool-panel-meta">UTF-8 SAFE</span>
        </div>
        <textarea id="codec-output" :value="output" class="tool-textarea" readonly spellcheck="false" placeholder="处理结果会显示在这里" />
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

<style scoped>
.codec-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}
</style>
