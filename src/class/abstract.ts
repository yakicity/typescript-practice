export {};

//抽象メソッドとは、かならずオーバーライドをしないといけないもの
//抽象メソッドとメソッドをすることで、子クラスでオーバーライドのし忘れをなくすことができる
abstract class Animal {
    //抽象メソッドは抽象クラスのみで定義されていないといけない
    abstract cry(): string;
}

class Lion extends Animal {
    cry() {
        return 'roar';
    }
}
//class Tiger extends Animal{}

class Tiger extends Animal {
    cry() {
        return 'grrr';
    }
}
