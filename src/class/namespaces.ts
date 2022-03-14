export {};
/*
class Person {
    constructor(public name: string) {}
}

class Person {
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string
    ) {}
}
*/
//上のように同じ名前のクラスを作ることはできない
//そこで名前空間を作る
//名前空間＝フォルダのようなもの。
//別のフォルダには同じ名前のファイルはつくれるよねっていうことと同じことをしてる
//外からクラスをアクセスできるようにするためにはexportをつけないといけない

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {}
    }
}

const meTokyo = new Japanese.Tokyo.Person('ztmy');
console.log(meTokyo.name);

const meOsaka = new Japanese.Osaka.Person('zutomayo');
console.log(meOsaka.name);
