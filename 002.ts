import * as fs from 'fs';

// 同步读取
const dataSync: string = fs.readFileSync('example.txt', 'utf8');
// console.log(dataSync);

// 异步读取
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时出错:', err);
    return;
  }
  console.log(data);
});

// 使用 Promise 版本的异步读取（Node.js 10+）
async function readFileAsync(): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function main() {
  try {
    const data: string = await readFileAsync();
    // console.log(data);
  } catch (err) {
    console.error('读取文件时出错:', err);
  }
}

main();
