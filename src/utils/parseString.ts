export function slugify(text: string) {
  return text
    .normalize('NFD') // Descompone los caracteres con tilde (á -> a + ́)
    .replace(/[\u0300-\u036f]/g, '') // Elimina los diacríticos
    .replace(/ñ/g, 'n') // Reemplaza la "ñ"
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Elimina cualquier carácter que no sea letra, número, espacio o guion
    .trim()
    .replace(/\s+/g, '-') // Reemplaza espacios por guiones
}
