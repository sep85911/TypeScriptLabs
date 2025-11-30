
// let str:string = "fuck windows11";

const arr:Array<any> = new Array<any>() 

arr.push(1)
arr.push(false)
arr.push(0.34)
arr.push("shit")

console.log("arr的长度为：" + arr.length) //打印arr长度

interface Person {
    age:number;
    name:string;
    sex:boolean;
    live():void;
}

class CPlayer implements Person{
    constructor(public age:number = 911,public name:string = "default name",public sex:boolean = false){}  //这里关键词public会自动创建一个同名的属性
    live(): void {
        throw new Error("Method not implemented.");
    }
}

const p:CPlayer = new CPlayer();

console.log(p.name)
console.log(p.age)
console.log(p.sex)


//枚举的例子
enum Direction{
    UP,
    DOWN,
    LEFT,
    RIGHT
}

function Move(direction:Direction)
{
    switch (direction) {
        case Direction.UP:
            console.log("上")
            break;
        case Direction.DOWN:
            console.log("下")
            break;
        case Direction.LEFT:
            console.log("左")
            break;
        case Direction.RIGHT:
            console.log("右")
            break;
    
        default:
            break;
    }
}

export {} //告诉编译器这个文件是一个模块（module），而不是一个全局脚本（script） 1、防止全局命名冲突 2、明确模块意图  副作用：1、无法再导入此模块 2、可能引起混淆