const timeToCounter = (initialSeconds: number) => {
  const minutes = Math.floor(initialSeconds / 60)
  const seconds = initialSeconds - minutes * 60
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export default timeToCounter
