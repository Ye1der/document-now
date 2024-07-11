export function addLocal(item: string, data: unknown) {
  localStorage.setItem(item, JSON.stringify(data))
}

export function getLocal(item: string) {
  const data = localStorage.getItem(item)

  if (!data || data === 'undefined') return null

  return JSON.parse(data)
}

export function removeLocal(item: string) {
  localStorage.removeItem(item)
}
