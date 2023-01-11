'use strict'
const checkedEls = document.querySelectorAll('.interest__check')

checkedEls.forEach((item) => {
  item.addEventListener('change', (e) => {
    let parent = item.closest('.interest')
    if (parent) {
      let child = Array.from(parent.querySelectorAll('.interest__check'))
      child.forEach((el) => {
        el.checked = item.checked
      })
    }
  })
})
