"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _001_1 = require("./001");
console.log(_001_1.myName);
(0, _001_1.sayMyName)(_001_1.myName);
function TestFunc(id) {
    console.log(`这是ID：${id}`);
    // return 1
}
TestFunc.apply(321, [123]);
//# sourceMappingURL=index.js.map