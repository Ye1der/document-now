import { Theme, Set } from '@/types.d'

export async function toggleTheme(
  event: React.MouseEvent<HTMLButtonElement>,
  theme: Theme,
  setTheme: Set<Theme>
) {
  let isDark = true
  const currentTheme = theme
  if (currentTheme === Theme.dark) {
    setTheme(Theme.light)
    isDark = false
  } else {
    setTheme(Theme.dark)
    isDark = true
  }
  function nextTick() {
    return new Promise((resolve) => setTimeout(resolve, 0))
  }
  const x = event.clientX
  const y = event.clientY
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ]
  await document.startViewTransition(async () => {
    const head = document.head || document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    style.type = 'text/css'
    const css = `
          ::view-transition-old(root),
          .dark ::view-transition-new(root) {
            z-index: ${isDark ? 9999 : 1};
          }
          ::view-transition-new(root),
          .dark ::view-transition-old(root) {
            z-index: ${isDark ? 1 : 9999};
          }
        `
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css)) // Otros navegadores
    }
    head.appendChild(style)
    document.querySelector('html')?.classList.toggle('dark', isDark)
    await nextTick()
  }).ready
  // Animate the clip path
  document.documentElement.animate(
    { clipPath: isDark ? clipPath.reverse() : clipPath },
    {
      duration: 400,
      easing: 'ease-in-out',
      pseudoElement: `::view-transition-${isDark ? 'old' : 'new'}(root)`,
    }
  )
}
