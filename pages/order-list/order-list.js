// pages/order-list/order-list.js
const mockData = require('../../mock/personal-center.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [
       {
          name: "all",
          text: "全部",
          status: "1" //请求参数 联调要修改
       },
       {
          name: "unpay",
          text: "待支付",
          status: "2" //请求参数 联调要修改
       },
       {
          name: "unEvaluated",
          text: "待评价",
          status: "3" //请求参数 联调要修改
       },
       {
          name: "Completed",
          text: "已完成",
          status: "4" //请求参数 联调要修改
       }
    ],
    curTabName: 'all',
    orderStatus: '1', //请求默认参数 联调要修改
    timeIcon: '../../common/img/time_icon.png',
    orderlistData: []
  },
  switchTab: function (e) {
    let target = e.target.dataset;
    this.setData({
      curTabName: target.name,
      orderStatus: target.status
    });
    console.log('this.curTabName:' + this.data.curTabName);
    console.log('this.orderStatus:' + this.data.orderStatus);
    this.fetchOrderList();
  },
  fetchOrderList: function() {
    console.log('======fetchOrderList=====');
    // todo:ajax请求
    this.setData({
      orderlistData: mockData.orderlist
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchOrderList();
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