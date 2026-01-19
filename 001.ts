console.log("Starting!!!!!!")


function test(a:number) {
    console.log(`年龄：${a}`)   //1旁边那个键 + ${变量名}
    console.log("fsdfsf".length)
}


function TestF<T>(arg:T):T{

    let aaa:T;

    aaa = arg;

    return aaa
}

const b = TestF<string>("fuck you!!")
