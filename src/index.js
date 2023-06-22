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

// const myProfile2 = ["hirei", 27];
// const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
// console.log(`自己紹介: ${message3}`);

// const [name, age] = myProfile2;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(`自己紹介: ${message4}`);

// デフォルト値、引数など
// const sayHello = (name = "A") => {
//   console.log(`こんにちは。${name}さん。`);
// };
// sayHello("hirei");

// スプレッド構文
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const summaryFunc = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(`合計: ${summaryFunc(arr1[0], arr1[1])}`);
// console.log(`合計: ${summaryFunc(...arr1)}`);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(`num1: ${num1}`);
// console.log(`num2: ${num2}`);
// console.log(`arr3: ${arr3}`);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(`arr6: ${arr6}`);

// const arr7 = [...arr4, ...arr5];
// console.log(`arr7: ${arr7}`);

// mapやfilterを使った配列処理
// const nameArray = ["hirei", "tanaka", "sato", "yamada"];
// for (let i = 0; i < nameArray.length; i++) {
//   console.log(nameArray[i]);
// }

// const nameArray2 = [...nameArray];
// nameArray2.map((name) => {
//   console.log(name);
// });

// nameArray.map((name, index) => {
//   console.log(`${index + 1}番目は、${name}です。`);
// });

// const number = [1, 2, 3, 4, 5];
// const newNumArray = number.filter((num) => {
//   if (num % 2 === 0) {
//     return num;
//   }
// });

// console.log(`2で割った余りが0の場合のみ表示: ${newNumArray}`);

// const newNameArray = nameArray.map((name) => {
//   if (name === "hirei") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArray);

// 三項演算子
