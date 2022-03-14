export {};

class Person {
    //アクセス修飾子
    //publicはどこからでも参照可能
    //publicは書いてもか書かなくても普通なので書かないのが普通
    //privateは外部からのアクセスは不可能
    //だけど、内部からのアクセスは可能→profileメソッドの中ではアクセス可能
    //protected…privateとは異なり、子クラスから参照されることもできる

    public name: string;
    private age: number;
    protected nationality: string;

    //上で作った変数はコンストラクタで初期化する必要がある
    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
    profile(): string {
        return `name: ${this.name},age: ${this.age}`;
    }
}

//Personクラスを継承
class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        //親クラスのコンストラクタメソッドと同じことをできるのがsuper()
        super(name, age, nationality);
    }
    profile(): string {
        //return `name: ${this.name},age: ${this.age},nationality:${this.nationality}`;
        //親クラスでprivateだったageは子クラスで参照できない
        //しかし親クラスでprotectedだったnationalityは子クラスで参照できる
        return `name: ${this.name},nationality:${this.nationality}`;
    }
}
let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
//↓privateというアクセス修飾子によって、外部からアクセスが不可能になったためエラー
//console.log(taro.age);
