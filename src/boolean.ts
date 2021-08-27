export {};

let name = 'typescript'
//グローバル空間にすでに宣言されている変数を使ってしまうというエラーを回避したいので
//このファイルをモジュール化する…先頭にexportを書いている。
let isFinished: boolean = true;
//isFinished = 1;
//もしjavascriptなら上のfalseはエラーにならない。勝手に型を変えてしまう。
console.log({ isFinished });