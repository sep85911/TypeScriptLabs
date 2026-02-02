"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myName = void 0;
exports.sayMyName = sayMyName;
exports.myName = "Micah";
function sayMyName(myWords) {
    console.log(`My Name is ${myWords}!!!`);
}
const steve = {
    name: "Steve",
    phoneBattery: 70,
    charge: function (level1, level2) {
        this.phoneBattery = level1 + level2;
    }
};
const becky = {
    name: "Becky",
    phoneBattery: 30,
};
steve.charge.apply(becky, [99, 1]);
console.log(becky.phoneBattery);
//# sourceMappingURL=001.js.map