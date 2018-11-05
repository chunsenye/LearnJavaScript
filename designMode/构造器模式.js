function Student(name,gender,score){
    this.name=name;
    this.gender=gender;
    this.score=score;
    this.play=function(){
        console.log('喜欢玩游戏');
    }
}
var a =new Student('l','boy',98);
console.log(a)
// ES6 版本
class People{
    constructor(name,gender){
        this.name=name;
        this.gender=gender;
    }
    play(){
        console.log('es6')
    }
}
var b=new People('2','girl')
console.log(b)