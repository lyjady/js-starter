window.addEventListener('load', () => {
  const previewImg = document.querySelector('.preview_img');
  const mask = document.querySelector('.mask');
  const big = document.querySelector('.big');
  // 鼠标移动到预览图片上就现实模板与放大后的图片
  previewImg.addEventListener('mouseover', evt => {
    mask.style.display = 'block'
    big.style.display = 'block'
  })
  // 鼠标离开之后就隐藏
  previewImg.addEventListener('mouseout', evt => {
    mask.style.display = 'none'
    big.style.display = 'none'
  })
  // 鼠标移动时移动模板
  previewImg.addEventListener('mousemove', evt => {
    // 获取鼠标在页面中的坐标
    const mouseX = evt.pageX;
    const mouseY = evt.pageY;
    // 获取预览图到body的x, y的距离
    const previewX = previewImg.offsetLeft;
    const previewY = previewImg.offsetTop;
    // 计算模板的坐标
    let maskX = mouseX - previewX - mask.offsetWidth / 2;
    let maskY = mouseY - previewY - mask.offsetHeight / 2;
    if (maskX <= 0) {
      maskX = 0;
    } else if (maskX >= previewImg.offsetWidth - mask.offsetWidth) {
      maskX = previewImg.offsetWidth - mask.offsetWidth
    }
    if (maskY <= 0) {
      maskY = 0;
    } else if (maskY >= previewImg.offsetHeight - mask.offsetHeight) {
      maskY = previewY.offsetHeight - mask.offsetHeight
    }
    mask.style.left = `${maskX}px`
    mask.style.top = `${maskY}px`
  })
})