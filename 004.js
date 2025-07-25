//ps:这个文件对于理解箭头在ts中的应用有帮助！
// 主函数，接收一个数组和一个处理函数
function processData(numbers, processor) {
    const result = processor(numbers);
    console.log(`处理结果: ${result}`);
}
// 使用示例
const numbers = [1, 2, 3, 4, 5];
// 1. 计算总和
processData(numbers, (arr) => arr.reduce((sum, num) => sum + num, 0));
// 2. 计算平均值
processData(numbers, (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
});
// 3. 找出最大值
processData(numbers, (arr) => Math.max(...arr));
console.log("结束！");
