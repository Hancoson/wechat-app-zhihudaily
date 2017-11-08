// pages/member/member.js
const formatDateTime = require('../../utils/format.js')
const fetch = require('../../utils/fetch.js');
const CONFIG = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    fetch(CONFIG.API.member, { id: options.id })
      .then(res => {
        console.log(formatDateTime(res.data.created))
        this.setData({
          loading: false,
          data: res.data,
          time: formatDateTime(res.data.created)
        })
      })
      .catch(e => {
        this.setData({ title: '获取数据异常', movie: {}, loading: false })
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