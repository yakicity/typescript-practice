export {};
//数値のみでの配列
let numbers: number[] = [1, 2, 3];
//非推奨の別の書き方
//Arrayはインターフェース
//<>はジェネリクス
let numbers2: Array<number> = [1, 2, 3];
let strings: string[] = ['ham', 'yakiyaki'];
let strings2: Array<string> = ['ham', 'yakiyaki'];

//二次元配列のアノテーション
let nijigenn: number[][] = [
    [1, 2],
    [3, 4],
];
//複数の型、(string | number | boolean)のどれかに該当するのが配列になっているよということ
let hairetu: (string | number | boolean)[] = [1, 'ztmy', true];
let hairetu2: (string | number | boolean)[] = [false, 1, 'ztmy', true];
