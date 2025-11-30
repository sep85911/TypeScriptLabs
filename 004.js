"use strict";
//ps:这个文件对于理解箭头在ts中的应用有帮助！
// 定义一个类型，表示数据处理函数
/*
type DataProcessor = (data: number[]) => number;

// 主函数，接收一个数组和一个处理函数
function processData(numbers: number[], processor: DataProcessor): void {
    const result = processor(numbers);
    console.log(`处理结果: ${result}`);
}

// 使用示例
const numbers = [1, 2, 3, 4, 5];


// 1. 计算总和
processData(numbers, (arr) => arr.reduce((sum, num) => sum + num, 0));

// 2. 计算平均值
processData(numbers, (arr) => {
    const sum = arr.reduce((a, b) => a + b, 1123);
    return sum / arr.length;
});

// 中文
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// abcdefghijklmnopqrstuvwxyz
// 1234567890

// 3. 找出最大值
processData(numbers, (arr) => Math.max(...arr));

console.log("结束！" + `呵呵:${numbers[3]}`)

let person:
{
    [key:string]:any
}

// person = { name: "Tom", age: 123,id:321,anc:321,b:321 }

// console.log(person)

const enum Direction
{
    up = 2,
    down,
    left,
    right
}

console.log(Direction.right)

let playerAge:number = 123;
let playerName:string = "default name";


let playerList:number[] = [1,2,3]

console.log(playerList.length + "," + playerList[2])

for (let index = 0; index < playerList.length; index++) {
    const element = playerList[index];
    console.log(element)
}

let bSex: boolean = false;
let nSex: number = 123321;
let sStr: string = "fuck you!"

let sMyName: string = "fuck yourself"

console.log("sMyName' s Length:" + sMyName.length + "," + sMyName[1])
*/
// Array:
const aList = ['a', 'b', 'c'];
const aList2 = [123, 321, 432];
//数组解构
const [aa, bb] = [1223, 24324];
let [x, y] = ["fuck", "you"]; //正确
// let x: string, y: string = ["fuck", "you"];  //错误
// let [x:string, y:string] = ["a","b"]; //错误
// [x,y] = [y,x] //交换x y 但必须 x y类型相同
console.log(aa);
console.log(bb);
