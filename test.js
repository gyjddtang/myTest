/**
 * Created by MiliGao 2018/4/26.
 */


function box() {
    let arr = [];
    for(let i = 0; i < 5; i++) {
        arr[i] = function () {
            return i;
        }
    }
    return arr;
}

console.log(box()[0]());