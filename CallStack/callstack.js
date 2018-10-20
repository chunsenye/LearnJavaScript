// 看一下这段代码的输出顺序

setTimeout(function(){
    console.log(111)
});
new Promise(function(resolve){
    console.log(222);
    // for(var i = 0; i < 10000; i++){
    //     i == 99 && resolve();
    // }
    resolve();
}).then(function(){
    console.log(333)
});
console.log(444);
// 最后输出的是这个
// 222
// 444
// 333
// 111

/**
 *
 *   
 * 
 */
console.log(1111);
setTimeout(function(){
    console.log(2222)
});
console.log(3333);

