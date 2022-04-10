import { uid } from './uid.js'
const addFontDep = url => {
  const fontUniqueName = uid(url)

  const exists = document.querySelector('.' + fontUniqueName)
  if (exists) return fontUniqueName

  const tag = document.createElement('style')
  tag.classList.add(fontUniqueName)
  tag.innerHTML = `
  @font-face {
    font-family: "${fontUniqueName}";
    src: url("${url}");
  }`
  document.head.appendChild(tag)
  return fontUniqueName
}

export { addFontDep }
