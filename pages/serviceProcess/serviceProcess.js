// pages/serviceProcess/serviceProcess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    processObj:[
      {
        titleNum: '01',
        titleContent:'初次沟通',
        iClass:'i1',
        serviceText:'客户和市场分析初次见面进行沟通。',
        isMargin: 'marginLT'
      }, {
        titleNum: '04',
        titleContent: ' 项目启动',
        iClass: 'i4',
        serviceText: '公司会根据客户的要求进行设计需求，其花费的时间的长短已经人力的调配等等问题都是需要明确的安排，所以其价格也是视需求而定的。',
        isMargin: 'marginLeft'
      }, {
        titleNum: '05',
        titleContent: '原型设计',
        iClass: 'i5',
        serviceText: '在达成合作的意向之后，公司会根据客户的需求进行原型的设计。等原型图出来之后，就会提交给客户进行审核和修改工作，这时原型设计好之后需要支付合同签订的20%',
        isMargin: 'marginLeft'
      }, {
        titleNum: '08',
        titleContent: '发布上线',
        iClass: 'i8',
        serviceText: '在项目建立好之后，项目便可以正式发布上线，这时需要客户支付合同签订的15%。',
        isMargin: 'marginLeft'
      }, {
        titleNum: '09',
        titleContent: '客户验收',
        iClass: 'i9',
        serviceText: '项目上线之后，客户有一段时间的运行测试，客户在运行测试完成后就会支付合同签订剩下的5%。',
        isMargin: 'marginLeft'
      }, 
       {
        titleNum: '02',
        titleContent: ' 提出需求',
        iClass: 'i2',
        serviceText: '客户提出项目的基本要求，包括客户对于小程序的功能、页面、安全、结构上的设计需求',
        isMargin: 'marginRT'
      }, {
        titleNum: '03',
        titleContent: '签订合同',
        iClass: 'i3',
        serviceText: '公司在确定价格以及制作时间之后，就会给客户一个反馈，如果客户能够接受的话，那么就达成了合作的意向，同时客户也要按照最终的价格支付合同签订的30%。',
        isMargin: 'marginRight'
      },  {
        titleNum: '06',
        titleContent: 'UI设计',
        iClass: 'i6',
        serviceText: '确定好原型图后，根据原型图进入页面的UI设计，完成后提交给客户进行审核和修改工作。',
        isMargin: 'marginRight'
      }, {
        titleNum: '07',
        titleContent: ' 开发测试',
        iClass: 'i7',
        serviceText: '在页面设计审核完成之后，公司会根据客户的页面要求进行后台的程序开发以及前后台的页面的整合测试，保证客户的平台能够顺利的运行，安全的上线,测试完成后需要客户支付合同签订的30%。',
        isMargin: 'marginRight'
      },{
        titleNum: '10',
        titleContent: '跟踪服务',
        iClass: 'i10',
        serviceText: '当客户将款项付清之后，公司就会为客户提供小程序的后台。并且程序员也会根据客户的意见作出细节上的修改，并提供相应的售后服务。',
        isMargin: 'marginRight'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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