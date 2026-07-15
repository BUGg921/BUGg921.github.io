import { onScopeDispose, ref } from 'vue'

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  textarea.remove()

  if (!copied)
    throw new Error('Copy failed')
}

export function useClipboardFeedback() {
  const copied = ref(false)
  const copyError = ref('')
  let resetTimer: ReturnType<typeof setTimeout> | undefined

  async function copy(value: string) {
    if (!value)
      return

    try {
      await copyText(value)
      copied.value = true
      copyError.value = ''
      clearTimeout(resetTimer)
      resetTimer = setTimeout(() => {
        copied.value = false
      }, 1600)
    }
    catch {
      copyError.value = '复制失败，请手动选择内容。'
    }
  }

  onScopeDispose(() => clearTimeout(resetTimer))

  return { copied, copyError, copy }
}
