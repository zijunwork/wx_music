// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      {
        id: 1,
        url: "/images/swiper_1.jpg",
        link: "https://baidu.com/"
      },
      {
        id: 2,
        url: "/images/swiper_2.jpg",
        link: "https://music.163.com/"
      },
      {
        id: 3,
        url: "/images/swiper_3.jpg",
        link: "https://mp.weixin.qq.com/"
      }
    ],

    playList: [
      {
        id: 100,
        url: "../../images/play_img_01.jpg",
        title: "又是清明雨上，折菊寄到你身旁",
        count: 2040988
      },
      {
        id: 101,
        url: "../../images/play_img_02.jpg",
        title: "献给用生命托起世界的英雄们",
        count: 6132030
      },
      {
        id: 102,
        url: "../../images/play_img_03.jpg",
        title: "暮春清明丨何似西窗谷雨茶",
        count: 1859632
      },
      {
        id: 103,
        url: "../../images/play_img_04.jpg",
        title: "可能是最好听的“抗疫歌曲”",
        count: 2000
      },
      {
        id: 104,
        url: "../../images/play_img_05.jpg",
        title: "最是流年似旧曲，暮雨纷纷又清明",
        count: 7384321
      },
      {
        id: 105,
        url: "../../images/play_img_06.jpg",
        title: "【同舟共济战疫情】抗疫交响合唱《天使告诉我》",
        count: 67345
      },
      {
        id: 106,
        url: "../../images/play_img_07.jpg",
        title: "致敬黑暗里的光 感谢你们点亮夜空",
        count: 42149999
      }
    ],

    fillList: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let listLength = this.data.playList.length;
    for(let i = 0, len = (3 - listLength % 3); i < len; i++) {
      this.data.fillList.push(i);
    }
    this.setData({
      "fillList": this.data.fillList
    })
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