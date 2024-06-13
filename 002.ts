const highOrderFunction = (operation: (a: number, b: number) => number) => {
    return operation(5, 3);
};

console.log(highOrderFunction((a, b) => a + b)); // 输出: 8
console.log(highOrderFunction((a, b) => a * b)); // 输出: 15