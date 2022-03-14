export {};

/*
let name: any = 'Ham';
let length = name.length;
//以下のやつはよくない…だって上の行でlengthは数字だから
length = 'foo';
*/
let name: any = 'Ham';
//これでもいいが…
//let length: number = name.length;
//これでもいいが…
//let length = name.length as number;
//これか
//let length = (name as string).length;
//これがいい
let length = (<string>name).length;
