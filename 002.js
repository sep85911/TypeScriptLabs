"use strict";
// let str:string = "fuck windows11";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = new Array();
arr.push(1);
arr.push(false);
arr.push(0.34);
arr.push("shit");
console.log("arr的长度为：" + arr.length); //打印arr长度
class CPlayer {
    constructor(age = 911, name = "default name", sex = false) {
        this.age = age;
        this.name = name;
        this.sex = sex;
    } //这里关键词public会自动创建一个同名的属性
    live() {
        throw new Error("Method not implemented.");
    }
}
const p = new CPlayer();
console.log(p.name);
console.log(p.age);
console.log(p.sex);
//枚举的例子
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
function Move(direction) {
    switch (direction) {
        case Direction.UP:
            console.log("上");
            break;
        case Direction.DOWN:
            console.log("下");
            break;
        case Direction.LEFT:
            console.log("左");
            break;
        case Direction.RIGHT:
            console.log("右");
            break;
        default:
            break;
    }
}
