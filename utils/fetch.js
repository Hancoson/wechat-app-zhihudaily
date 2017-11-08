/**
 * 抓取远端API的结构
 * @param  {String} path   请求路径
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
module.exports = function (path, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${path}`,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}