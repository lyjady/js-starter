function animation(element, target, timeout, callback) {
  clearInterval(element.timer)
  element.timer = setInterval(() => {
    let step = (target - element.offsetLeft) / 10
    step = step > 0 ? Math.ceil(step) : Math.round(step)
    element.style.left = `${element.offsetLeft + step}px`
    if (element.offsetLeft === target) {
      if (callback) {
        callback()
      }
      clearInterval(element.timer)
    }
  }, timeout)
}
