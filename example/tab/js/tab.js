addEventListener('load', () => {
  let _this;
  class Tab {
    constructor(id) {
      _this = this
      this.tab = document.querySelector(`#${id}`)
      // 获取全部的tab-list
      this.tabList = this.tab.querySelectorAll('nav ul li')
      // 获取全部的tab-context
      this.tabContent = this.tab.querySelectorAll('.tabscon section')
      // 获取添加按钮
      this.tabAdd = this.tab.querySelector('.tabadd')
      // 绑定点击事件
      this.bindTagToggleEvent()
      // 绑定添加事件
      this.bindAddTagEvent()
    }
    bindTagToggleEvent() {
      this.tabList.forEach((item, index) => {
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
    clearTabCurrentStyle() {
      for (let i = 0; i < this.tabList.length; i++) {
        this.tabList[i].className = ''
        this.tabContent[i].className = ''
      }
    }
    addTab() {
      const newTab = `<li><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>`
      // 添加选项卡
      this.tab.querySelector('nav ul').insertAdjacentHTML('beforeend', newTab)
      // 添加内容
      const newContent = `<section>新选项内容</section>`
      this.tab.querySelector('.tabscon').insertAdjacentHTML('beforeend', newContent)
      // 重新获取的tab-list
      this.tabList = this.tab.querySelectorAll('nav ul li')
      // 重新获取的tab-context
      this.tabContent = this.tab.querySelectorAll('.tabscon section')
      // 为新添加的选项绑定点击事件
      this.bindTagToggleEvent()
    }
    editTab() {

    }
    removeTab() {

    }
  }
  new Tab('tab')
})
