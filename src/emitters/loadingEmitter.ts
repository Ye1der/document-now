class LoadingEmitter extends EventTarget {
  emit(event: string, detail?: unknown) {
    this.dispatchEvent(new CustomEvent(event, { detail }))
  }

  on(event: string, callback: (detail: unknown) => void) {
    this.addEventListener(event, (e) => callback((e as CustomEvent).detail))
  }

  off(event: string, callback: (detail: unknown) => void) {
    this.removeEventListener(event, callback)
  }
}

export const loadingEmitter = new LoadingEmitter()
