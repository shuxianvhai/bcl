// pages/coupon/coupon.js
const mockData = require('../../mock/personal-center.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
      {
        name: 'unused',
        text: '未使用'
      },
      {
        name: 'used',
        text: '已使用'
      }
    ],
    curTabName: 'unused',
    unusedData: [],
    usedData: [],
    curListData: []
  },
  switchTab: function (e) {
    let target = e.target.dataset;
    this.setData({
      curTabName: target.name,
      curListData: target.name == 'unused' ? this.data.unusedData : this.data.usedData
    });
    console.log('this.curTabName:' + this.data.curTabName);
  },
  fetchCouponList: function () {
    console.log('======fetchCouponList=====');
    // todo:ajax请求
    let couponListData = mockData.couponList;
    this.setData({
      curListData: couponListData[this.data.curTabName],
      unusedData: couponListData.unused,
      usedData: couponListData.used 
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchCouponList();
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