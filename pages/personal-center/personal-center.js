//个人中心页

Page({
  data: {
    myInfo: [
      {
          list: [
            {
              icon: '../../common/img/order_icon.png',
              text: '我的订单',
              url: '../order-list/order-list'
            },
            {
              icon: '../../common/img/coupon_icon.png',
              text: '我的优惠券',
              url: '../coupon/coupon'
            },
            {
              icon: '../../common/img/car_icon.png',
              text: '我的车辆',
              url: ''
            }
          ]
      },
      {
        list: [
          {
            icon: '../../common/img/account_icon.png',
            text: '我的账户',
            url: '../account/account'
          },
          {
            icon: '../../common/img/qr_code_icon.png',
            text: '推广二维码',
            url: ''
          }
        ]
      },
      {
        list: [
          {
            icon: '../../common/img/service_price_icon.png',
            text: '服务价目表',
            url: ''
          },
          {
            icon: '../../common/img/agreement_icon.png',
            text: '用户协议',
            url: ''
          },
          {
            icon: '../../common/img/tel_icon.png',
            text: '联系客服',
            url: ''
          },
          {
            icon: '../../common/img/exit_icon.png',
            text: '退出登录',
            url: ''
          }
        ]
      }
    ],
    iconSrc: '../../common/img/order_icon.png',
    avatarSrc: '../../common/img/avatar_circle.png'
  },
  //事件处理函数
  openPage: function (e) {
    let pageUrl = e.currentTarget.dataset.url;
    console.log('openPage:' + pageUrl);
    wx.navigateTo({
      url: pageUrl
    });
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
    
  }
})
