declare global {
  interface Document {
    startViewTransition: (callback: () => void) => any
  }
  interface HTMLStyleElement {
    styleSheet: { cssText: string }
  }
}
