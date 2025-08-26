Page({
  data: {

    region:['xx市','xx市','xx区'],
    now:{
      temp:0,
      icon:999,
      cond_txt:'未知',
      cond_code:'999',
      humidity:0,
      pressure:0,
      vis:0,
      windDir:0,
      windSpeed:0,
      windScale:0
    }
  },
  changeRegion:function(e){
    this.setData({
      region:e.detail.value
    })
    this.getWeater();
  },
  getWeater: function(){
  var that=this;//this不可以直接在wxAPI中使用
  wx.request({
    url: 'https://p52tunh8tj.re.qweatherapi.com/geo/v2/city/lookup',
    data:{
      location:that.data.region[1],
      key:'cd06e65209cf463da53eb28ffca4bed5'
    },
    success:function(res){
      console.log(res.data)
      that.setData({
        Place_ID:res.data.location[0].id
      })
      wx.request({
        url:'https://p52tunh8tj.re.qweatherapi.com/v7/weather/now?',
        data:{
          location:that.data.Place_ID,
          key:'cd06e65209cf463da53eb28ffca4bed5'
        },
        success:function(res){
          console.log(res.data.now)
          that.setData({
            now:res.data.now
          })
        }
      })
    }
  })
  },
})