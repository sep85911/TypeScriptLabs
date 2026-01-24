

let arr001:number[] = [1,2,3,4,5,6]


function func001(a:number){

    let b:number = a * 100

    console.log(b)
}

for (let index = 0; index < arr001.length; index++) {
    const element = arr001[index];

    func001(element);
}