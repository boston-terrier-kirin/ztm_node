/**
 * Object形式でexportしていない場合
 */
const hello_export_1 = require('./export_1');
console.log(hello_export_1('KIRIN'));

/**
 * Object形式でexportしてる場合
 */
const hello_export_2 = require('./export_2');

// Objectが返ってくる
console.log(hello_export_2);
// Objectの関数を呼び出しているだけだった
console.log(hello_export_2.hello('KURORO'));

/**
 * この形式は、Destructuring しているだけだった
 */
const { hello } = require('./export_2');
console.log(hello('CURRY'));

/**
 * この形式は、Destructuring しているだけだった
 */
const { names } = require('./export_2');

// 変数もexportできる
names.forEach((name) => console.log(name));
