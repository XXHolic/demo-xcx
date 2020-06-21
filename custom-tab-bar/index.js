// components/component-tag-name.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#fb7299",
    "list": [
      {
        "pagePath": "pages/index/index",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/home-active.png",
        "text": "首页"
      }, 
      {
        "pagePath": "pages/category/index",
        "iconPath": "images/category.png",
        "selectedIconPath": "images/category-active.png",
        "text": "分类"
      },
      //  {
      //     "pagePath": "pages/mine/index",
      //     "iconPath": "images/user-center.png",
      //     "selectedIconPath": "images/user-center-active.png",
      //     "text": "我的"
      //   }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
