const sFirst:string = "fuck you!"
// console.log(sFirst)

let id:number=1230;
id = 2321;

let arr = [13,434,545,432]
arr[5] = 312
for (const k in arr) {
    // console.log(arr[k])
}


class Cat {
    private age:number;
    constructor(a:number) {

        this.age = a
    }

    getAge()
    {
        return this.age;
    }

    setAge(nAge:number)
    {
        this.age = nAge;
    }

}

let cat1 = new Cat(1);

console.log(cat1.getAge())

cat1.setAge(12)
console.log(cat1.getAge())

