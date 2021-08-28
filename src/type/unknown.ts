export {};

//関数を用意。引数無しでnumber型の43を返すもの
const kansu = (): number => 43;

//any もunknownも型がよくわからないときに使うけど…unknownのほうがよさげ
//なぜなら、anyはコンパイル時にエラーが怒らないが、
//unknownはエラーがおこる
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

//anyのときは10を足すことができてしまう…もしnumberでなかったらおかしなことになってしまう
//一方unknownにはnumber型の10を足すことがコンパイル時にできないことになる
//そのため、もしそのことをするためには以下のように型ガードをする必要がある

let sumAny = numberAny + 10;
//let sumUnknown = numberUnknown + 10;
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
    console.log(sumUnknown);
}
