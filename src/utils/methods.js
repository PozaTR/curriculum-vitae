export const relocateMasonryItems = (options) => {
   const {
     masonryContainer,
     columnQty = 3,
     columnGap = 20,
     itemDelay = 0
   } = options

  const items = masonryContainer.children
  const containerWidth = masonryContainer.clientWidth
    - parseInt(getComputedStyle(masonryContainer).paddingLeft)
    - parseInt(getComputedStyle(masonryContainer).paddingRight)

  const columnsInfo = Array(columnQty).fill(0).map((_, idx) => ({
    x: (idx * containerWidth / columnQty) + (idx ? columnGap / 2 : 0),
    height: 0
  }))

  Array.from(items).forEach((item) => {
    item.style.width = (containerWidth / columnQty) + 'px'
    item.style.visibility = 'hidden'
    setTimeout(() => {
      console.log('item', item.clientHeight)
      const activeColumn = columnsInfo.reduce((acc, column, idx) => {
        console.log('acc.height', acc.height)
        console.log('column.height', column.height)
        if (typeof acc.height === 'undefined' || acc.height > column.height) {
          console.log('check', idx)
          acc = { ...column, idx }
        }
        return acc
      }, { })
      item.style.left = activeColumn.x + 'px'
      item.style.top = activeColumn.height + 'px'
      columnsInfo[activeColumn.idx].height += item.clientHeight + columnGap
      console.log('activeColumn', activeColumn)
      item.style.visibility = 'visible'
    }, itemDelay)
  })
}
