// pages/message/message.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    access_token:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token',
      data:{
        grant_type:'client_credential',
        appid:'wx480c49248e4c9aa7',
        secret:'cdda9bf108371974b28a3e1412a7092c'
      },
      method:'get',
      success:function(res){
        _this.setData({
          access_token: res.data.access_token
        })
      }
    })
  },
  formSubmit: function (e) {
    var _this=this;
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(_this.data.access_token,'access_token')
    console.log(app.globalData.openid,'openid')
    console.log(e.detail.formId,'formid');
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + _this.data.access_token,
      data:{
        // "access_token": _this.data.access_token,
        "touser": app.globalData.openid,
        "template_id": 'tbi5uRB44xz7pwZQWzPYmn7FSizCs-9I3X4JUWudEfc',
        "form_id": e.detail.formId,
        "data": {
          "k eyword1": {
            "value": "339208499",
            "color": "#173177"
          },
          "keyword2": {
            "value": "2018年3月26日",
            "color": "#173177"
          },
          "keyword3": {
            "value": "1000元",
            "color": "#173177"
          },
          "keyword4": {
            "value": "15999999999",
            "color": "#173177"
          }
        },
        "emphasis_keyword": "keyword3.DATA" 
      },
      method:'post',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})