addEventListener('load', () => {
  // 当鼠标移动到焦点图时现实左右箭头, 离开时隐藏箭头
  const leftArrow = document.querySelector('.arrow-l');
  const rightArrow = document.querySelector('.arrow-r');
  const focus = document.querySelector('.focus');
  focus.addEventListener('mouseenter', () => {
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  })
  focus.addEventListener('mouseleave', () => {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  })
  // 根据图片的数量生成圆点
  const ul = document.querySelector('.focus ul');
  const circle = document.querySelector('.circle');
  const imageWidth = ul.children[0].offsetWidth;
  let currentIndex = 0;
  for (let i = 0; i < ul.children.length - 1; i++) {
    const li = document.createElement('li');
    // 为小圆点设置索引
    li.setAttribute('data-index', i.toString());
    if (i === 0) {
      li.className = 'current';
    }
    // 为小圆点绑定点击事件, 点击小圆点时跳转到对应的图片
    li.addEventListener('click', () => {
      const index = li.getAttribute('data-index');
      if (currentIndex === ul.children.length - 1) {
        // 如果所在图片为最后一个克隆图, 那么就立刻回到第一张图片
        ul.style.left = '0px';
      }
      animation(ul, -(index * imageWidth + 5), 15)
      for (let j = 0; j < circle.children.length; j++) {
        circle.children[j].className = '';
      }
      li.className = 'current';
      // 改变全局的index变量
      currentIndex = index;
    })
    circle.appendChild(li);
  }
  // 点击右侧箭头让图片滑动
  rightArrow.addEventListener('click', () => {
    if (currentIndex === ul.children.length - 1) {
      // 如果索引大于ul里面的图片的数量那么就立刻返回第一张图片
      currentIndex = 0;
      ul.style.left = '0px';
    }
    currentIndex++;
    // 改变小圆点的显示
    changeCircle(circle)
    animation(ul, -(currentIndex * imageWidth + 5), 15);
  })

  function changeCircle(circle) {
    for (let i = 0; i < circle.children.length; i++) {
      circle.children[i].className = '';
    }
    if (currentIndex === ul.children.length - 1) {
      // 如果是最后一个克隆图那么就将第一个小圆点的状态改变
      circle.children[0].className = 'current';
    } else {
      circle.children[currentIndex].className = 'current';
    }
  }
})
