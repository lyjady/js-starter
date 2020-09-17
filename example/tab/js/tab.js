addEventListener('load', () => {
  let _this;
  class Tab {
    constructor(id) {
      _this = this
      this.tab = document.querySelector(`#${id}`)
      // 初始化元素获取与绑定点击事件
      this.initElement();
      // 获取添加按钮
      this.tabAdd = this.tab.querySelector('.tabadd')
      // 绑定添加事件
      this.bindAddTagEvent()
    }
    initElement() {
      // 重新获取的tab-list
      this.tabList = this.tab.querySelectorAll('nav ul li')
      // 重新获取的tab-context
      this.tabContent = this.tab.querySelectorAll('.tabscon section')
      // 为选项绑定点击事件
      this.bindTagToggleEvent()
      // 绑定删除事件
      this.bindTagRemoveEvent()
      // 绑定双击事件
      this.bindDoubleClickEvent()
    }
    bindTagToggleEvent() {
      this.tabList.forEach((item, index) => {
        item.index = index
        item.addEventListener('click', () => {
          _this.clearTabCurrentStyle()
          item.className = 'liactive'
          _this.tabContent[index].className = 'conactive'
        })
      })
    }
    bindAddTagEvent() {
      this.tabAdd.addEventListener('click', () => {
        _this.addTab()
      })
    }
    bindTagRemoveEvent() {
      this.tabList.forEach(li => {
        const removeBtn = li.querySelector('span:nth-child(2)')
        removeBtn.onclick = e => this.removeTab(e, removeBtn)
      })
    }
    bindDoubleClickEvent() {
      this.tabList.forEach(item => {
        item.ondblclick = () => this.editTab(item)
      })
      this.tabContent.forEach(item => {
        item.ondblclick = () => this.editTab(item)
      })
    }
    clearTabCurrentStyle() {
      for (let i = 0; i < this.tabList.length; i++) {
        this.tabList[i].className = ''
        this.tabContent[i].className = ''
      }
    }
    addTab() {
      this.clearTabCurrentStyle()
      const newTab = `<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>`
      // 添加选项卡
      this.tab.querySelector('nav ul').insertAdjacentHTML('beforeend', newTab)
      // 添加内容
      const newContent = `<section class="conactive"><span>${Math.random()}</span></section>`
      this.tab.querySelector('.tabscon').insertAdjacentHTML('beforeend', newContent)
      this.initElement()
    }
    editTab(tab) {
      const originValue = tab.innerText
      tab.querySelector('span:first-child').innerHTML = `<input type="text" value="${originValue}"/>`
      const input = tab.querySelector('input')
      input.onblur = () => {
        const value = tab.querySelector('span input').value;
        tab.querySelector('span:first-child').innerHTML = `${value}`
      }
      input.onkeyup = e => {
        if (e.code === 'Enter') {
          input.blur()
        }
      }
    }
    removeTab(e, removeBtn) {
      e.stopPropagation()
      const parentNode = removeBtn.parentNode;
      const index = parentNode.index
      this.tabList[index].remove()
      this.tabContent[index].remove()
      if (!(parentNode.className.indexOf('liactive') >= 0)) {
        // 不是选中的tab不做任何切换操作
        return
      }
      this.initElement()
      // 删除选中的tab， 则前一个tab变成选中状态
      this.tabList[index - 1] && this.tabList[index - 1].click()
    }
  }
  const tab = new Tab('tab')
})
