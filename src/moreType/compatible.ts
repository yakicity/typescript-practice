export {};

let fooCompatible: any;
let barCompatible: string = 'ztmy';
//型互換性がある
console.log(typeof fooCompatible); //undefined
fooCompatible = barCompatible;
console.log(typeof fooCompatible); //string
//このように型互換性があると、代入したほうに型が遷移する

let fooInCompatible: number;
let barInCompatible: string = 'ztmy';
//型互換性がない
//fooInCompatible = barInCompatible;

let fooString: string;
let barString: string = 'ztmy';
//型互換性がある
fooString = barString;

let fooStringLiteral: 'zutomayo' = 'zutomayo';
//型互換性がある
fooString = fooStringLiteral;

let fooNumber: number;
let barNumberLiteral: 2002 = 2002;
//型互換性がある
fooNumber = barNumberLiteral;

interface Animal {
    age: number;
    name: string;
}
class Person {
    constructor(public age: number, public name: string) {}
}
let me: Animal;
me = new Person(43, 'ztmy');
