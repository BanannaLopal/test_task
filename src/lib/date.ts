export const getTime = (date: Date): string => {
  return date.toISOString().substring(11, 19)
}
