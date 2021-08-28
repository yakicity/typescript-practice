export {};

//型エイリアス
type Object = {
    name: string;
    age: number;
};

const example1: Object = {
    name: 'ham',
    age: 43,
};

//オブジェクトの型を作るものがインターフェース
//イコールは不要
interface ObjectIn {
    name: string;
    age: number;
}

const example2: ObjectIn = {
    name: 'ham',
    age: 43,
    //age: true
};
