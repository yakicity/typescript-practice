export {};

let name = 'ztmy';
name = 'zutomayo';
//コンストアサーション
let nickname = 'zutomayo' as const;
nickname = 'ham';

//オブジェクトの場合でもいける
//しかも、as const にすると、中身がすべてreadonlyのものになるのでおすすめ
let profile = {
    name: 'ztmy',
    height: 169,
} as const;
progile.name = 'ham';
