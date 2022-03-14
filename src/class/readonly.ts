export {};

//クラスのプロパティを読み取り専用にするものがreadonly

/*
class Visa { 
    readonly owner: string;

    constructor(owner:string){
        this.owner = owner;
    }
}
*/

//上のと全く同じことになる
class Visa {
    constructor(public readonly owner: string) {}
}
//一応readonlyということは外部参照可能だよねっていうことで
//readonlyのときはpublicはかける

let myVisa = new Visa('ztmy');
console.log(myVisa.owner);
//readonlyなので代入は不可能
//myVisa.owner = 'zutomayo';
