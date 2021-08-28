export {};

//ただの関数、アノテーションのみ

function bmi(height: number, weight: number): number {
    return weight / (height * height);
}

//無名関数

//アノニマス,アノテーションなし
let bmi2 = function (height: number, weight: number): number {
    return weight / (height * height);
};

//アノテーションあり
let bmi3: (height: number, weight: number) => number = function (
    height: number,
    weight: number
): number {
    return weight / (height * height);
};

//アロー関数

let bmi4: (height: number, weight: number) => number = (
    height: number,
    weight: number
): number => {
    return weight / (height * height);
};
//returnの省略
let bmi5: (height: number, weight: number) => number = (
    height: number,
    weight: number
): number => weight / (height * height);

console.log(bmi(1.69, 49));
console.log(bmi2(1.69, 49));
console.log(bmi3(1.69, 49));
console.log(bmi4(1.69, 49));
console.log(bmi5(1.69, 49));
