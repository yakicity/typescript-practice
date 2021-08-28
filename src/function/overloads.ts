export {};

//シグネチャーを使って下の同じ関数名のものを管理する
/*
function double(value: number): number {
    return value * 2;
}

function double(value: string): string {
    return value + value;
}
*/

//シグネチャー
//何個でもいい
function double(value: number): number;
function double(value: string): string;
//実体
//実体は一つだけじゃないと関数名が重複してますよっていうエラーがおこる
//オーバーロードでは型の制約を関数では行わなくていい。
//ユニオンタイプでやる必要はない
//型制約はこの関数よりも前に先にシグネチャーをつくっとくだけでいい
//関数の型はanyでいい
/*
function double(value: any): any {
    if (typeof value === 'number') {
        return value * 2;
    } else if (typeof value === 'string') {
        return value + value;
    } else {
        throw '引数の型だめよ';
    }
}
*/
//上のでもいいけど、無駄なのよ、elseが。シグネチャーで指定されたもの以外はこの関数にすら入らないの。
//だからシグネチャーでnumberとstringってやったら絶対他の型はこの関数に入ってこないから以下の関数で十分
function double(value: any): any {
    if (typeof value === 'number') {
        return value * 2;
    } else {
        return value + value;
    }
}
console.log(double(100));
console.log(double('fo'));
//console.log(double(true));
