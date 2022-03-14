export {};

//型は違うけどやってることほとんど同じ…
/*
const echo = (arg:number):number => {
    return arg;
}
const echo = (arg:string):string => {
    return arg;
}
*/
//<T>はジェネリクスの宣言でTが抽象的な型であるかを示す
//この時点ではTの型は何であるかはわからないけど、何かの型
const echo = <T>(arg: T): T => {
    return arg;
};
console.log(echo<number>(100));
console.log(echo<string>('ztmy'));
console.log(echo<boolean>(true));

class Mirror<T> {
    constructor(public value: T) {}
    echo(): T {
        return this.value;
    }
}
console.log(new Mirror<number>(123).echo());
