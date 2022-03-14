export {};

class Person {
    name: string;
    age: number;
    //コンストラクタはリターンしないので
    //constructor(name: string, age: number):void
    //と書いてはいけない。
    //コンストラクタの返り値に対応する方のアノテーションはしてはいけない
    //もちろん、引数には必要だけどね。
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    profile(): string {
        return `name: ${this.name},age: ${this.age}`;
    }
}
//インスタンスを作ることができるようになる
let taro = new Person('Taro', 30);
console.log(taro.profile());
//newで引数を渡すと、それがコンストラクタメソッドに渡される
//通常はインスタンス生成時のもろもろの初期化処理を行うものがコンストラクタメソッド
