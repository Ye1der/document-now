/**
 *
 * @param name es el nombre del query que se quiere extraer
 * @param value es el string que contiene la query
 * @returns {string | null}
 */

export function extractQueryFromString(
  name: string,
  value: string,
): string | null {
  const searchParams = new URLSearchParams(value)
  return searchParams.get(name)
}
