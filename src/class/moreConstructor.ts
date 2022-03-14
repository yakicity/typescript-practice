export {};

/*
class Person {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
*/
//アクセス修飾子をコンストラクタメソッドに書くと、上と同じことができる
class Person {
    constructor(public name: string, protected age: number) {}
}
const me = new Person('ztmy', 19);
console.log(me);
