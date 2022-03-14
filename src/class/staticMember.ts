import { Z_TEXT } from 'zlib';

export {};

//newによってアクセスしなくても同じメンバーをつくりたい

//今までのクラス
/*
class Me {
    //初期化もまとめておこなう動的メンバーのやり方
    //そのためコンストラクタはいらない
    isProgrammer:boolean = true;
    firstName:string = 'zt';
    lastName:string = 'my';
}
*/

//let me = new Me();
//console.log(me.firstName);

//動的メンバーなら毎回インスタンスを作るためにnewを使ってインスタンスを作り、
//それを使わないといけない
//決まった値があって、それを使いたいなら静的メンバーのほうが楽
//頭にstaticをつけると静的メンバーになる

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'zt';
    static lastName: string = 'my';
    //メソッドに対しても静的メンバー化できる
    static work() {
        //return `Hey! ${Me.firstName}`;
        //上のやつだとMeを使っているので汎用性がない
        //そのため上のは下ので書くことが多い
        return `Hey! ${this.firstName}`;
    }
}
//静的メンバーへのアクセスの仕方
console.log(Me.isProgrammer);
console.log(Me.work());
