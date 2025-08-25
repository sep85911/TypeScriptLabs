interface IPerson 
{
    name:string;
}

let a1 = {name : "Micah",age : 39}

let i1:IPerson = a1;  //a里面没有age也没有关系

function f( x:IPerson)
{
    console.log(x)
}

// f({name:"Arrick",b:3423})   //区别于赋值，传参严格检查 多了少了都不行！ 


const f1 = (r:number) => r * r * 123    //箭头函数


let myArr:string[] = new Array("1","2","3") //数组对象


const ddd = {
    book:`Micah!`
}


console.log(`Hello ${ddd.book}` )    //模板字变量，必须要时反引号 ` tab上面那个按键

// console.log("test")

// console.log("test2")

type xxx = (x: number) => string; // 声明函数类型

let a23 = 321;

const sName:string = "fuck you"

