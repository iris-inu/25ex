// index.js
Page({
  data: {
    src : '/images/logo.png',
    name : 'Hello World'
  },

  onLoad(){
    if(wx.getUserProfile){
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  getMyInfo: function(e){
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        console.log(res)
        this.seetData({
          src: res.userInfo.avatarUrl,
          name: res.userInfo.nickName
        })
      }
    })
  }
})
