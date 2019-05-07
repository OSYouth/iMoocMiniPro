// pages/posts/posts.js
var postsData = require('../../data/posts-data.js') //只能用相对路径

Page({
  //产生事件 捕捉事件 回调函数 处理事件
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      posts_key: postsData.postList
    })
  },

  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    console.log("on post id is " + postId);
    wx.navigateTo({
      url: 'post-detail/post-detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})