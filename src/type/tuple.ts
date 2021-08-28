export {};

let profile: (string | number)[] = ['ztmy', 2];
let profile2: (string | number)[] = [2, 'ztmy'];
//ユニオンタイプ＝だと、型の順番に制約を持たすことができない

//一方下のようなのをタプル型というが、これらは順番が大事
//そのため、profile4はエラーになってしまう
let profile3: [string, number] = ['ztmy', 2];
//let profile4: [string , number] = [2, 'ztmy'];
