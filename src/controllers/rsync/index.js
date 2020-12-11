const rsync = function (rootElement, router, ctrlConfig, projectConfig) {
  if (!window.BroadcastChannel) {
    console.log('rsync controller is disabled because browser incompatibility')
    return false
  }

  const bus = new BroadcastChannel('presenta.rsync')
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

    switch (name) {
      case 'next':
        router.next()
        break

      case 'prev':
        router.prev()
        break

      case 'goto':
        router.goto(props.currentIndex)
        break
    }
  }
}

export { rsync }
