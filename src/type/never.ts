export {};

//戻ってこない
//関数のリターンする定義の型
function error(message: string): never {
    throw new Error(message);
}

//エラーハンドリングの中で実行しないといけないので
try {
    let result = error('test');
    console.log({ result });
} catch (error) {
    console.log({ error });
}

//voidはreturnされる値はないが、呼びもとにもどってくる
//neverは呼びもとにもどってこない。代入という概念というものない
//そのためbarはエラーとなってしまう
//唯一never型に代入できる方法はerre('')とすると、errorという関数の返り値はneverなのでいける

let foo: void = undefined;
let bar: never = undefined;
let bar2: never = error('only');
