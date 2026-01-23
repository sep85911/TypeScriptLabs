console.log("Starting!!!!!!")

function test(a?:number):number {
    
    if(a){
        console.log(a)
        return 100
    }

    return 1
}

let ret = test();

console.log(ret)


const arr001:number[] = [1,2,3,4,5,65,6,7,8,98,9]


for (let index = 0; index < arr001.length; index++) {
    console.log("after")

    const aaa = arr001[index]
    
    const after = aaa * 100;

    test(after)

    console.log(after)
    
}