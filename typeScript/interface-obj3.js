/**
 * Created by MiliGao on 2017/12/31.
 */
var p1 = {
    x: 20,
    y: 40
};
console.log(p1.x);
//p1.x = 30;   // error!
//ReadonlyArray<T>: 把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
var a = [1, 3, 5];
var ro = a;
console.log(ro);
//ro.push(5); // error!
//let b: number[] = ro;   // 把整个ReadonlyArray赋值到一个普通数组也是不可以的。
var b = ro; // 但可以用类型断言重写
console.log(b);
