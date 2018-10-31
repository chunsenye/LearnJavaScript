// 闭包 closure
// 什么是闭包？
/**
 * 闭包是一个现象
 * 存在这么一个函数
 * 这个函数引用了外部的变量
 */
// 闭包有什么用？
/**
 * 可以使用私有属性
 */
// 第一个闭包
function Circle(r){
    this.r=r
}
Circle.prototype.area=function(){
    return this.r*this.r*Math.PI
}
// Circle.pi=5;
var circle = new Circle(2)
console.log(Circle)
console.log(circle.area())


































 
 
 
 
 
 
 
 
 







