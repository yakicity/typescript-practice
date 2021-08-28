export {};

//オプショナルな引数＝あってもなくてもいいやつ
let bmi0: (height: number, weight: number) => number = (
    height: number,
    weight: number
): number => weight / (height * height);

//bmi(身長,体重,console.logで出力するかどうか？)

let bmi2: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    const bmi: number = weight / (height * height);
    if (printable) {
        console.log(bmi);
    }
    return bmi;
};

bmi2(1.69, 49);
bmi2(1.69, 49, true);
bmi2(1.69, 49, false);
