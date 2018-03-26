// pages/contactUs/contactUs.js
const industryList = require('../../utils/industryList.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    display: false,
    bgColor: true,
    industryList: industryList,
    selectIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  inputfocus: function (e) {
    console.log(e)
    this.setData({
      bgColor: false
    })
  },
  inputblur: function (e) {
    this.setData({
      bgColor: true
    })
  }, selectChange:function(ev){
this.setData({

  selectIndex:ev.detail.value
});
  }
})