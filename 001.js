var sFirst = "fuck you!";
// console.log(sFirst)
var id = 1230;
id = 2321;
var arr = [13, 434, 545, 432];
arr[5] = 312;
for (var k in arr) {
    // console.log(arr[k])
}
var Cat = /** @class */ (function () {
    function Cat(a) {
        this.age = a;
    }
    Cat.prototype.getAge = function () {
        return this.age;
    };
    Cat.prototype.setAge = function (nAge) {
        this.age = nAge;
    };
    return Cat;
}());
var cat1 = new Cat(1);
console.log(cat1.getAge());
cat1.setAge(12);
console.log(cat1.getAge());


const abc1 = new Array("a",1,false)
