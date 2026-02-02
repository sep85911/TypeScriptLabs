import {myName, sayMyName} from "./001"


console.log(myName)

sayMyName(myName);


function TestFunc(id:number) :void {
    
    console.log(`这是ID：${id}`)

    // return 1
}

TestFunc.apply(321,[123])