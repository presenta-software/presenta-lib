const event = (name, detail) => {
  const prop = {
    bubbles: true,
    detail
  }
  return new CustomEvent(name, prop)
}
export { event }
