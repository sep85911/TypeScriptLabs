
// let str:string = "fuck windows11";

const arr:Array<any> = new Array<any>()

arr.push(1)
arr.push(false)
arr.push(0.34)

console.log(arr.length) //打印arr长度


export {} //告诉编译器这个文件是一个模块（module），而不是一个全局脚本（script） 1、防止全局命名冲突 2、明确模块意图  副作用：1、无法再导入此模块 2、可能引起混淆