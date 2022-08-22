export const relocateMasonryItems = (options) => {
   const {
     masonryContainer,
     columnQty = 3,
     columnGap = 20
   } = options

  const items = masonryContainer ? masonryContainer.children : []
  const containerPaddings = {
    left: parseInt(getComputedStyle(masonryContainer).paddingLeft),
    right: parseInt(getComputedStyle(masonryContainer).paddingRight),
    top: parseInt(getComputedStyle(masonryContainer).paddingTop)
  }
  const containerWidth = masonryContainer.clientWidth
    - containerPaddings.left
    - containerPaddings.right

  const columnWidth = (containerWidth - ((columnQty - 1) * columnGap) ) / columnQty

  const columnsInfo = Array(columnQty).fill(0).map((_, idx) => ({
    x: containerPaddings.left + (idx * (columnWidth + columnGap)),
    height: containerPaddings.top
  }))

  Array.from(items).forEach((item) => {
    item.style.width = `${columnWidth}px`

    const activeColumn = columnsInfo.reduce((acc, column, idx) => {
      if (typeof acc.height === 'undefined' || acc.height > column.height) {
        acc = { ...column, idx }
      }
      return acc
    }, { })

    item.style.left = activeColumn.x + 'px'
    item.style.top = activeColumn.height + 'px'
    columnsInfo[activeColumn.idx].height += item.clientHeight + columnGap
  })
}

export const clearMasonryStyles = (options) => {
  const {
    masonryContainer
  } = options

  const masonryColumns = masonryContainer ? Array.from(masonryContainer.children) : []

  masonryColumns.forEach(column => {
    column.style.removeProperty('left')
    column.style.removeProperty('top')
    column.style.removeProperty('width')
  })
}

export const delay = (cb, miliseconds) => new Promise(resolve => {
  setTimeout(() => {
    cb()
    resolve()
  }, miliseconds)
})
