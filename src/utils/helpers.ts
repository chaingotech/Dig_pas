export const generateId = (length = 12): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  return new Array(length).fill('').reduce(a => (
    a + characters.charAt(Math.floor(Math.random() * charactersLength))
  ), '')
}
