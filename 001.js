"use strict";
console.log("Starting!!!!!!");
function test(a) {
    if (a) {
        console.log(a);
        return 100;
    }
    return 1;
}
let ret = test();
console.log(ret);
ret = test("world");
console.log(ret);
const arr001 = [1, 2, 3, 4, 5, 65, 6, 7, 8, 98, 9];
for (const key in arr001) {
    const element = arr001[key];
    const after = element * 100;
    console.log(after);
}
//# sourceMappingURL=001.js.map