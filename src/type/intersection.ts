import { basename } from 'path/posix';

export {};

type Pitcher1 = {
    throw: number;
};

type Batter1 = {
    batting: number;
};

const ztmy: Pitcher1 = {
    throw: 160,
};

const zutomayo: Batter1 = {
    //throw: 180,
    batting: 0.4,
};

//上の二つの型を手書きで書くのはめんどくさい（以下）
/*
type  TwoWay = {
    throw: number;
    batting: number;
}
*/

//そこで既存の型をうまく再利用
//それがインターフェースというもの

type TwoWay = Pitcher1 & Batter1;

const ootani: TwoWay = {
    throw: 165,
    batting: 0.5,
};
