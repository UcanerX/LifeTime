//app.js
App({
  birthday: null,
  list:false,
  window:null,
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    //测试github提交数据会不会乱码
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      //测试调用接口 微信的api使用教程
      //测试github 和 intellij idea的使用教程
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  },
})
