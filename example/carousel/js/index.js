addEventListener('load', () => {
  // 当鼠标移动到焦点图时现实左右箭头, 离开时隐藏箭头
  const leftArrow = document.querySelector('.arrow-l');
  const rightArrow = document.querySelector('.arrow-r');
  const focus = document.querySelector('.focus');
  // 节流阀变量
  let flag = true;
  focus.addEventListener('mouseenter', () => {
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
    // 如果鼠标进入轮播图则停止播放
    clearInterval(timer);
    timer = null;
  })
  focus.addEventListener('mouseleave', () => {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
    // 鼠标离开开始播放
    timer = setInterval(() => {
      // 调用右侧按钮的点击事件
      rightArrow.click()
    }, 2000)
  })
  // 根据图片的数量生成圆点
  const ul = document.querySelector('.focus ul');
  const circle = document.querySelector('.circle');
  const imageWidth = ul.children[0].offsetWidth;
  let currentIndex = 0;
  for (let i = 0; i < ul.children.length; i++) {
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
      animation(ul, -(index * imageWidth), 15)
      for (let j = 0; j < circle.children.length; j++) {
        circle.children[j].className = '';
      }
      li.className = 'current';
      // 改变全局的index变量
      currentIndex = index;
    })
    circle.appendChild(li);
  }
  // 克隆第一个节点追加到ul中
  const cloneFirstNode = ul.children[0].cloneNode(true);
  ul.appendChild(cloneFirstNode);
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
    animation(ul, -(currentIndex * imageWidth), 15);
  })
  // 点击左侧箭头让图片滑动
  leftArrow.addEventListener('click', () => {
    if (currentIndex === 0) {
      // 如果是第一张立刻滚动到最后一张克隆图
      currentIndex = ul.children.length - 1;
      ul.style.left = -currentIndex * imageWidth + 'px';
    }
    currentIndex--;
    changeCircle(circle);
    animation(ul, -(currentIndex * imageWidth), 15);
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

  // 设置定时器是轮播图定时播放
  let timer = setInterval(() => {
    // 调用右侧按钮的点击事件
    rightArrow.click()
  }, 2000)
})
