
const hidden = function (rootElement, router, ctrlConfig, projectConfig) {
  const scenesToRemove = []
  const scenes = projectConfig.scenes
  scenes.forEach((scene, i) => {
    const blocks = scene.blocks
    const blocksToRemove = []

    if (scene.hidden) {
      scenesToRemove.push(i)
    } else {
      blocks.forEach((block, j) => {
        if (block.hidden) blocksToRemove.push(j)
      })
    }

    for (let j = blocks.length - 1; j >= 0; j--) {
      if (blocksToRemove.indexOf(j) >= 0) blocks.splice(j, 1)
    }
  })

  for (let i = scenes.length - 1; i >= 0; i--) {
    if (scenesToRemove.indexOf(i) >= 0) scenes.splice(i, 1)
  }
}

export { hidden }
