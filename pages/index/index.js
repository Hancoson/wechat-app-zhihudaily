//index.js 获取应用实例
const sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()
const fetch = require('../../utils/fetch.js');
const CONFIG = require('../../utils/config.js')
import {getDate, subString} from '../../utils/getDate.js'
Page({
  data: {
    top: 10,
    inputShowed: false,
    inputVal: "",
    loading: true,
    time: '',
    items: [],
    title: '',
    tabs: [
      "当天日报", "过往日报"
    ],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    top_stories: {},
    currentPage: 1
  },

  // 上拉加载更多
  loadMore: function () {
    setTimeout(function () {
      console.log('上拉加载更多');

    }, 300);
  },

  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    fetch(`${CONFIG.API.last}`, {}).then(res => {
      this.setData({
        loading: false,
        time: subString(res.data.date),
        items: res.data.stories,
        top_stories: res.data.top_stories
          ? res.data.top_stories
          : this.data.top_stories
      })
    }).catch(e => {
      this.setData({title: '获取数据异常', loading: false})
    })

  },
  tabClick: function (e) {
    console.log(e)
    let url = '';
    url = e.currentTarget.id === '1'
      ? `${CONFIG.API.before}/${getDate()}`
      : `${CONFIG.API.last}`
    this.setData({sliderOffset: e.currentTarget.offsetLeft, activeIndex: e.currentTarget.id});

    fetch(`${url}`, {}).then(res => {

      console.log(111, subString('20171108'))
      this.setData({
        loading: false,
        time: subString(res.data.date),
        items: res.data.stories,
        top_stories: res.data.top_stories
          ? res.data.top_stories
          : this.data.top_stories
      })
      console.log(res, this)
    }).catch(e => {
      this.setData({title: '获取数据异常', loading: false})
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this)
  },

  showInput: function () {
    this.setData({inputShowed: true});
  },
  hideInput: function () {
    this.setData({inputVal: "", inputShowed: false});
  },
  clearInput: function () {
    this.setData({inputVal: ""});
  },
  inputTyping: function (e) {
    this.setData({inputVal: e.detail.value});
    console.log(e)
  }
})
