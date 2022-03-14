export {};

//class Maho {}
//class Souyro {}

//tscでは一つのクラスしか継承できない
//が、複数のインターフェースを継承のようなことをできる
//そのことは継承ではなく実装と呼ぶ
//class Taro extends Maho {}

interface Kenja {
    //処理の実態がわからないメソッド＝シグネチャーという
    ionazun(): void;
}
interface Senshi {
    Kougeki(): void;
}
class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('ionazun');
    }
    Kougeki(): void {
        console.log('ionazun');
    }
}
const jiro = new Jiro();
jiro.Kougeki();
jiro.ionazun();
