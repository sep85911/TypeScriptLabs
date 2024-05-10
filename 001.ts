const sFirst: string = "fuck you!"
// console.log(sFirst)

let id: number = 1230;
id = 2321;

let arr = [13, 434, 545, 432]
arr[5] = 312
for (const k in arr) {
    // console.log(arr[k])
}


class Cat {
    private age: number;
    constructor(a: number) {

        this.age = a
    }

    getAge() {
        return this.age;
    }

    setAge(nAge: number) {
        this.age = nAge;
    }

}

let cat1 = new Cat(1);

console.log(cat1.getAge())

cat1.setAge(12)
console.log(cat1.getAge())


let arr1 = [1, 2, 3]

const result = arr1.find(item => item < 1) as number

result * 5


let arr2: number[] = [3, 3, 6, 7, 3, 2]   //不能包含非number类型的元素了 因为前面限定了number[]
let arr3: Array<string> = ["3", "43"] //这样也行
let arr4: [number, string, number, boolean] = [1, "fdasf", 34, false]  //元组
let arr5: (number | string)[] = [3, 3, 6, 7, 3, 2, "string"]

function asyncFunction(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('操作成功，这里是结果');
            // 如果操作失败，可以这样触发：
            // reject(new Error('操作失败'));
        }, 2000); // 假设这是一个需要2秒才能完成的异步操作
    });
}

// 使用这个asyncFunction
asyncFunction()
    .then((result) => {
        console.log(result); // 2秒后输出 "操作成功，这里是结果"
    })
    .catch((error) => {
        console.error(error); // 如果操作被reject，则会捕获错误
    });



//上面的例子改为 async await
// async function asyncFunction(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('操作成功，这里是结果');
//     }, 2000);
//   });
// }

// async function callAsyncFunction() {
//   try {
//     const result = await asyncFunction();
//     console.log(result); // 2秒后输出 "操作成功，这里是结果"
//   } catch (error) {
//     console.error(error); // 如果操作被reject，则会捕获错误
//   }
// }

// callAsyncFunction();



