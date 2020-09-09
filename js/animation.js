function animation(element, target, timeout, callback) {
  console.log(12345);
  clearInterval(element.timer)
  element.timer = setInterval(() => {
    let step = (target - element.offsetLeft) / 10
    step = step > 0 ? Math.ceil(step) : Math.round(step)
    element.style.left = `${element.offsetLeft + step}px`
    if (element.offsetLeft === target) {
      callback && callback()
      clearInterval(element.timer)
    }
  }, timeout)
}
