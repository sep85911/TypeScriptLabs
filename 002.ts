const highOrderFunction = (operation: (a: number, b: number) => number) => {
    return operation(5, 3);
};

console.log(highOrderFunction((a, b) => a + b)); // 输出: 8
console.log(highOrderFunction((a, b) => a * b)); // 输出: 15


const obj001 = {
    name:"Micah",
    sex:true,
    age:39
}

const map = new Map([["abc",1],["bcd",2]])

map.forEach((value,key) => {
    console.log( key + " " + value)
});


