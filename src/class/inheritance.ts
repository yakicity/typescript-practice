export {};

class Animal {
    constructor(public name: string) {}
    run(): string {
        return 'I can run';
    }
}

class Lion extends Animal {
    public speed: number;
    constructor(name: string, speed: number) {
        //superは親クラスの同名メソッドのこと
        //superメソッドはAnimalのコンストラクタそのもの
        //この書き方により、nameは親クラスで初期化をし、speedは子クラスで初期化を行う
        //ということが明確になる
        super(name);
        this.speed = speed;
    }
    run(): string {
        //親クラスのrunメソッドをやるのがsuper.run()
        return `${super.run()} ${this.speed}km/h`;
    }
}

console.log(new Animal('Micky').run());
console.log(new Lion('Simba', 88).run());
