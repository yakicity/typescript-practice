export {};

const reducer: (accumulator: number, currentValue: number) => number = (
    accumulator: number,
    currentValue: number
) => {
    //console.log({ accumulator, currentValue });
    return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
    return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
//[1, 2, 3, 4].reduce(reducer);
//実行結果
//{ accumulator: 1, currentValue: 2 }
//{ accumulator: 3, currentValue: 3 }
//{ accumulator: 6, currentValue: 4 }
