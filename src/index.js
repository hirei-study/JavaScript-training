import "./styles.css";

// // const let などの変数宣言
// var value1 = 1;
// console.log("value1: " + value1);

// // var は上書きが可能
// value1 = "aaa";
// console.log("value1: " + value1);

// // var 変数は再宣言可能
// var value1 = "value1を再宣言";
// console.log("value1: " + value1);

// let value2 = 2;
// console.log("value2: " + value2);

// // let は上書きが可能
// value2 = "bbb";
// console.log("value2: " + value2);

// // let は再宣言はできない
// let value2 = "value2を再宣言";
// console.log("value2: " + value2);

// const value3 = 3;
// console.log("value3: " + value3);

// // const は上書き不可能
// value3 = "ccc";
// console.log("value3: " + value3);

// // const は再宣言不可能
// const value3 = "value3を再宣言";
// console.log("value3: " * value3);

// const value4 = {
//   name: "hirei",
//   age: 27,
// };

// console.log("value4: " + value4);

// value4.name = "hirei-study";
// value4.address = "福岡";
// console.log("value4 オブジェクトを変更: " + value4);

// const value5 = ["dog", "cat"];
// value5[0] = "bird";
// value5.push("monkey");
// console.log(value5);
// console.log("value5: " + value5);

// テンプレート文字列
// const name = "hirei";
// const age = 27;

// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

// アロー関数
// 従来の関数の書き方
// function func1(str) {
//   return str;
// }

// const func1Test = func1("test");
// console.log("従来の書き方: " + func1Test);

// // アロー関数の書き方
// const func2 = (str) => {
//   return str;
// };
// const func2Test = func2("test2");
// console.log(`アロー関数の書き方: ${func2Test}`);

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// const func3Test = func3(10, 20);
// console.log(`合計: ${func3Test}`);

// 分割代入
// const myProfile = {
//   name: "hirei",
//   age: 27,
// };
// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(`自己紹介: ${message}`);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(`自己紹介: ${message2}`);

const myProfile2 = ["hirei", 27];
const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(`自己紹介: ${message3}`);

const [name, age] = myProfile2;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(`自己紹介: ${message4}`);
