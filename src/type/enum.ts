export {};

//enumとは列挙型
//各要素に番号が降られている
enum Months {
    January,
    February,
    March,
}

enum Months2 {
    January = 1,
    February,
    March,
}
console.log(Months.February);
console.log(Months2.February);

enum Colors {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    BLACK = '#00000',
}
let red = Colors.RED;
console.log(red);

//あとからの追加も普通にできる
enum Colors {
    YELLOW = 'FFFF00',
}
let yellow = Colors.YELLOW;
