let a1 = { name: "Micah", age: 39 };
let b = a1; //a里面没有age也没有关系
console.log(b);
function f(x) {
    console.log(x);
}
// f({name:"Arrick",b:3423})   //区别于赋值，传参严格检查 多了少了都不行！ 
const f1 = (r) => r * r * 123;
console.log(f1(432));
let myArr = new Array("1", "2", "3");
console.log(myArr[2], typeof (myArr[2]));
const ddd = {
    book: `fuck you!`
};
console.log(`fuck me ${ddd.book}`); //模板字变量，必须要时反引号 ` tab上面那个按键
