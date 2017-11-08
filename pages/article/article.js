// pages/article/article.js
const fetch = require('../../utils/fetch.js');
const CONFIG = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    data:{},
    body:'',
    img:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    fetch(`${CONFIG.API.news }/${options.id}`, {})
      .then(res => {
        console.log(res)
        let body = res.data.body;
        body = body.match(/<p>.*?<\/p>/g);
        let ss = [];
        for (var i = 0, len = body.length; i < len; i++) {

          ss[i] = /<img.*?>/.test(body[i]);

          if (ss[i]) {
            body[i] = body[i].match(/(http:|https:).*?\.(jpg|jpeg|gif|png)/);
          } else {
            body[i] = body[i].replace(/<p>/g, '')
              .replace(/<\/p>/g, '')
              .replace(/<strong>/g, '')
              .replace(/<\/strong>/g, '')
              .replace(/<a.*?\/a>/g, '')
              .replace(/&nbsp;/g, ' ')
              .replace(/&ldquo;/g, '"')
              .replace(/&rdquo;/g, '"');
          }
        }
        this.setData({
          loading: false,
          img:res.data.image,
          data: res.data,
          body:body
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