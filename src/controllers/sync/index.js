const sync = function (rootElement, router, ctrlConfig, projectConfig) {
  const bus = new BroadcastChannel('presenta')
  let isReceiver = false

  const send = (name, e) => {
    if (!isReceiver) bus.postMessage({ name, props: e })
    isReceiver = false
  }

  router.on('next', e => {
    send('next', e)
  })

  router.on('prev', e => {
    send('prev', e)
  })

  router.on('goto', e => {
    send('goto', e)
  })

  bus.onmessage = e => {
    const ev = e.data
    const name = ev.name
    const props = ev.props

    isReceiver = true

    if (name === 'next') {
      router.next()
    }
    if (name === 'prev') {
      router.prev()
    }
    if (name === 'goto') {
      router.goto(props.currentIndex)
    }
  }
}

export { sync }
