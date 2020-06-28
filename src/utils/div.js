const div = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes[0]

export { div }
