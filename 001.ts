// import * as fs from 'fs';

const sFirst: string = "fuck you!"
// console.log(sFirst)

let id: number = 1230;
id = 2321;

const arr = [13, 434, 545, 432, false]
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

let a = 123;


//ts的监听者模式 ai写的
// 定义监听者接口
interface Observer {
    // 更新方法
    update(subject: Subject): void;
}

// 定义主题接口
interface Subject {
    // 注册监听者
    registerObserver(observer: Observer): void;
    // 移除监听者
    removeObserver(observer: Observer): void;
    // 通知所有监听者
    notifyObservers(): void;
    // 获取状态
    getState(): number;
}

// 具体的主题类
class ConcreteSubject implements Subject {
    // 监听者列表
    private observers: Observer[] = [];

    // 主题的状态
    private state: number;
    
    constructor(initialState: number) {
        this.state = initialState;
    }

    // 注册监听者
    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    // 移除监听者
    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    // 通知所有监听者
    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    // 设置状态
    setState(state: number): void {
        this.state = state;
        this.notifyObservers();
    }

    // 获取状态
    getState(): number {
        return this.state;
    }
}

// 具体的监听者类
class ConcreteObserver implements Observer {
    // 观察者的名字
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    // 更新方法
    update(subject: Subject): void {
        console.log(`${this.name} received update. New state:${subject.getState()}`);
    }
}

console.log("---------------------------------------");
// 使用例子
// const subject = new ConcreteSubject(1);
// const observer1 = new ConcreteObserver('Observer 1');
// const observer2 = new ConcreteObserver('Observer 2');

// subject.registerObserver(observer1);
// subject.registerObserver(observer2);

// subject.setState(10); // Observer 1 received update. New state: 10
//                        // Observer 2 received update. New state: 10

// subject.setState(20); // Observer 1 received update. New state: 20
//                        // Observer 2 received update. New state: 20

// subject.removeObserver(observer1);

// subject.setState(30); // Observer 2 received update. New state: 30


