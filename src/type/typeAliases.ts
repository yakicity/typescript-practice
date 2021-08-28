export {};

//Mojiはstring
type Moji = string;

//この二つは同じ
const fooString: string = 'ztmy';
const barString: Moji = 'ztmy';

const example1 = {
    name: 'ham',
    age: 43,
};

//これが型エイリアス
type Profile = {
    name: string;
    age: number;
};

const example2: Profile = {
    name: 'ham',
    age: 43,
};

//だけど上のように一位近くのめんどくさい＋例がある…example1
//ならtypeofでexample1と全く同じ型を作ることができる
type Profile2 = typeof example1;
