export const objectIsEmpty = (obj: unknown): boolean => {
  if (obj instanceof Object === false) return false

  if (Object.keys(obj).length === 0) {
    return true
  }

  return false
}
