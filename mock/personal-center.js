/*个人中心 mock数据*/

/*我的订单*/
const orderlistData = [
    {
      "serviceCategoryId": "XXXXXXXXXXXXXXXXXXXXXXXX",
      "serviceCategoryName": "补胎",
      "location": "",
      "locationLat": 40.1,
      "locationLng": 20.2,
      "createTime": "yyyy-MM-dd HH:mm",
      "appointmentTime": "yyyy-MM-dd HH:mm",
      "orderStatus": {
        "key": 200,
        "value": "已接单"
      },
      "orderId": "XXXXXXXXXXXXXXXXXXXXXXXX",
      "distance": "9",
      "totalAmount": 99.99
    },
  {
    "serviceCategoryId": "XXXXXXXXXXXXXXXXXXXXXXXX",
    "serviceCategoryName": "补胎",
    "location": "",
    "locationLat": 40.1,
    "locationLng": 20.2,
    "createTime": "yyyy-MM-dd HH:mm",
    "appointmentTime": "yyyy-MM-dd HH:mm",
    "orderStatus": {
      "key": 300,
      "value": "待付款"
    },
    "orderId": "XXXXXXXXXXXXXXXXXXXXXXXX",
    "distance": "9",
    "totalAmount": 99.99
  }
];

/*我的优惠券 联调时注意字段*/
const couponListData = {
  "unused": [
    {
      id: '001', //优惠券id
      isDiscount: true, //是否为折扣券
      discount: '0.8',	//折扣
      parPrice: '5', //票面价值
      priceDesc: '满30元使用',	//优惠面价格描述
      couponDesc: '我是优惠券-未使用',	//优惠券描述
      isForever: false,	//是有永久有效
      relatedDate: '2018.12.1'	//有效期至
    },
    {
      id: '002', //优惠券id
      isDiscount: true, //是否为折扣券
      discount: '0.8',	//折扣
      parPrice: '5', //票面价值
      priceDesc: '满30元使用',	//优惠面价格描述
      couponDesc: '我是优惠券-未使用',	//优惠券描述
      isForever: false,	//是有永久有效
      relatedDate: '2018.12.1'	//有效期至
    }
  ],
  "used": [
    {
      id: '001', //优惠券id
      isDiscount: true, //是否为折扣券
      discount: '0.8',	//折扣
      parPrice: '5', //票面价值
      priceDesc: '满30元使用',	//优惠面价格描述
      couponDesc: '我是优惠券-已使用',	//优惠券描述
      isForever: false,	//是有永久有效
      relatedDate: '2018.12.1'	//有效期至
    }
  ]
};

/*账户记录*/
const accountListData = {
    "totalIncome": 39.77,
    "balance": 0,
    "todayIncome": 0,
    "flow": [
        {
          "type": "提现",
          "amount": "20.37",
          "dateTime": 1541554618000,
          "datetime": "2018-11-07 09:36:58"
        },
        {
          "type": "订单工时收入",
          "amount": "19.4",
          "dateTime": 1541554574000,
          "datetime": "2018-11-07 09:36:14"
        }
    ]
};

module.exports = {
  orderlist: orderlistData,
  couponList: couponListData,
  accountList: accountListData
}