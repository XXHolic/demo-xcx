//获取应用实例
const app = getApp()

Component({
  data: {
    list:[],
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  methods:{
    handlerTabChange:({detail})=>{
      console.info('change detail',detail)
    },
    //事件处理函数
    bindViewTap: function() {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },
    scroll(e) {
      console.log(e)
    },
    scrollToTop() {
      this.setAction({
        scrollTop: 0
      })
    },
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      new Promise((resolve) => {
        console.info('fdsafs')
        setTimeout(() => {
          resolve({
            code:200,
            data:[
              {
                id:1,
                imgSrc:'https://xxholic.github.io/demo-xcx/images/poster.jpg',
                title:'一局出乎y意料的事件发生，大家打炉石都挺了下大家啊开发了大放大镜了范德萨佛挡杀佛的范德萨',
                status:'百万播放',
                author:'小小子',
                count:'3444.4万'
              }
            ]
          })
        },2000)
      }).then((res) => {
        const {data} = res;
        console.info({data})
        this.setData({
          list:data
        })
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})
