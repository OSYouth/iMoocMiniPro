function convertToStarArray(stars){
  var num = stars.toString().substring(0,1);
  var array=[];
  for(var i = 1; i <= 5; i++){
    if(i<=num){
      array.push(1);
    }else{
      array.push(0);
    }
  }
  return array;
}
//源自movies.js中的getMovieListData， 必须要加一个回调函数
function http (url, callBack) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "Content-Type": ""
    },
    success: function (res) {
      callBack(res.data)
    },
    fail: function () {
      console.log(error);
    }
  })
}

module.exports = {
  convertToStarArray: convertToStarArray,
  http: http
}