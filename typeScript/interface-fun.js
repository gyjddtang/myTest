/**
 * Created by MiliGao on 2017/12/31.
 */
var mySearch = function (source, subString) {
    var res = source.search(subString);
    return res > -1;
};
var res = mySearch('我是全部的文字信息', '全部');
console.log(res);
