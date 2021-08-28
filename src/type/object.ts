export {};

//:objectというアノテーションは中身の方は緩いのでstringからnumberに中身をかえてしまう
//こともできてしまう

let profile1: object = { name: 'ham' };
profile1 = { birthday: 2002 };

//より厳しいアノテーション
//これにより、numberは入らなくなるし、nameというものしかこのオブジェクトには入らない
let profile2: { name: string } = { name: 'ham' };
//profile2 = {birth: 2002};
profile2 = { name: 'ztmy' };
