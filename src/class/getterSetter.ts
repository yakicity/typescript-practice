export {};

//owner:所有者の管理、初期化時に設定、途中に変更できない、参照できる
//secretNumber:個人番号、初期化時に設定、途中で変更可能、参照できない

class MyNumber {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }
    //get,setのメソッド名と上の変数は名前が同じではいけない
    //そのため、メンバー名をアンダースコアにした
    //参照専用のメソッドをgetterという
    //getをつかう
    get owner() {
        return this._owner;
    }
    //途中で変更できるようにするためにするメソッドをsetterという
    //setを使う
    set secretNumber(secretNumber: number) {
        this._secretNumber = this.secretNumber;
    }
    debugPrint() {
        return `secretNumber: ${this._secretNumber}`;
    }
}

let card = new MyNumber('ztmy', 11111);
console.log(card.debugPrint);
card.secretNumber = 2222222222;
console.log(card.debugPrint);
console.log(card.owner);
console.log(card.secretNumber);
//上の結果はundefinedなので参照されない
//card._secretNumber
