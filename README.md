# 又一个知乎日报

## 说明

- 简单的知乎日报客户端，实现了获取最新文章，主题日报，日报详情，主题列表等的数据展示

- 加入[wxPares](https://github.com/icindy/wxParse)解析HTML（性能比较差）

## 数据接口

> 数据接口主要依据「[知乎日报 API](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)」

- 历史日报 - [https://news-at.zhihu.com/api/4/news/before](https://news-at.zhihu.com/api/4/news/before)
- 最新日报 -  [https://news-at.zhihu.com/api/4/news/latest](https://news-at.zhihu.com/api/4/news/latest)
- 文章 - [https://news-at.zhihu.com/api/4/news](https://news-at.zhihu.com/api/4/news)

##目录结构
```
├── app.js
├── app.json
├── app.wxss
├── config.js
├── pages
│   ├── about
│   ├── article
│   ├── index
│   └── layout
├── images
│   ├── 01.png
│   ├── 02.png
│   ├── 03.png
│   └── 04.png
└── utils
    ├── config.js
    ├── fetch.js
    ├── format.js
    ├── getDate.js
    └── util.js
```
## 开发环境
微信开发者工具 v1.01.1711020

## 主要截图
![01](http://7xtxh3.com1.z0.glb.clouddn.com/weixin-zhihu-01.png)

![02](http://7xtxh3.com1.z0.glb.clouddn.com/weixin-zhihu-02.png)

![03](http://7xtxh3.com1.z0.glb.clouddn.com/weixin-zhihu-03.png)

![04](http://7xtxh3.com1.z0.glb.clouddn.com/weixin-zhihu-04.png)

## 参考
- [UI](https://weui.io)
- [微信公众平台|小程序](https://mp.weixin.qq.com/debug/wxadoc/introduction/index.html?t=2017112)
