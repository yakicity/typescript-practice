import { rawListeners } from 'process';

export {};

//デフォルトパラメーター
//関数に値が与えられないとき、もしくはundefinedが渡されたとき関数側で初期値を与えるというもの

const nextSalary: (currentSalary: number, rate?: number) => number = (
    currentSalary: number,
    rate: number = 1.4
) => currentSalary * rate;

console.log(nextSalary(1000, 1.1));

console.log(nextSalary(1000));
