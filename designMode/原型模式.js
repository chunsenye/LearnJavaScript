function Student(name,gender,score){
    this.name=name;
    this.gender=gender;
    this.score=score;
}
var a =new Student('l','boy',98);
var b =new Student('l','boy',98);
// 当我们使用以上的new 是会创建两个相同的 play方法
// 我们可以只是使用引用

// 创建一次 多次引用

function play(){
    console.log('喜欢玩游戏');
}
a.play=play;
console.log(a.play)
console.log(play)
a.play()

//原型方式的书写

Student.prototype.ppp=play;

console.log(a.ppp)

// 原型
function Car(){
}

Car.prototype.color='blue'
let car1=new Car();

let car2=new Car();
car1.color='green'
console.log(car1.color);
console.log(car2.color);
