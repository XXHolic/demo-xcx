// components/component-tag-name.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type: Boolean,
    },
    className:{
      type: String,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false
  },
  // observers:{
  //   'swiperOptions':function(swiperOptions){
  //     const options = {...this.data.swiperOptions,...swiperOptions}
  //     console.info('observers',this.data)
  //     console.info('options',options)
  //     // this.setData({swiperOptions:options})
  //   }
  // },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      // console.info('attached',this.data)
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
